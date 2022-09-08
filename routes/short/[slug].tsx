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
    const slug = ctx.params.slug;
    const result = await connection.queryObject(
      "SELECT long_url FROM links WHERE slug = $SLUG",
      { slug: slug },
    );

    if (result.rowCount > 0) {
      const longUrl = result.rows[0].long_url;
      return Response.redirect(longUrl, 302);
    } else {
      return ctx.render(null);
    }
  },
};

export default function Greet(props: PageProps) {
  return <div>This link is invalid</div>;
}
