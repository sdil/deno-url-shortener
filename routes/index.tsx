/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Client } from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import { Handlers, HandlerContext } from "$fresh/server.ts";

// const client = new Client({
//   user: "postgres",
//   password: "mysecretpassword",
//   database: "postgres",
//   hostname: "localhost",
//   port: 5432,
// });
// await client.connect();

export const handler: Handlers<null> = {
  async POST(req: Request, ctx: HandlerContext): Promise<Response> {
    const data = await req.formData()
    console.log("Shortening link", data.get('url'))
    // const result = await client.queryArray(`SELECT 'Hello'`)
    // console.log(result.rows[0][0])

    // How to handle relative path redirection
    // https://github.com/denoland/fresh/discussions/511#discussioncomment-3157429
    return new Response("", {
      status: 302,
      headers: { Location: "/details/x" },
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
