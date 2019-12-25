FROM node:12-alpine

WORKDIR /app

ADD package.json .
ADD yarn.lock .
ADD index.js .
ADD src ./src

RUN npm -g install yarn
RUN yarn install --production

ENV NODE_ENV=production

CMD yarn start
