# Laravel & Wordpress package

Use this package to create a new project including Laravel and Wordpress. Wordpress controls the web root and Laravel handles all routes in public_html/app folder 

## Prerequisites

1. Install [Composer](https://getcomposer.org/download/) so that you can run `composer install` from terminal. 
The composer.phar used for running composer can either be used from the current project folder by running `php composer.phar install` or setup globally via `composer install` on [Windows](http://stackoverflow.com/a/12059443/405758) or [OSX/Unix](http://askubuntu.com/a/165241). 
2. Install [Node.js & NPM](https://docs.npmjs.com/getting-started/installing-node). This is requred for Grunt and Bower to function.
3. Install Grunt by running `npm install -g grunt-cli` after NPM is installed.
4. Install [Bower](http://bower.io/) `npm install -g bower`. 
5. Install [Virtual Box](https://www.virtualbox.org/wiki/Downloads).
6. Install [Vagrant](https://www.vagrantup.com/downloads.html).

## Setup

1. Run `composer install` to get all the required assets for this package. This will grab Laravel and Wordpress, along with install Node and Bower dependencies.
2. Update .env and puphpet/config.yaml with correct settings. The database connection settings should match.
4. Add the vagrant box ip and server name from puphpet/config.php to your host file.
5. run `vagrant up` to spin up virtual machine for development.
6. generate a new key for Laravel by running `php artisan key:generate`.
7. open vagrant.laravel-wordpress.com in your browser, if the 2015 theme for workdpress loads then your good to go!
8. Go to vagrant.laravel-wordpress.com/app and you should see the big "Laravel 5" splash screen.

## Tools

### Vagrant Up

This package comes with a vagrant package to develop in. run `vagrant up` to spin up the box. Make sure to add `192.168.56.106 vagrant.laravel-wordpress.com` to your host file. 
If there's already a entry with this same ip then update it in your puphpet/config.yaml file

### Composer

If you need to make a modification to your php dependencies update the composer.json file and then run `composer update`

### Grunt

This package comes with a grunt file setup for preprocessing css and js files.

* Run `grunt watch` to have watcher check for changes in asset files
* Run `grunt` or `grunt production` to preprocess asset files manually
* Modify the gruntfile.js to modify file locations if needed.

### Bower

* Update the bower.json file to update your bower dependencies. All Bower packages get installed under public_html/bower_components then run `bower update` to update your dependencies.
 
### Wordpress
 
A primary user is created for Wordpress, you can login by going to /wp/wp-admin 

* Username **admin**
* Password **password**

#### Themes

A base theme using [underscores](http://underscores.me/) is started in /public_html/wp-content/themes/mytheme for theme development

### Adminer

Open Adminer by going to 192.168.56.106/adminer in the browser. 

* Username **root**
* Password **root**