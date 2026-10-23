#!/usr/bin/env sh
set -eu
SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
HTML="$SCRIPT_DIR/../docs/inquiry-portal.html"
if [ ! -f "$HTML" ]; then
  echo "Inquiry portal not found: $HTML" >&2
  exit 1
fi
if command -v xdg-open >/dev/null 2>&1; then
  xdg-open "$HTML"
elif command -v open >/dev/null 2>&1; then
  open "$HTML"
else
  echo "Open this file manually: $HTML"
fi
