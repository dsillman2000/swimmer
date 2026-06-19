#!/usr/bin/env bash
set -euo pipefail

eval "$(fnm env)"

PORT=4000
URL="http://localhost:${PORT}"

make css

bundle exec jekyll serve --host 0.0.0.0 --port "${PORT}" > /dev/null 2>&1 &
JEKYLL_PID=$!
disown ${JEKYLL_PID}
trap "kill ${JEKYLL_PID} 2>/dev/null" EXIT

echo "Waiting for Jekyll server on ${URL} ..."
for i in $(seq 1 30); do
  if curl --silent --fail --output /dev/null "${URL}"; then
    break
  fi
  if [ "$i" -eq 30 ]; then
    echo "Server failed to start within 30 seconds" >&2
    exit 1
  fi
  sleep 1
done

echo "Capturing screenshots ..."
node regen-screenshots.js "${URL}"

echo "Saved docs/screenshot-light.png and docs/screenshot-dark.png"
