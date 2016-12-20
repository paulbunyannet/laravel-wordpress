#!/bin/sh
##############################################################
##############################################################
#load variables of env file
##############################################################
function loadenv() {
  env=${1:-.env}
  echo Loading $env
  file=`mktemp -t tmp`
  if [ -f $env ]; then
    cat $env | while read line; do
      echo export $line >> $file
    done
    source $file
  else
    echo No file $env
  fi
}
##############################################################
#load the variables!! -->
loadenv
#variables loaded <--
##############################################################
##############################################################



##############################################################
##############################################################
#if you have problems loading the docker machine, remove the # symbol from the beginning of the next two lines
#docker-machine rm default
#docker-machine create default --driver virtualbox
CONTAINER=frontend
FRONTENDRUNNING="true"
#important this will set the default vb machine so is found every time
##set docker default image to default used one
eval "$(docker-machine env default)"
#check if the front end is running. if not run it from scratch
RUNNING=$(docker inspect --format="{{ .State.Running }}" $CONTAINER 2> /dev/null)

if [ $? -eq 1 ]; then
  echo "UNKNOWN - $CONTAINER does not exist."
  FRONTENDRUNNING="false"

elif [ "$RUNNING" == "false" ]; then
  echo "CRITICAL - $CONTAINER is not running."
  FRONTENDRUNNING="false"

fi
if  [ "$FRONTENDRUNNING" == "false" ]; then
    echo "#################"
    echo "Setting the proxy"
    echo "#################"
    cd proxy
    #cd nginx #this command or the next one
    cd traefik #this command or the previous one
#    docker-compose up
    docker build . -t pbc/traefik
    cd ..
    cd ..

    docker run -d -p 8080:8080 -p 80:80 -p 443:443 -e DEFAULT_HOST=frontend --name=frontend  --restart=always -v /var/run/docker.sock:/var/run/docker.sock pbc/traefik
    #docker run -d -p 8080:8080 -p 80:80 -e DEFAULT_HOST=nginx.proxy --name=nginx-proxy --restart=always  -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy

    docker network create frontend
    #docker network create nginx

    docker network connect frontend frontend
    #docker network connect nginx nginx-proxy
fi
##############################################################
##############################################################


##############################################################
##############################################################
#now added this to the host file if it doesnt exist
## this will only work on macs (I havent tested on windows --sorry Garret)
##############################################################
    echo "#################"
    echo "check host"
    echo "#################"
STARTED=$(docker inspect --format="{{ .State.StartedAt }}" $CONTAINER)
#NETWORK=$(docker inspect --format="{{ .NetworkSettings.IPAddress }}" $CONTAINER)
NETWORK=$(docker-machine ip default)

matches_in_hosts="$(grep -n ${SERVER_NAME} /etc/hosts | cut -f1 -d:)"
host_entry="${NETWORK} ${SERVER_NAME}"

echo "#########################################################################"
echo "#########################################################################"
echo "# Please enter your password if requested so the host file is modified. #"
echo "#########################################################################"
echo "#########################################################################"

if [ ! -z "$matches_in_hosts" ]
then
    echo "Updating existing hosts entry."
    # iterate over the line numbers on which matches were found
    while read -r line_number; do
        # replace the text of each line with the desired host entry
        sudo sed -i '' "${line_number}s/.*/${host_entry} /" /etc/hosts
    done <<< "$matches_in_hosts"
else
    echo "Adding new hosts entry."
    echo "$host_entry" | sudo tee -a /etc/hosts > /dev/null
fi

echo "OK - $CONTAINER is running. IP: $NETWORK, StartedAt: $STARTED"
echo "OK - $SERVER_NAME is running. IP: $NETWORK, is running as well and has being added to the host file or it was already there ;)"

##############################################################
##############################################################


## check docker image
#docker-machine ls
docker-compose up -d  --build


