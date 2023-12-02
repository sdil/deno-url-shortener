import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "@/components/Layout.tsx";

export const handler: Handlers<null> = {
  async GET(_req, ctx): Response {
    if (!ctx.state.loggedIn) {
      return new Response("", {
        status: 302,
        headers: { location: "/" },
      });
    }

    // const result = await connection.queryObject(
    //     "SELECT slug, long_url FROM links WHERE user_id = $USER_ID",
    //     { user_id: ctx.state.userId },
    // );

    const urls = [
      { slug: "abc", long_url: "https://google.com" },
      { slug: "def", long_url: "https://deno.land" },
    ];
    return ctx.render({
      ...ctx.state,
      urls,
    });
  },
};

export default function Me(props: PageProps) {
  const { loggedIn, username, urls } = props.data;
  return (
    <Layout auth={{ loggedIn, username }}>
      <p class="text-4xl font-medium text-gray-900">All links</p>
      <div class="py-4">
        {urls.map((url) => (
          <div>
            <a href={`/short/${url.slug}`}>{url.long_url}</a>
          </div>
        ))}
      </div>
    </Layout>
  );
}
