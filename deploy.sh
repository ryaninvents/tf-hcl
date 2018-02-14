#!/usr/bin/env bash
set -euo pipefail

if [ "$TRAVIS_BRANCH" == "develop" ]; then
  npm run deploy
fi
