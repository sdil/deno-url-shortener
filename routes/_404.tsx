import { Handlers, UnknownPageProps } from "$fresh/server.ts";
import Layout from "@/components/Layout.tsx";

export const handler: Handlers<null> = {
  async GET(_req, ctx): Response {
    return ctx.render({
      ...ctx.state,
    });
  },
};

export default function ShortLinkDetails(props: UnknownPageProps) {
  const loggedIn = false;
  const username = "test";
  return (
    <Layout auth={{ loggedIn, username }}>
      <div>
        Page not found!
      </div>
    </Layout>
  );
}
