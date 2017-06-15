#!/usr/bin/env sh

while ! nc -z db 3306 > /dev/null
do
  echo "$(date) - still trying"
  sleep 1
done
