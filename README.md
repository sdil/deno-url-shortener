# Deno URL Shortener

<a href="https://fresh.deno.dev">
   <img width="197" height="37" src="https://fresh.deno.dev/fresh-badge.svg" alt="Made with Fresh" />
</a>

## How to run

### Prerequisite

- Provision CockroachDB Serverless instance
- Create Github Oauth application
- Create `.env` file with the following content

```shell
DATABASE_URL="postgresql://sdil:xxx@xxx.xxxx:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dxxx"
GITHUB_CLIENT_ID="xxx"
GITHUB_CLIENT_SECRET="xxx"
GITHUB_CALLBACK_URL="http://localhost:8000/api/github_callback"
```

Run DB migrations

```shell
migrate -database $COCKROACH_DB_URL -path db/migrations/ up
```

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

## Verdict

### What I like about Deno/Fresh

- Super fast, both from backend (Deno performance is sick) and frontend (Preact performance is sick)

### What I don't like about Deno/Fresh

- It's still early so the resources are still scarce

### Things I wish Deno/Fresh do

- [Prerender the island](https://github.com/denoland/fresh/discussions/489)
- [Support Chakra and other UI components](https://github.com/denoland/fresh/issues/629)