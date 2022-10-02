#!/bin/bash

#sudo npm i sass --save-dev
#sudo npm install /home/ec2-user/node_app/
#sudo npm run build /home/ec2-user/node_app/
#sudo cp -r /home/ec2-user/node_app/dist/* /usr/share/nginx/html
#sudo systemctl start nginx

#!/bin/bash
cd /home/ec2-user/node_app
docker build -t node_app/dockerize-vuejs-app .
docker run -it -p 8080:80 --rm --name dockerize-vuejs-app-1 node_app/dockerize-vuejs-app