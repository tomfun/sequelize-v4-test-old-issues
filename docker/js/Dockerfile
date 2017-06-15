FROM node:8

RUN apt-get update -q && \
    apt-get install -yqq netcat && \
    rm -rf /var/lib/apt/lists/* && \
    npm i

WORKDIR /codebase
