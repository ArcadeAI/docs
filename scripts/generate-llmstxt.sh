#!/usr/bin/env bash

# Firecrawl only works on a public URL, and it bakes the routes into the txt file. We could run this locally + ngrok, but for now, we'll run this periodically post-deployment.

PUBLIC_URL=https://docs.arcade.dev

if [[ -z "${FIRECRAWL_API_KEY}" ]]; then
  echo "FIRECRAWL_API_KEY is not set"
  exit 1
fi

# Run the llmstxt command
pnpx generate-llmstxt -k $FIRECRAWL_API_KEY -u $PUBLIC_URL -m 1000

