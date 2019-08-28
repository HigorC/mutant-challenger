FROM node:10

WORKDIR /vagrant/app

COPY package*.json ./

RUN npm install

RUN node node_modules/jasmine/bin/jasmine init

COPY . .

RUN npm test

EXPOSE 3000

CMD ["npm", "start"]