import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import { HandlerContext, Handlers } from "$fresh/server.ts";
import { nanoid } from "https://deno.land/x/nanoid@v3.0.0/nanoid.ts";
import Layout from "@/components/Layout.tsx";

// Connect to Postgres
// Ref: https://deno.com/deploy/docs/tutorial-postgres
// Get the connection string from the environment variable "DATABASE_URL"
const databaseUrl = Deno.env.get("DATABASE_URL")!;

// Create a database pool with three connections that are lazily established
const pool = new postgres.Pool(databaseUrl, 3, true);
const connection = await pool.connect();

export const handler: Handlers<null> = {
  async GET(_req: Request, ctx: HandlerContext) {
    return ctx.render({
      ...ctx.state,
    });
  },

  async POST(req: Request, ctx: HandlerContext): Promise<Response> {
    const data = await req.formData();
    const long_url = data.get("url");
    const slug = nanoid(9);
    console.log("Shortening link", data.get("url"));
    const result = await connection.queryObject(
      "INSERT INTO links (slug, long_url) VALUES ($SLUG, $LONG_URL)",
      {
        slug: slug,
        long_url: long_url,
      },
    );

    // How to handle relative path redirection
    // https://github.com/denoland/fresh/discussions/511#discussioncomment-3157429
    return new Response("", {
      status: 302,
      headers: { Location: `/details/${slug}` },
    });
  },
};

export default function Home(props) {
  const { loggedIn, username } = props.data;
  return (
    <Layout auth={{ loggedIn, username }}>
      <p class="text-lg font-medium text-gray-900">Shorten your link</p>

      <form method="post">
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900">
            Long URL
          </label>
          <input
            name="url"
            type="url"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <input
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        />
      </form>
    </Layout>
  );
}
