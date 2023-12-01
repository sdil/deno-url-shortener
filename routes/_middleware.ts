import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { deleteCookie, getCookies } from "$std/http/cookie.ts";

const kv = await Deno.openKv();

interface State {
  loggedIn: boolean;
  username: string;
  userId: number;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  const resp = await ctx.next();
  const accessToken = getCookies(req.headers)["session_token"];

  if (accessToken) {
    const login_info = kv.get(["session_token", accessToken])
    
    if (result.rowCount > 0) {
      ctx.state.loggedIn = true;
      ctx.state.userId = login_info.id;
      ctx.state.username = login_info.username;
      const resp = await ctx.next();
      return resp;
    } else {
      const headers = new Headers({});
      deleteCookie(headers, "session_token", { path: "/" });
    }
  }

  // If no access token or invalid access_token
  // ctx.state.loggedIn = false;
  // const resp = await ctx.next();
  return resp;
}
