#!/usr/bin/env bash
cd ~/
seleniumScript="provision_selenium.sh"
seleniumScriptPath="${PWD}/${seleniumScript}"
seleniumScriptDownload="https://raw.githubusercontent.com/paulbunyannet/bash/master/selenium/${seleniumScript}"
if [ -f "${seleniumScriptPath}" ]; then
    sudo rm -f ${seleniumScriptPath}
fi;
sudo wget -O ${seleniumScriptPath} ${seleniumScriptDownload}
. ${seleniumScriptPath}