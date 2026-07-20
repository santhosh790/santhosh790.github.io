#!/usr/bin/env bash

set -euo pipefail

NODE_BIN_DIR="${HOME}/.nvm/versions/node/v22.17.1/bin"

if [[ ! -x "${NODE_BIN_DIR}/node" ]]; then
  echo "Required Node runtime not found at ${NODE_BIN_DIR}." >&2
  echo "Install or enable Node 22.17.1, or update scripts/with-node22.sh to the correct path." >&2
  exit 1
fi

export PATH="${NODE_BIN_DIR}:${PATH}"
unset HTTP_PROXY HTTPS_PROXY ALL_PROXY http_proxy https_proxy all_proxy DOCKER_HTTP_PROXY DOCKER_HTTPS_PROXY npm_config_proxy npm_config_https_proxy

exec "$@"