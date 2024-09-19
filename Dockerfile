FROM node:alpine AS build

WORKDIR /usr/src/app
COPY . .

RUN npm install --verbose

EXPOSE 3000

RUN npm run start