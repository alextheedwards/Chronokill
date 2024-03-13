#!/bin/bash
docker stop nextappcontainer || true
docker rm nextappcontainer || true
docker rmi nextapp || true
docker build -t nextapp .
docker run -dp 3000:3000 --name nextappcontainer nextapp
