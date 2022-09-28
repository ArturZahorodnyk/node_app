#!/bin/bash

npm run build /home/ec2-user/node_app/

cp -r /home/ec2-user/node_app/dist/* /usr/share/nginx/html

sudo systemctl start nginx
