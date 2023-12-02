import { Handlers, PageProps } from "$fresh/server.ts";

const kv = await Deno.openKv();

export const handler: Handlers<null> = {
  async GET(_req: Request, ctx: HandlerContext) {
    const iter = kv.list({ prefix: ["url"] });
    const urls: ShortUrl[] = [];

    for await (const res of iter) {
        // await kv.delete(res.key);
        urls.push(res.value);
    }

    console.log(urls)

    return ctx.render({
        urls
    });
  },
};

export default function Home(props) {
  const { urls }: {urls: ShortUrl[]} = props.data;

  return (
    <div>
       {urls.map((url) => (
          <div>
            {url.longUrl}
          </div>
        ))}
    </div>
  );
}
