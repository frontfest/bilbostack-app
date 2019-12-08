#!/bin/sh

set -e

docker-compose up -d --build
docker exec $(docker-compose ps -q app) yarn lint
docker exec $(docker-compose ps -q app) yarn migrate
docker exec $(docker-compose ps -q app) yarn test
docker-compose down
