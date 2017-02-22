#!/bin/sh
REMOVEDEPENDENCIES="not";
REDOIMAGES="not";
ONECHECK="false";
TWOCHECKS="false";
VERBOSE="false";
ARG1="false";
ARG2="false";
ARG1="false"
NOT="not";
TRUE="true";
NONE='\033[00m';
BLINK='\033[5m';
BLACK='\033[01;30m';
RED='\033[01;31m';
GREEN='\033[01;32m';
YELLOW='\033[01;33m';
BLUE='\033[01;34m';
PURPLE='\033[01;35m';
CYAN='\033[01;36m';
WHITE='\033[01;37m';
BOLD='\033[1m';
UNDERLINE='\033[4m';

if [ -z $1 ]
then
  ARG1="false"
elif [ -n $1 ]
then
# otherwise make first arg as a rental
  ARG1=$1
fi
if [ -z $2 ]
then
  ARG2="false"
  ONECHECK="true"
elif [ -n $2 ]
then
# otherwise make first arg as a rental
  ARG2=$2
fi
if [ -z $3 ]
then
  ARG3="false"
  TWOCHECKS="true"
elif [ -n $3 ]
then
# otherwise make first arg as a rental
  ARG3=$3
fi

case $ARG1 in
    [-][hH]|[-][-][hH][eE][lL][pP])

    echo "${CYAN}########################################################################################${NONE}";
    echo "${CYAN}##############################${NONE} ${RED}parameters available${NONE} ${CYAN}####################################${NONE}";
    echo "${CYAN}########################################################################################${NONE}";
    echo " ";
    echo "${GREEN}   *${NONE} ${YELLOW}-h or --help${NONE}\n      ${RED} ->${NONE} to show this menu..... \n";
    echo "${GREEN}   *${NONE} ${YELLOW}open or -open or --open${NONE}\n      ${RED} ->${NONE} to do a normal docker-compose exec laravel bash..... just if you couldn't remember the command :P \n";
    echo "${GREEN}   *${NONE} ${YELLOW}down or -down or --down${NONE}\n      ${RED} ->${NONE} to do a normal docker-compose down..... just if you couldn't remember the command :P \n";
    echo "${GREEN}   *${NONE} ${YELLOW}-i or --images${NONE}\n      ${RED} ->${NONE} to tell the script that you want to build the images\n";
    echo "${GREEN}   *${NONE} ${YELLOW}-ni or --notimages${NONE}\n      ${RED} ->${NONE} to tell the script that you don't want to build the images\n";
    echo "${GREEN}   *${NONE} ${YELLOW}-d or --dependencies${NONE}\n      ${RED} ->${NONE} to tell the script that you want to install dependencies\n";
    echo "${GREEN}   *${NONE} ${YELLOW}-nd or --notdependencies${NONE}\n      ${RED} ->${NONE} to tell the script that you don't want to install dependencies\n";
    echo "${GREEN}   *${NONE} ${YELLOW}-a or --all${NONE}\n      ${RED} ->${NONE} to tell the script that you want to rebuild the images and to install dependencies\n";
    echo "${GREEN}   *${NONE} ${YELLOW}-n or --none${NONE}\n      ${RED} ->${NONE} to tell the script that you don't want to rebuild the images or to install dependencies\n";
    echo " ";
    echo "########################################################################################";
            exit;
    ;;
    [dD][oO][wW][nN]|[-][dD][oO][wW][nN]|[-][-][dD][oO][wW][nN])
            docker-compose down;
            exit;
    ;;
    [oO][pP][eE][nN]|[-][oO][pP][eE][nN]|[-][-][oO][pP][eE][nN])
            CONT=laravel
            LARAVELRUNNING="true"
            LARAVELRUNNING=$(docker inspect --format="{{ .State.Running }}" $CONTAINER 2> /dev/null)
            if [ $? -eq 1 ]; then
              echo "Warning - $CONT is not running."
              LARAVELRUNNING="false"
            fi
            if  [ "$LARAVELRUNNING" != "false" ]; then
                docker-compose exec laravel bash
                exit;
            else
                echo "${RED}##############################################################/n##############################################################";
                echo "I imagine you have already run docker-start.sh to build your images and load your dependencies, so I will just skip everything :)";
                echo "##############################################################/n##############################################################${NONE}";
                REDOIMAGES="false";
                ONECHECK="true";
            fi

    ;;
    [-][vV]|[-][-][vV][eE][rR][bB][oO][sS][eE])
          VERBOSE="true";
            echo "VERBOSE is true"
          ;;
    [-][iI]|[-][-][iI][mM][aA][gG][eE][sS])
          REDOIMAGES="true";
            echo "REDOIMAGES is true"
    ;;
    [-][nN][iI]|[-][-][nN][oO][tT][iI][mM][aA][gG][eE][sS])
          REDOIMAGES="false";
            echo "REDOIMAGES is false"
    ;;
    [-][dD]|[-][-][dD][eE][pP][eE][nN][dD][eE][nN][cC][iI][eE][sS])
          REMOVEDEPENDENCIES="true";
            echo "REMOVEDEPENDENCIES is true"
    ;;
    [-][nN][dD]|[-][-][nN][oO][tT][dD][eE][pP][eE][nN][dD][eE][nN][cC][iI][eE][sS])
          REMOVEDEPENDENCIES="false";
            echo "REMOVEDEPENDENCIES is false"
    ;;
    [-][aA]|[-][-][aA][lL][lL])
          REMOVEDEPENDENCIES="true";
          REDOIMAGES="true";
          ONECHECK="true";
            echo "REDOIMAGES is true"
            echo "REMOVEDEPENDENCIES is true"
    ;;
    [-][nN]|[-][-][nN][oO][nN][eE])
          REMOVEDEPENDENCIES="false";
          REDOIMAGES="false";
          ONECHECK="true";
            echo "REDOIMAGES is false"
            echo "REMOVEDEPENDENCIES is false"
    ;;
    *)
    ;;
esac
if [ "$ONECHECK" == "false" ]; then
    case $ARG2 in
    [-][vV]|[-][-][vV][eE][rR][bB][oO][sS][eE])
          VERBOSE="true";
            echo "VERBOSE is true"
          ;;
    [-][iI]|[-][-][iI][mM][aA][gG][eE][sS])
          REDOIMAGES="true";
            echo "REDOIMAGES is true"
          ;;
    [-][nN][iI]|[-][-][nN][oO][tT][iI][mM][aA][gG][eE][sS])
          REDOIMAGES="false";
            echo "REDOIMAGES is false"
    ;;
    [-][dD]|[-][-][dD][eE][pP][eE][nN][dD][eE][nN][cC][iI][eE][sS])
          REMOVEDEPENDENCIES="true";
            echo "REMOVEDEPENDENCIES is true"
          ;;
    [-][nN][dD]|[-][-][nN][oO][tT][dD][eE][pP][eE][nN][dD][eE][nN][cC][iI][eE][sS])
          REMOVEDEPENDENCIES="false";
            echo "REMOVEDEPENDENCIES is false"
    ;;
    *)
    ;;
    esac
else
    if [ "$ARG2" != "false" ]; then
        case $ARG2 in
        [-][vV]|[-][-][vV][eE][rR][bB][oO][sS][eE])
              VERBOSE="true";
                echo "VERBOSE is true"
              ;;
        esac
    fi
fi
if [ "$TWOCHECKS" == "false" ]; then
    case $ARG3 in
    [-][vV]|[-][-][vV][eE][rR][bB][oO][sS][eE])
          VERBOSE="true";
            echo "VERBOSE is true"
          ;;
    [-][iI]|[-][-][iI][mM][aA][gG][eE][sS])
          REDOIMAGES="true";
            echo "REDOIMAGES is true"
          ;;
    [-][nN][iI]|[-][-][nN][oO][tT][iI][mM][aA][gG][eE][sS])
          REDOIMAGES="false";
            echo "REDOIMAGES is false"
    ;;
    [-][dD]|[-][-][dD][eE][pP][eE][nN][dD][eE][nN][cC][iI][eE][sS])
          REMOVEDEPENDENCIES="true";
            echo "REMOVEDEPENDENCIES is true"
          ;;
    [-][nN][dD]|[-][-][nN][oO][tT][dD][eE][pP][eE][nN][dD][eE][nN][cC][iI][eE][sS])
          REMOVEDEPENDENCIES="false";
            echo "REMOVEDEPENDENCIES is false"
    ;;
    *)
    ;;
    esac
fi
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


echo "$REMOVEDEPENDENCIES" == "not";

##############################################################
##############################################################
#if you have problems loading the docker machine, remove the # symbol from the beginning of the next two lines
#docker-machine rm default
#docker-machine create default --driver virtualbox
CONTAINER=frontend
FRONTENDRUNNING="true"
#important this will set the default vb machine so is found every time
##set docker default image to default used one
#eval "$(docker-machine env default)"
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

    mkdir traefik-temp

    cd traefik-temp

    git clone https://github.com/castillo-n/traefik-image

    cd traefik-image

    sh init.sh

    cd ..

    cd ..

    rm -rf traefik-temp
fi
##############################################################
##############################################################


##############################################################
##############################################################
#now added this to the host file if it doesnt exist
## this will only work on macs (I havent tested on windows --sorry Garrett)
##############################################################
echo "#################"
echo "check host"
echo "#################"
STARTED=$(docker inspect --format="{{ .State.StartedAt }}" $CONTAINER)
#NETWORK=$(docker-machine ip default)
# Fallback to localhost if docker-machine not found or error occurs
#if [ -z "$NETWORK" ]; then
    NETWORK=127.0.0.1
#fi

matches_in_hosts="$(grep -n ${SERVER_NAME} /etc/hosts | cut -f1 -d:)"
host_entry="${NETWORK} ${SERVER_NAME}"

#echo "#########################################################################"
#echo "#########################################################################"
#echo "# Please enter your password if requested so the host file is modified. #"
#echo "#########################################################################"
#echo "#########################################################################"
#
#if [ ! -z "$matches_in_hosts" ]
#then
#    echo "Updating existing hosts entry."
#    # iterate over the line numbers on which matches were found
#    while read -r line_number; do
#        # replace the text of each line with the desired host entry
#        sudo sed -i '' "${line_number}s/.*/${host_entry} /" /etc/hosts
#    done <<< "$matches_in_hosts"
#else
#    echo "Adding new hosts entry."
#    echo "$host_entry" | sudo tee -a /etc/hosts > /dev/null
#fi
#
#echo "OK - $CONTAINER is running. IP: $NETWORK, StartedAt: $STARTED"
#echo "OK - $SERVER_NAME is running. IP: $NETWORK, is running as well and has being added to the host file or it was already there ;)"

##############################################################
##############################################################

if [ "$REDOIMAGES" == "$NOT" ]; then
    echo "${CYAN}#########################################################################"
    echo "#########################################################################"
    echo "#########################################################################"
    echo "Would you like to build the docker images?"
    echo "Intro y and press enter to accept, anything else to skip this option"
    echo "-------------------------------------------------------------------------${RED}"
    read -e -p "##### (y??)>>: " build;
    echo "${NONE} ";
    case $build in
        [yY][eE][sS]|[yY])
          REDOIMAGES="true";;
          *)
          REDOIMAGES="false";;
    esac
fi
if [ "$REDOIMAGES" == "$TRUE" ]; then
    docker-compose build;
fi
docker-compose up -d;
echo "${RED}##########################################################################################################"
echo "##########################################################################################################"
echo "if you encounter errors, please check that the machines are not running before running this script";
echo "##########################################################################################################"
echo "##########################################################################################################${NONE}"
ImageName="$(docker-compose ps -q laravel)"

if [ "$REMOVEDEPENDENCIES" == "$NOT" ]; then
echo "${CYAN}#########################################################################"
echo "#########################################################################"
echo "Would you like to install dependencies?"
echo "Intro y and press enter to accept, anything else to skip this option"
echo "-------------------------------------------------------------------------${RED}"
read -e -p "##### (y??)>>: " answer;
echo "${NONE} ";
case $answer in
    [yY][eE][sS]|[yY])
      REMOVEDEPENDENCIES="true"
        ;;
        *)
      REMOVEDEPENDENCIES="false"
      ;;
esac
fi
if [ "$REMOVEDEPENDENCIES" == "$TRUE" ]; then
    echo "${YELLOW}#########################################################################"
    echo "removing dependencies folders";
    echo "#########################################################################"
#    rm -rf vendor;
#    rm -rf node_modules;
#      rm -rf /usr/local/share/.cache/yarn;
    docker-compose exec laravel rm -rf vendor;
    docker-compose exec laravel rm -rf node_modules;
    docker-compose exec laravel rm -rf /usr/local/share/.cache;
    docker-compose exec laravel rm -rf ~/.npm;
    echo "${CYAN}#########################################################################"
    echo "Now installing dependencies";
    echo "#########################################################################"
    echo "Opening laravel --> container ID: $ImageName";
    echo " ./install.sh";
    docker-compose exec laravel ./install.sh;
#        docker-compose exec laravel npm
#        read -e -p "npm ... press enter" answer;
    echo "#########################################################################${YELLOW}"
    echo "#########################################################################"
    echo " npm cache clean"
    echo "#########################################################################"
    docker-compose exec laravel npm cache clean
#        docker-compose exec laravel yarn
#        read -e -p "npm clean ... press enter" answer;
    echo "#########################################################################${BLUE}"
    echo "#########################################################################"
    echo "yarn upgrade"
    if [ "$VERBOSE" == "false" ]; then
    docker-compose exec laravel yarn upgrade --silent
    else
    docker-compose exec laravel yarn upgrade
    fi
    echo "#########################################################################"
#        read -e -p "yarn install ... press enter" answer;
    echo "#########################################################################${RED}"
    echo "#########################################################################"
    echo "npm -g update"
    if [ "$VERBOSE" == "false" ]; then
    docker-compose exec laravel npm -g update --silent
    else
    docker-compose exec laravel npm -g update
    fi
#        read -e -p "npm -g update ... press enter" answer;
    echo "#########################################################################${GREEN}"
    echo "#########################################################################"
    echo "bower update --force"
    if [ "$VERBOSE" == "false" ]; then
    docker-compose exec laravel bower update --force --silent
    else
    docker-compose exec laravel bower update --force --quiet
    fi
#        docker-compose exec laravel bower
#        read -e -p "npm -g install ... press enter" answer;
    echo "#########################################################################${PURPLE}"
    echo "#########################################################################"
    echo "composer update"
    if [ "$VERBOSE" == "false" ]; then
    docker-compose exec laravel composer update --quiet
    else
    docker-compose exec laravel composer update
    fi
    echo "#########################################################################${CYAN}"
    echo "#########################################################################"
    echo "php artisan key:generate"
    #read -e -p "composer update ... press enter" answer;
    docker-compose exec laravel php artisan key:generate
    #read -e -p "artisan key ... press enter" answer;

    echo "#########################################################################${NONE}"

fi
    echo "${CYAN}#########################################################################"
    echo "Opening laravel --> container ID: $ImageName ${NONE}" ;
    echo "#########################################################################"
    echo "php artisan migrate"
    docker-compose exec laravel php artisan migrate
    echo "#########################################################################"
    echo "gulp"
    docker-compose exec laravel gulp
    echo "#########################################################################"
    echo "${YELLOW}Going into command line (type ${RED}exit ${YELLOW}and press enter to leave the container)${NONE}";
    docker-compose exec laravel bash
    echo "${BLUE}#########################################################################"
    echo "#################/-------------------------------------\#################"
    echo "################|  ${CYAN}Paul Bunyan Communications Rocks!!!${BLUE}  |################"
    echo "#################\-------------------------------------/#################"
    echo "#########################################################################"
    echo "${CYAN}── ── ── ── ── ── ──${RED} ██ ██ ██ ██${CYAN} ──${RED} ██ ██ ██ ${CYAN}── "
    echo "── ── ── ── ── ${RED}██ ██ ▓▓ ▓▓ ▓▓ ██ ██ ${YELLOW}░░ ░░ ░░ ${RED}██ ${CYAN}"
    echo "── ── ── ── ${RED}██ ▓▓ ▓▓ ▓▓ ▓▓ ▓▓ ▓▓ ██ ${YELLOW}░░ ░░ ░░ ${RED}██ ${CYAN}"
    echo "── ── ── ${RED}██ ▓▓ ▓▓ ▓▓ ██ ██ ██ ██ ██ ██ ${YELLOW}░░ ░░ ${RED}██ ${CYAN}"
    echo "── ── ${RED}██ ▓▓ ▓▓ ▓▓ ██ ██ ██ ██ ██ ██ ██ ██ ${YELLOW}░░ ${RED}██ ${CYAN}"
    echo "── ── ${RED}██ ▓▓ ██ ██ ${YELLOW}░░ ░░ ░░ ░░ ░░ ░░ ${RED}██ ██ ██ ${CYAN}── "
    echo "── ${RED}██ ██ ██ ██ ${YELLOW}░░ ░░ ░░ ${BLUE}██ ${YELLOW}░░ ${BLUE}██ ${YELLOW}░░${RED} ██ ▓▓ ▓▓ ██ ${CYAN}"
    echo "── ${RED}██${YELLOW} ░░ ${BLUE}░░ ░░${YELLOW} ░░ ░░ ░░ ${BLUE}██ ${YELLOW}░░ ${BLUE}██ ${YELLOW}░░ ${RED}██ ▓▓ ▓▓ ██ "
    echo "${RED}██ ${YELLOW}░░ ░░ ${BLUE}░░ ░░ ░░${YELLOW} ░░ ░░ ░░ ░░ ░░ ░░ ░░ ${RED}██ ▓▓ ██ "
    echo "${RED}██ ${YELLOW}░░ ░░ ░░ ${BLUE}░░${YELLOW} ░░ ░░ ${RED}██ ${BLUE}░░ ░░ ░░ ░░ ░░ ${RED}██ ▓▓ ██ ${CYAN}"
    echo "──${RED} ██ ${YELLOW}░░ ░░ ░░ ░░ ${RED}██ ██ ██ ██ ${BLUE}░░ ░░ ${RED}██ ██ ██ ${CYAN}── "
    echo "── ── ${RED}██ ██ ${YELLOW}░░ ░░ ░░ ░░ ${RED}██ ██ ██ ██ ██ ▓▓ ██ ${CYAN}── "
    echo "── ── ── ${RED}██ ██ ██ ${YELLOW}░░ ░░ ░░ ░░ ░░ ${RED}██ ▓▓ ▓▓ ██${CYAN} ── "
    echo "── ░░ ${RED}██ ▓▓ ▓▓ ██ ██ ██ ██ ██ ██ ██ ▓▓ ██ ${CYAN}── ── "
    echo "── ${RED}██ ▓▓ ▓▓ ▓▓ ▓▓ ██ ██${YELLOW} ░░ ░░ ░░ ${RED}██ ██ ${CYAN}── ── ── "
    echo "${RED}██ ██ ▓▓ ▓▓ ▓▓ ▓▓ ██ ${YELLOW}░░ ░░ ░░ ░░ ░░ ${RED}██ ${CYAN}── ── ── "
    echo "${RED}██ ██ ▓▓ ▓▓ ▓▓ ▓▓ ██ ${YELLOW}░░ ░░ ░░ ░░ ░░ ${RED}██ ${CYAN}── ── ── "
    echo "${RED}██ ██ ██ ▓▓ ▓▓ ▓▓ ▓▓ ██ ${YELLOW}░░ ░░ ░░ ${RED}██ ██ ██ ██ ${CYAN}── "
    echo "── ${RED}██ ██ ██ ▓▓ ▓▓ ▓▓ ██ ██ ██ ██ ██ ██ ██ ██ ${CYAN}── "
    echo "── ── ${RED}██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ${BLUE}▓▓ ▓▓ ${RED}██${CYAN} "
    echo "── ${RED}██ ${BLUE}▓▓ ▓▓${RED} ██ ██ ██ ██ ██ ██ ██ ██ ${BLUE}▓▓ ▓▓ ▓▓${RED} ██ "
    echo "${RED}██ ██ ${BLUE}▓▓ ${RED}██ ██ ██ ██ ██ ██ ██ ██ ██ ${BLUE}▓▓ ▓▓ ▓▓${RED} ██ "
    echo "${RED}██ ${BLUE}▓▓ ▓▓ ${RED}██ ██ ██ ██ ██ ██ ██ ██ ██ ${BLUE}▓▓ ▓▓ ▓▓${RED} ██ "
    echo "${RED}██ ${BLUE}▓▓ ▓▓ ${RED}██ ██ ██ ██ ██${CYAN} ── ── ── ${RED}██ ${BLUE}▓▓ ▓▓ ${RED}██ ██ "
    echo "${RED}██ ${BLUE}▓▓ ▓▓${RED} ██ ██ ${CYAN}── ── ── ── ── ── ── ${RED}██ ██ ██ ${CYAN}── "
    echo "── ${RED}██ ██ ${CYAN}── ── ── ── ── ── ── ── ── ── ── ── ── "
    echo "${BLUE}#########################################################################"
    echo "#################/-------------------------------------\#################"
    echo "################|  ${CYAN}Paul Bunyan Communications Rocks!!!${BLUE}  |################"
    echo "#################\-------------------------------------/#################"
    echo "#########################################################################${NONE}"
