FROM node:12-alpine


WORKDIR /app

COPY ./package.json ./package.json
COPY ./packages/gql-server ./packages/gql-server
COPY ./packages/utils ./packages/utils

RUN npm i -g yarn 
RUN yarn install

WORKDIR /app/packages/gql-server 
RUN yarn install 
ENTRYPOINT node .
