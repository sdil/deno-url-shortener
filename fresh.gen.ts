// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_middleware.ts";
import * as $2 from "./routes/api/github_callback.ts";
import * as $3 from "./routes/api/github_login.ts";
import * as $4 from "./routes/api/joke.ts";
import * as $5 from "./routes/api/logout.ts";
import * as $6 from "./routes/details/[slug].tsx";
import * as $7 from "./routes/index.tsx";
import * as $8 from "./routes/me.tsx";
import * as $9 from "./routes/short/[slug].tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_middleware.ts": $1,
    "./routes/api/github_callback.ts": $2,
    "./routes/api/github_login.ts": $3,
    "./routes/api/joke.ts": $4,
    "./routes/api/logout.ts": $5,
    "./routes/details/[slug].tsx": $6,
    "./routes/index.tsx": $7,
    "./routes/me.tsx": $8,
    "./routes/short/[slug].tsx": $9,
  },
  islands: {},
  baseUrl: import.meta.url,
  config,
};

export default manifest;
