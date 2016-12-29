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
    docker run -d -p 8080:8080 -p 80:80 -p 443:443 --name=frontend  --restart=always -v /var/run/docker.sock:/var/run/docker.sock pbc/traefik

    docker network create frontend

    docker network connect frontend frontend
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
NETWORK=$(docker-machine ip default)
# Fallback to localhost if docker-machine not found or error occurs
if [ -z "$NETWORK" ]; then
    NETWORK=127.0.0.1
    echo "ip not found, setting it to localhost: ${NETWORK}"
else
    echo "ip found: ${NETWORK}"
fi

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

docker build . -q;
docker-compose up -d;
echo "#########################################################################"
echo "#########################################################################"
echo "if you encounter errors, please check that the machines are not running before running this script";
echo "#########################################################################"
echo "#########################################################################"
ImageName="$(docker ps -qf "name=${IMAGE_NAME}")"

echo "#########################################################################"
echo "#########################################################################"
echo "Would you like to install dependencies?"
echo "Intro y and press enter to accept, anything else to skip this option"
echo "-------------------------------------------------------------------------"
read -e -p "##### (y??)>>: " answer;
echo " ";
case $answer in
    [yY][eE][sS]|[yY])
    echo "#########################################################################"
    echo "removing dependencies folders";
    echo "#########################################################################"
      rm -rf vendor;
      rm -rf node_modules;
      rm -rf composer.lock;
    echo "#########################################################################"
    echo "Now installing dependencies";
    echo "#########################################################################"
    echo "Opening ${IMAGE_NAME} --> container ID: $ImageName";
    docker exec -it $ImageName ./install.sh
    echo "#########################################################################"
        ;;
        *)
    echo "#########################################################################"
    echo "Opening ${IMAGE_NAME} --> container ID: $ImageName";
        ;;
esac
    echo "Going into command line (type exit and press enter to leave the container)";
    docker exec -it $ImageName bash
    echo "#########################################################################"
    echo "#################/-------------------------------------\#################"
    echo "################|  Paul Bunyan Communications Rocks!!!  |################"
    echo "#################\-------------------------------------/#################"
    echo "#########################################################################"
    echo "── ── ── ── ── ── ── ██ ██ ██ ██ ── ██ ██ ██ ── "
    echo "── ── ── ── ── ██ ██ ▓▓ ▓▓ ▓▓ ██ ██ ░░ ░░ ░░ ██ "
    echo "── ── ── ── ██ ▓▓ ▓▓ ▓▓ ▓▓ ▓▓ ▓▓ ██ ░░ ░░ ░░ ██ "
    echo "── ── ── ██ ▓▓ ▓▓ ▓▓ ██ ██ ██ ██ ██ ██ ░░ ░░ ██ "
    echo "── ── ██ ▓▓ ▓▓ ▓▓ ██ ██ ██ ██ ██ ██ ██ ██ ░░ ██ "
    echo "── ── ██ ▓▓ ██ ██ ░░ ░░ ░░ ░░ ░░ ░░ ██ ██ ██ ── "
    echo "── ██ ██ ██ ██ ░░ ░░ ░░ ██ ░░ ██ ░░ ██ ▓▓ ▓▓ ██ "
    echo "── ██ ░░ ██ ██ ░░ ░░ ░░ ██ ░░ ██ ░░ ██ ▓▓ ▓▓ ██ "
    echo "██ ░░ ░░ ██ ██ ██ ░░ ░░ ░░ ░░ ░░ ░░ ░░ ██ ▓▓ ██ "
    echo "██ ░░ ░░ ░░ ██ ░░ ░░ ██ ░░ ░░ ░░ ░░ ░░ ██ ▓▓ ██ "
    echo "── ██ ░░ ░░ ░░ ░░ ██ ██ ██ ██ ░░ ░░ ██ ██ ██ ── "
    echo "── ── ██ ██ ░░ ░░ ░░ ░░ ██ ██ ██ ██ ██ ▓▓ ██ ── "
    echo "── ── ── ██ ██ ██ ░░ ░░ ░░ ░░ ░░ ██ ▓▓ ▓▓ ██ ── "
    echo "── ░░ ██ ▓▓ ▓▓ ██ ██ ██ ██ ██ ██ ██ ▓▓ ██ ── ── "
    echo "── ██ ▓▓ ▓▓ ▓▓ ▓▓ ██ ██ ░░ ░░ ░░ ██ ██ ── ── ── "
    echo "██ ██ ▓▓ ▓▓ ▓▓ ▓▓ ██ ░░ ░░ ░░ ░░ ░░ ██ ── ── ── "
    echo "██ ██ ▓▓ ▓▓ ▓▓ ▓▓ ██ ░░ ░░ ░░ ░░ ░░ ██ ── ── ── "
    echo "██ ██ ██ ▓▓ ▓▓ ▓▓ ▓▓ ██ ░░ ░░ ░░ ██ ██ ██ ██ ── "
    echo "── ██ ██ ██ ▓▓ ▓▓ ▓▓ ██ ██ ██ ██ ██ ██ ██ ██ ── "
    echo "── ── ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ▓▓ ▓▓ ██ "
    echo "── ██ ▓▓ ▓▓ ██ ██ ██ ██ ██ ██ ██ ██ ▓▓ ▓▓ ▓▓ ██ "
    echo "██ ██ ▓▓ ██ ██ ██ ██ ██ ██ ██ ██ ██ ▓▓ ▓▓ ▓▓ ██ "
    echo "██ ▓▓ ▓▓ ██ ██ ██ ██ ██ ██ ██ ██ ██ ▓▓ ▓▓ ▓▓ ██ "
    echo "██ ▓▓ ▓▓ ██ ██ ██ ██ ██ ── ── ── ██ ▓▓ ▓▓ ██ ██ "
    echo "██ ▓▓ ▓▓ ██ ██ ── ── ── ── ── ── ── ██ ██ ██ ── "
    echo "── ██ ██ ── ── ── ── ── ── ── ── ── ── ── ── ── "
    echo "#########################################################################"
    echo "#################/-------------------------------------\#################"
    echo "################|  Paul Bunyan Communications Rocks!!!  |################"
    echo "#################\-------------------------------------/#################"
    echo "#########################################################################"