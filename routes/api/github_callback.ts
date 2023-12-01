import { HandlerContext } from "$fresh/server.ts";
import { getCookies, setCookie } from "$std/http/cookie.ts";
import { githubApi } from "@/utils/githubApi.ts";
import { nanoid } from "https://deno.land/x/nanoid@v3.0.0/nanoid.ts";


export const handler = async (req: Request, _ctx: HandlerContext): Response => {
  const maybeAccessToken = getCookies(req.headers)["session_token"];

  // if (maybeAccessToken) {
  //   const result = await connection.queryObject(
  //     "SELECT username FROM users WHERE access_token = $TOKEN AND access_token IS NOT NULL",
  //     { token: maybeAccessToken },
  //   );

  //   if (result.rowCount > 0) {
  //     // This is a user with valid access token
  //     // redirect to home
  //     return new Response("", {
  //       status: 302,
  //       headers: { location: "/" },
  //     });
  //   }
  // }

  // // Handling oauth callback request
  // const url = new URL(req.url);
  // const code = url.searchParams.get("code");
  // if (!code) {
  //   return new Response("Invalid Github code");
  // }

  // const githubAccessToken = await githubApi.getAccessToken(code);
  // const userData = await githubApi.getUserData(githubAccessToken);

  // const accessToken = nanoid(16);
  // await connection.queryObject(
  //   "UPSERT INTO users (id, username, fullname, access_token, github_token) VALUES ($ID, $USERNAME, $FULLNAME, $TOKEN, $GITHUB_TOKEN)",
  //   {
  //     id: userData.userId,
  //     username: userData.userName,
  //     fullname: userData.userFullname,
  //     token: accessToken,
  //     github_token: githubAccessToken,
  //   },
  // );

  const headers = new Headers({ location: "/" });

  setCookie(headers, {
    name: "session_token",
    value: 'accessToken',
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
    sameSite: "Lax",
    path: "/",
  });

  return new Response("", {
    status: 302,
    headers: headers,
  });
};
