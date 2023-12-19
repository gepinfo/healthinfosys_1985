FROM node:20.2-alpine
COPY . /mirror
WORKDIR /mirror
RUN npm install
RUN npm i -g ts-node
CMD npm run prod