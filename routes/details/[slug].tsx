import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "@/components/Layout.tsx";
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

    if (result.rowCount == 0) {
      return ctx.renderNotFound()
    }

    const longUrl = result.rows[0].long_url;
    return ctx.render({
      ...ctx.state,
    });
  },
};


export default function ShortLinkDetails(props: PageProps) {
  const { loggedIn, username } = props.data;
  const { slug } = props.params;
  return (
    <Layout auth={{ loggedIn, username }}>
      <p class="text-4xl font-medium text-gray-900">Link details</p>
      <div>
        Click link{" "}
        <a class="text-underline" href={`/short/${slug}`}>here</a>
      </div>
    </Layout>
  );
}
