#!/bin/bash

sudo npm i sass --save-dev

sudo npm install /home/ec2-user/node_app/

sudo npm run build /home/ec2-user/node_app/

sudo cp -r /home/ec2-user/node_app/dist/* /usr/share/nginx/html

sudo systemctl start nginx
