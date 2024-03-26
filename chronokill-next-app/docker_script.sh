#!/bin/bash
docker stop nextappcontainer || true
docker rm nextappcontainer || true
docker rmi nextapp || true
# use non platform version for arch other than apple silicon
docker build --platform linux/amd64 -t repository.hal.davecutting.uk:5005/cpointon01/nextapp .
#docker build -t repository.hal.davecutting.uk:5005/cpointon01/nextapp .
#docker run -dp 3000:3000 --name nextappcontainer repository.hal.davecutting.uk:5005/cpointon01/nextapp
