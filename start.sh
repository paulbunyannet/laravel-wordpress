#!/bin/sh

cd /var/www/html

chmod -R 755 /var/www/html/public_html
chmod -R 755 /var/www/html/storage/framework

echo "Start of Composer Install"
yarn install --no-bin-links
composer install --prefer-dist
echo "End of Composer Install"

php-fpm