# README

The Web server for Kita Conjugator accessed by the client

## Architecture

- `fresh` app running on Deno Deploy Worker
- proxies through Cloudflare caching, DNS, and Google Analytics 4 using Zaraz
