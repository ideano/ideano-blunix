#!/bin/bash
# create a favicon set for theme from master logo.png file.
# master file should be high res (1000 x 1000 px, or more), and should have transparency
# first: brew install imagemagick
# create icons set

INPUT="logo.png"
OUT="favicon"

mkdir -p "$OUT"

# Requested Apple Touch Icon sizes
APPLE_SIZES=(57 72 114 144)

# Create PNG, WebP and ICO for each Apple Touch size
for SIZE in "${APPLE_SIZES[@]}"; do
    # Create transparent PNG
    magick "$INPUT" \
        -alpha on \
        -background none \
        -trim +repage \
        -resize "${SIZE}x${SIZE}" \
        -gravity center \
        -extent "${SIZE}x${SIZE}" \
        -strip \
        "$OUT/apple-touch-${SIZE}x${SIZE}.png"

    # WebP with transparency
    magick "$OUT/apple-touch-${SIZE}x${SIZE}.png" \
        -alpha on \
        -define webp:lossless=true \
        "$OUT/apple-touch-${SIZE}x${SIZE}.webp"

    # ICO with transparency
    magick "$OUT/apple-touch-${SIZE}x${SIZE}.png" \
        -alpha on \
        "$OUT/apple-touch-${SIZE}x${SIZE}.ico"
done


# ============================================================
# 497x497 favicon set
# ============================================================

# PNG
magick "$INPUT" \
    -alpha on \
    -background none \
    -trim +repage \
    -resize "497x497" \
    -gravity center \
    -extent "497x497" \
    -strip \
    "$OUT/favicon.png"

# WebP
magick "$OUT/favicon.png" \
    -alpha on \
    -define webp:lossless=true \
    "$OUT/favicon.webp"

# GIF
magick "$OUT/favicon.png" \
    -alpha on \
    "$OUT/favicon.gif"

# ICO
magick "$OUT/favicon.png" \
    -alpha on \
    "$OUT/favicon.ico"


echo "Created files:"
ls -lh "$OUT"