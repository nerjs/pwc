FROM node:12-alpine


WORKDIR /app

COPY ./package.json ./package.json
COPY ./packages/server ./packages/server

RUN npm i -g yarn 
RUN yarn install

WORKDIR /app/packages/server 
RUN yarn install 
ENTRYPOINT node .
