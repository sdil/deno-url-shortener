/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "@/components/Layout.tsx";
import { tw } from "@twind";

export const handler: Handlers<null> = {
  async GET(_, ctx): Promise<Response> {
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
        <a class={tw`text-underline`} href={`/short/${slug}`}>here</a>
      </div>
    </Layout>
  );
}
