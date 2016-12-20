#!/bin/sh
#if you have problems loading the docker machine, remove the # symbol from the beginning of the next two lines
#docker-machine rm default
#docker-machine create default --driver virtualbox

# check docker image
docker-machine ls
#set docker default image to default used one
eval "$(docker-machine env default)"

# run proxy if it is not running

docker build ./proxy/traefik/. -t pbc/traefik:latest

cd proxy
#cd nginx
cd traefik
docker-compose up
cd ..
cd ..

docker run -d -p 8080:8080 -p 80:80 -p 443:443 -e DEFAULT_HOST=frontend --name=frontend  --restart=always -v /var/run/docker.sock:/var/run/docker.sock pbc/traefik
#docker run -d -p 8080:8080 -p 80:80 -e DEFAULT_HOST=nginx.proxy --name=nginx-proxy --restart=always  -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy

docker network create frontend
#docker network create nginx

docker network connect frontend frontend
#docker network connect nginx nginx-proxy

docker-compose up -d  --build
