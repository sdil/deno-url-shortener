# fresh project

### Usage

Start the project:

```
deno task start
```

Run DB migrations

```shell
migrate -database $COCKROACH_DB_URL -path db/migrations/ up
```

This will watch the project directory and restart as necessary.
