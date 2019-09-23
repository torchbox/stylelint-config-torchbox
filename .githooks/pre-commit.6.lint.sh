#!/usr/bin/env bash

if [ -n "$JS_STAGED" ];
then
  npx eslint --report-unused-disable-directives $JS_STAGED
fi
