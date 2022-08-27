/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";

// Connect to Postgres
// Ref: https://deno.com/deploy/docs/tutorial-postgres
// Get the connection string from the environment variable "DATABASE_URL"
const databaseUrl = Deno.env.get("DATABASE_URL")!;

// Create a database pool with three connections that are lazily established
const pool = new postgres.Pool(databaseUrl, 3, true);
const connection = await pool.connect();

export const handler: Handlers<null> = {
    async GET(_req, ctx): Response {
        const id = ctx.params.id
        const result = await connection.queryObject(
            "SELECT long_link FROM links WHERE id = $ID",
            { id: id }
        )

        if (result.rowCount > 0) {
            const longLink = result.rows[0].long_link
            return Response.redirect(longLink, 302)
        } else {
            return ctx.render(null)
        }
    },
};

export default function Greet(props: PageProps) {
    return <div>This link is invalid</div>;
}
