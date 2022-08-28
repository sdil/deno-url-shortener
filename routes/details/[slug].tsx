/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "@/components/Layout.tsx";
import { tw } from "@twind";

export const handler: Handlers<null> = {
  GET(_, ctx): Response {
    return ctx.render(null, 404);
  },
};

export default function ShortLinkDetails(props: PageProps) {
  const { slug } = props.params;
  return (
    <Layout>
      <p class="text-4xl font-medium text-gray-900">Link details</p>
      <div>
        Click link{" "}
        <a class={tw`text-underline`} href={`/short/${slug}`}>here</a>
      </div>
    </Layout>
  );
}
