FROM node:13

RUN mkdir -p /usr/src/app/
ADD ./src/ /usr/src/app/

WORKDIR /usr/src/app/

RUN npm install --only=production

CMD ["/usr/local/bin/node", "./app.js"]

