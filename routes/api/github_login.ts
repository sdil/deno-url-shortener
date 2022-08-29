import { Handler } from "$fresh/server.ts";

export const handler: Handler = (_req: Request): Response => {
  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.set("client_id", Deno.env.get("GITHUB_CLIENT_ID"));
  url.searchParams.set(
    "redirect_uri",
    Deno.env.get("GITHUB_CALLBACK_URL"),
  );
  return Response.redirect(url, 302);
};
