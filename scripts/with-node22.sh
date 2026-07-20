#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
REQUIRED_NODE_VERSION="$(<"${PROJECT_ROOT}/.nvmrc")"
REQUIRED_NODE_MAJOR="${REQUIRED_NODE_VERSION%%.*}"
NODE_BIN_DIR="${HOME}/.nvm/versions/node/v${REQUIRED_NODE_VERSION}/bin"

if command -v node >/dev/null 2>&1; then
  CURRENT_NODE_VERSION="$(node -p 'process.versions.node')"
  CURRENT_NODE_MAJOR="${CURRENT_NODE_VERSION%%.*}"

  if [[ "${CURRENT_NODE_VERSION}" == "${REQUIRED_NODE_VERSION}" || "${CURRENT_NODE_MAJOR}" == "${REQUIRED_NODE_MAJOR}" ]]; then
    unset HTTP_PROXY HTTPS_PROXY ALL_PROXY http_proxy https_proxy all_proxy DOCKER_HTTP_PROXY DOCKER_HTTPS_PROXY npm_config_proxy npm_config_https_proxy
    exec "$@"
  fi
fi

if [[ ! -x "${NODE_BIN_DIR}/node" ]]; then
  echo "Required Node runtime not found at ${NODE_BIN_DIR}." >&2
  echo "Install or enable Node ${REQUIRED_NODE_VERSION}, or ensure a compatible Node ${REQUIRED_NODE_MAJOR}.x runtime is already on PATH." >&2
  exit 1
fi

export PATH="${NODE_BIN_DIR}:${PATH}"
unset HTTP_PROXY HTTPS_PROXY ALL_PROXY http_proxy https_proxy all_proxy DOCKER_HTTP_PROXY DOCKER_HTTPS_PROXY npm_config_proxy npm_config_https_proxy

exec "$@"