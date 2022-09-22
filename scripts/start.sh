#!/bin/bash

cp -r /home/ec2-user/spring-boot-mongo/node_app/dist/* /usr/share/nginx/html

sudo systemctl start nginx
