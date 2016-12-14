#!/usr/bin/env bash

# install npm libraries with Yarn
# https://code.facebook.com/posts/1840075619545360
command -v yarn >/dev/null 2>&1 || { echo "Yarn is not installed, aborting." >&2; exit 1; }
echo "Installing Node dependencies with Yarn"
yarn install  &>/dev/null

# install Bower dependencies
# https://bower.io/
command -v bower >/dev/null 2>&1 || { echo "Bower is not installed. Please install by running 'npm install -g bower'. Aborting" >&2; exit 1; }
echo "Installing Bower dependencies!"
bower install &>/dev/null


# install wordpress dependencies
# https://getcomposer.org/
command -v composer >/dev/null 2>&1 || { echo "Bower is not installed. Please install by running 'npm install -g bower'. Aborting" >&2; exit 1; }
echo "Installing Composer dependencies!"
composer install &>/dev/null


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

