#!/bin/bash

#sudo yum -y install epel-release
#sudo yum -y update
#sudo yum -y install curl
#curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
#sudo yum install -y nodejs
#sudo yum -y install nginx

sudo amazon-linux-extras install docker -y
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo chmod 666 /var/run/docker.sock
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
sudo service docker start

