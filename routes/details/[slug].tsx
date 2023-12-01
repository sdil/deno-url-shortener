import { Handlers, PageProps } from "$fresh/server.ts";

const kv = await Deno.openKv();

export const handler: Handlers<null> = {
  async GET(_req, ctx): Response {
    const slug = ctx.params.slug;
    const short = (await kv.get(['url', slug])).value

    return ctx.render({
      loggedIn: true,
      username: "test",
      short,
      ...ctx.state,
    });
  },
};

export default function ShortLinkDetails(props: PageProps) {
  const { loggedIn, username, short } = props.data;
  const { slug } = props.params;
  return (
    <>
      <p class="text-4xl font-medium text-gray-900">Link details</p>
      <div>
        Click link <a class="text-underline" href={`/short/${slug}`}>here</a>
      </div>
      <div>
        Long Url: { short.longUrl }
      </div>
    </>
  );
}
