/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import { Handlers, HandlerContext } from "$fresh/server.ts";
import { nanoid } from "https://deno.land/x/nanoid@v3.0.0/nanoid.ts";

// Connect to Postgres
// Ref: https://deno.com/deploy/docs/tutorial-postgres
// Get the connection string from the environment variable "DATABASE_URL"
const databaseUrl = Deno.env.get("DATABASE_URL")!;

// Create a database pool with three connections that are lazily established
const pool = new postgres.Pool(databaseUrl, 3, true);
const connection = await pool.connect();

export const handler: Handlers<null> = {
  async POST(req: Request, ctx: HandlerContext): Promise<Response> {
    const data = await req.formData()
    const long_url = data.get('url')
    const slug = nanoid(9)
    console.log("Shortening link", data.get('url'))
    const result = await connection.queryObject(
      "INSERT INTO links (slug, long_link) VALUES ($SLUG, $LONG_LINK)",
      {
        slug: slug,
        long_link: long_url
      }
    )

    // How to handle relative path redirection
    // https://github.com/denoland/fresh/discussions/511#discussioncomment-3157429
    return new Response("", {
      status: 302,
      headers: { Location: `/details/${slug}` },
    });
  },
};

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`text-4xl`}>
        URL Shortener
      </h1>
      <p class={tw`my-6`}>
        <form method="post">
          <label>
            Long URL
          </label>
          <input name="url" type='url' />
          <input type='submit' />
        </form>
      </p>
    </div>
  );
}
