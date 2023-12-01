import { HandlerContext, Handlers } from "$fresh/server.ts";
import { nanoid } from "https://deno.land/x/nanoid@v3.0.0/nanoid.ts";
import Layout from "@/components/Layout.tsx";

const kv = await Deno.openKv();

export const handler: Handlers<null> = {
  async GET(_req: Request, ctx: HandlerContext) {
    return ctx.render({
      ...ctx.state,
    });
  },

  async POST(req: Request, ctx: HandlerContext): Promise<Response> {
    const data = await req.formData();
    const longUrl = data.get("url");
    const slug = nanoid(9);

    console.log("Shortening link", longUrl);
    const key = ['url', slug]
    await kv.set(key, {longUrl})

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
