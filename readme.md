# Laravel & Wordpress package

Use this package to create a new project including Laravel and Wordpress. Wordpress controls the web root and Laravel handles all routes in public_html/app folder 

## Setup

1. Run `composer install` to get all the required assets for this package. This will grab Laravel and Wordpress, along with install Node and Bower dependencies
2. Update .env and puphpet/config.yaml with correct settings. The database connection settings should match.
3. run `vagrant up` to spin up virtual machine for development
4. open vagrant.laravel-wordpress.com in your browser, if the 2015 theme for workdpress loads then your good to go!

### Vagrant Up

This package comes with a vagrant package to develop in. run `vagrant up` to spin up the box. Make sure to add `192.168.56.106 vagrant.laravel-wordpress.com` to your host file. If there's already a entry with this same ip then update it in your puphpet/config.yaml file

## Grunt

This package comes with a grunt file setup for preprocessing css and js files.

* Run `grunt watch` to have watcher check for changes in asset files
* Run `grunt` or `grunt production` to preprocess asset files manually
 
## Wordpress
 
A primary user is created for Wordpress, you can login by going to /wp/wp-admin 

* Username **admin**
* Password **password**

### Themes

A base theme using [underscores](http://underscores.me/) is started in /public_html/wp-content/themes/mytheme for theme development

## Adminer

Open Adminer by going to 192.168.56.106/adminer in the browser. 

* Username **root**
* Password **root**