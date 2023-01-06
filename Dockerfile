FROM node:16-slim

# FROM base as production
WORKDIR /usr/src/app

ADD start.sh /
RUN chmod +x /start.sh

RUN apt-get update; apt-get install curl -y; apt-get install zip -y

COPY . /usr/src/app/

RUN npm install

EXPOSE 5000
CMD [ "/start.sh" ]