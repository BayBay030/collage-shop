#!/bin/bash
cd "$(dirname "$0")"
echo "Starting Collage Shop Dev Server..."
# Open the browser (assuming default port 5173)
open http://localhost:5173
# Start the dev server
npm run dev
