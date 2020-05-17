#!/bin/sh -x

git pull &&
yarn &&
rm -r dist/ &&
yarn build