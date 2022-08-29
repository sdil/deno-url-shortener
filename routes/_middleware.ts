import { MiddlewareHandlerContext } from "$fresh/server.ts"
import { getCookies } from "$std/http/cookie.ts";
import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";

// Connect to Postgres
// Ref: https://deno.com/deploy/docs/tutorial-postgres
// Get the connection string from the environment variable "DATABASE_URL"
const databaseUrl = Deno.env.get("DATABASE_URL")!;

// Create a database pool with three connections that are lazily established
const pool = new postgres.Pool(databaseUrl, 3, true);
const connection = await pool.connect();

interface State {
    loggedIn: boolean
    username: String
}

export async function handler(
    req: Request,
    ctx: MiddlewareHandlerContext<State>
) {
    const accessToken = getCookies(req.headers)["session_token"]

    if (accessToken) {
        const result = await connection.queryObject(
            "SELECT username FROM users WHERE access_token = $TOKEN AND access_token IS NOT NULL",
            { token: accessToken },
        );

        if (result.rowCount > 0) {
            ctx.state.loggedIn = true
            ctx.state.username = result.rows[0].username
            const resp = await ctx.next()
            return resp
        }
    }

    // If no access token or invalid access_token
    ctx.state.loggedIn = false
    const resp = await ctx.next()
    return resp
}