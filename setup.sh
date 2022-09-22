#!/bin/bash

sudo yum -y install epel-release
sudo yum -y update
sudo yum -y install curl
curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
sudo yum install -y nodejs
sudo yum -y install nginx

