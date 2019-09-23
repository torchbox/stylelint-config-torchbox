#!/usr/bin/env bash

if [ -n "$JS_STAGED" ] || [ -n "$SNAPSHOT_STAGED" ];
then
  npm run test
  npm run test:rules
fi
