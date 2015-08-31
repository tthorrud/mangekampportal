Ny mangekampen applikasjon.

Installer chrome extension:  
* https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?utm_source=chrome-app-launcher-info-dialog

Installer nodejs og npm:  
* sudo apt-get install nodejs
* sudo apt-get install npm

Installer bower og grunt, og lag en symlink (pga. bower):  
* sudo npm install -g bower
* sudo npm install -g grunt-cli
* ln -s /usr/bin/nodejs /usr/bin/node

Installer så alle lokale avhengigheter:  
* npm install
* bower install
