# Deno URL Shortener

<a href="https://fresh.deno.dev">
   <img width="197" height="37" src="https://fresh.deno.dev/fresh-badge.svg" alt="Made with Fresh" />
</a>

This is a simple URL Shortener built to learn Deno & Fresh framework.

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

```shell
deno task start
```

This will watch the project directory and restart as necessary.

## My opinions

### What I like about Deno/Fresh

- Super fast: Deno backend can handle thousands of requests per second; Preact is super fast but I don't know how to measure this
- Configuration is super easy, there's no tsconfig files, package.json, prettier, etc.
- Deno tooling looks similar to Go's where it can immediately format and lint the files without 3rd party packages
- The upgrade path is quite smooth as the Fresh team provides a script to update the relevant files

### What I don't like about Deno/Fresh

- It's still early so the resources are still scarce
- Ecosystem support is still weak. I really wish UI components/libraries like Chakra UI, Bulma, etc. are supported (hopefully they will soon since they just released a plugin module)

### Things I wish Deno/Fresh do

- [Prerender the island](https://github.com/denoland/fresh/discussions/489)
- [Support Chakra and other UI components](https://github.com/denoland/fresh/issues/629)

## Conclusion

- I would probably use Deno & Fresh in the future to build website with a lot of contents because of its performance. It's however in my opinion, not suitable for interactive web app, which is should be done using NextJS or Remix.
