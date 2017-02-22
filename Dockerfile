FROM php:7-fpm

MAINTAINER Garrett
MAINTAINER Nelson
MAINTAINER Steven

COPY php.ini /usr/local/etc/php/

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

#Install Codeception
RUN curl -O http://codeception.com/codecept.phar && chmod +x codecept.phar && mv codecept.phar /usr/local/bin/codecept

#Install gulp bower and grunt
RUN yarn global add --no-bin-links gulp bower grunt-cli

# Disable composer warnings
ENV COMPOSER_ALLOW_SUPERUSER 1

#Install Prestissimo
RUN composer global require "hirak/prestissimo:^0.3"

#COPY over start script
COPY start.sh /run/

#Gives execute permissions
RUN chmod +x /run/start.sh

#Run start script
CMD ["/bin/sh" , "/run/start.sh"]
