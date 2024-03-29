// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $api_github_callback from "./routes/api/github_callback.ts";
import * as $api_github_login from "./routes/api/github_login.ts";
import * as $api_logout from "./routes/api/logout.ts";
import * as $details_slug_ from "./routes/details/[slug].tsx";
import * as $index from "./routes/index.tsx";
import * as $list from "./routes/list.tsx";
import * as $me from "./routes/me.tsx";
import * as $short_slug_ from "./routes/short/[slug].tsx";

import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/_middleware.ts": $_middleware,
    "./routes/api/github_callback.ts": $api_github_callback,
    "./routes/api/github_login.ts": $api_github_login,
    "./routes/api/logout.ts": $api_logout,
    "./routes/details/[slug].tsx": $details_slug_,
    "./routes/index.tsx": $index,
    "./routes/list.tsx": $list,
    "./routes/me.tsx": $me,
    "./routes/short/[slug].tsx": $short_slug_,
  },
  islands: {},
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
