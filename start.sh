#!/bin/sh

cd /var/www/html

echo "Start of Composer Install"
yarn install --no-bin-links
composer install
echo "End of Composer Install"

apache2-foreground


