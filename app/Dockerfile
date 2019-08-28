FROM node:10

WORKDIR /vagrant/app

COPY package*.json ./

RUN npm install

RUN node node_modules/jasmine/bin/jasmine init

COPY . .

ENV URL_GET_USERS="https://jsonplaceholder.typicode.com/users"

ENV URL_CLIENT_ES="http://es01:9200"

RUN npm test

EXPOSE 3000

CMD ["npm", "start"]