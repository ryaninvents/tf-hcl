#!/usr/bin/env bash
set -euo pipefail

if [ "$TRAVIS_BRANCH" == "develop" ]; then
  (cd packages/docsite && npm run build)
  npm run deploy
fi
