import { Handlers } from "$fresh/server.ts";

const kv = await Deno.openKv();

export const handler: Handlers<null> = {
  async GET(_req, ctx): Response {
    const slug = ctx.params.slug;
    const short = (await kv.get(['url', slug])).value

    return Response.redirect(short.longUrl, 302);
  },
};
