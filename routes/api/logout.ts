import { HandlerContext } from "$fresh/server.ts";
import { deleteCookie, getCookies } from "$std/http/cookie.ts";
import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";

// Connect to Postgres
// Ref: https://deno.com/deploy/docs/tutorial-postgres
// Get the connection string from the environment variable "DATABASE_URL"
const databaseUrl = Deno.env.get("DATABASE_URL")!;

// Create a database pool with three connections that are lazily established
const pool = new postgres.Pool(databaseUrl, 3, true);
const connection = await pool.connect();

export const handler = async (req: Request, _ctx: HandlerContext): Response => {
  // const maybeAccessToken = getCookies(req.headers)["session_token"];

  // if (maybeAccessToken) {
  //     const result = await connection.queryObject(
  //         "SELECT COUNT(*) FROM users WHERE access_token = $TOKEN",
  //         { token: maybeAccessToken },
  //     );

  //     if (result.rowCount > 0) {
  //         // This is a user with valid access token
  //         // redirect to home
  //         return new Response("", {
  //             status: 302,
  //             headers: { location: "/" },
  //         });
  //     } else {
  //         // TODO: Invalid user
  //         console.log("Invalid access token", maybeAccessToken);
  //         return new Response("Invalid token", { status: 400 });
  //     }
  // }

  const headers = new Headers({ location: "/" });

  deleteCookie(headers, "session_token", { path: "/" });

  return new Response("", {
    status: 302,
    headers: headers,
  });
};
