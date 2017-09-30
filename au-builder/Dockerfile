FROM mhart/alpine-node

RUN npm install aurelia-cli --global
RUN apk update && apk add git

EXPOSE 9000 3001
VOLUME "/data"
WORKDIR /data
