#!/bin/bash
docker run -d -p 8545:8545 --name testrpc ethereumjs/testrpc:latest -u 0 -u 1
