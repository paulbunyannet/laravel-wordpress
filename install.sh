#!/usr/bin/env bash

# install npm libraries
echo "Installing Node dependencies"
npm install &>/dev/null

# install bower dependencies
echo "Installing Bower dependencies"
bower install &>/dev/null

# make .env if not already created
 if [ ! -f ".env" ]
 then
    cp .env.example .env
    echo ".env was created from example file"
 fi

# create puphet config if not already created
if [ ! -f "puphpet/config.yaml" ]
then
    cp puphpet/config.yaml.example puphpet/config.yaml
    echo "puphpet config.yaml file was created from example file"
fi

# cleanup wordpress instal
if [ -d "public_html/wp/wp-content" ]
then
    rm -rf public_html/wp/wp-content
fi

if [ -f "public_html/wp/wp-config-sample.php" ]
then
    rm -f public_html/wp/wp-config-sample.php
fi

if [ -f "public_html/wp/.htaccess" ]
then
    rm -f public_html/wp/.htaccess
fi

