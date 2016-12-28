FROM php:7-apache

MAINTAINER Garrett
MAINTAINER Nelson
MAINTAINER Steven

#Download NodeJS
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -

#Download Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list

#Update and Install Dependencies
RUN apt-get update && apt-get install -y zip unzip curl git nodejs yarn libfreetype6-dev libjpeg62-turbo-dev libmcrypt-dev libpng12-dev

#Install mysqli, mcrypt, pdo_mysql
RUN docker-php-ext-install -j$(nproc) mysqli mcrypt pdo_mysql

# Get GD ready to install
RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/

#Install GD
RUN docker-php-ext-install -j$(nproc) gd

#Install Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && php composer-setup.php --install-dir=/usr/bin --filename=composer && php -r "unlink('composer-setup.php');"

#Install gulp bower and grunt
RUN yarn global add --no-bin-links gulp bower grunt-cli

#Used to turn on modrewrite for apache
RUN a2enmod rewrite

COPY ./package.json /var/www/html

#COPY over start script
COPY start.sh /run/

#Gives execute permissions
RUN chmod +x /run/start.sh

COPY 000-default.conf /etc/apache2/sites-enabled/

#Run start script
CMD ["/bin/sh" , "/run/start.sh"]
