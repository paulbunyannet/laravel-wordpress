#!/usr/bin/env bash

# install npm libraries with Yarn
# https://code.facebook.com/posts/1840075619545360
#command -v yarn >/dev/null 2>&1 || { echo "Yarn is not installed, aborting." >&2; exit 1; }
#echo "Installing Node dependencies with Yarn"
#yarn --force

# install Bower dependencies
# https://bower.io/
#command -v bower >/dev/null 2>&1 || { echo "Bower is not installed. Please install by running 'npm install -g bower'. Aborting" >&2; exit 1; }
#echo "Installing Bower dependencies!"
#bower install --config.interactive=false

# install wordpress dependencies
# https://getcomposer.org/
#command -v composer >/dev/null 2>&1 || { echo "composer is not installed. Please install by running 'npm install -g composer'. Aborting" >&2; exit 1; }
#echo "Installing Composer dependencies!"


# make .env if not already created
 if [ ! -f ".env" ]
 then
    cp .env.example .env
    echo ".env was created from example file"
 fi

# cleanup wordpress install
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
#
#echo "Starting decryption of config"
## add encrypted files that are generated with encrypt-files.sh
#pass=`cat .enc-pass`
## re encode files needed for Jenkins CI
#latest=$(git ls-remote https://github.com/paulbunyannet/bash.git | grep HEAD | awk '{ print $1}')
#apt-get -N -q https://raw.githubusercontent.com/paulbunyannet/bash/${latest}/setup/files/decrypt-files.sh -O decrypt-files.sh
#bash decrypt-files.sh -p ${pass}
#echo "Done decrypting of config files"


