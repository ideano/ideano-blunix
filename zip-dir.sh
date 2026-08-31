#!/usr/bin/env bash

# create a zip of theme dir, without large directories like exampleSite, or static/images, suitable for uploading to ml engines for analysis.
# usage: ./zip-dir.sh .
# created zip output file will be in parent directory.

set -e

# Usage: ./zip-dir.sh /path/to/directory
DIR="${1:-}"

if [[ -z "$DIR" ]]; then
    read -r -p "Directory: " DIR
fi

if [[ ! -d "$DIR" ]]; then
    echo "Error: directory does not exist: $DIR" >&2
    exit 1
fi

DIR="$(cd "$DIR" && pwd)"
NAME="$(basename "$DIR")"
PARENT="$(dirname "$DIR")"
OUTPUT="$PARENT/$NAME.zip"

cd "$DIR"

zip -r "$OUTPUT" . \
    -x "static/images/*" \
       "static/fonts/*" \
       "static/icons/*" \
       "static/libs/*" \
       "assets/icons/*" \
       "exampleSite/*" \
       "assets/images/*" \
       "node_modules/*" \
       "public/*" \
       "images/*" \

echo "Created: $OUTPUT"