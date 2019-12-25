FROM node:12-alpine

WORKDIR /app

ADD package.json .
ADD yarn.lock .

RUN npm -g install yarn

RUN yarn install

ADD index.js .
ADD .eslintrc.json .
ADD src ./src
ADD test ./test

CMD tail -f /dev/null
