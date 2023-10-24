FROM node:16

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    curl \
    tini \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/app
COPY ./ /usr/app

WORKDIR /usr/app/backend
RUN npm install
ENTRYPOINT ["node", "server.js"]


WORKDIR /usr/app/frontend
RUN npm install

ENV PORT 3000
EXPOSE 3000

CMD [ "npm", "start"]