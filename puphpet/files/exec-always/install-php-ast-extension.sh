#!/usr/bin/env bash
File="/etc/php.ini"
if ! grep -q extension=ast.so "$File"; then
    # Install php-ast extension
    sudo git clone https://github.com/nikic/php-ast.git
    cd php-ast
    sudo phpize
    sudo ./configure
    sudo make install
    #http://stackoverflow.com/a/550808/405758
    echo "extension=ast.so" | sudo tee --append ${File}
fi;
