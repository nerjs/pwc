FROM node:12-alpine

ENV GQL_SERVER_PORT 3000

WORKDIR /app

COPY ./package.json ./package.json
COPY ./utils ./utils
COPY ./packages/gql-server ./packages/gql-server
COPY ./packages/gql-server/.env.example ./packages/gql-server/.env

RUN npm i -g yarn 
RUN yarn install
WORKDIR /app/packages/gql-server 
RUN yarn install 

EXPOSE  3000

ENTRYPOINT node .

