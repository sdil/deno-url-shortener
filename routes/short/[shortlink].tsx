/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<null> = {
    GET(_, ctx): Response {
        if (true) {
            const longLink = 'http://fadhil-blog.dev'
            return Response.redirect(longLink, 302)
        } else {
            return ctx.render(null)
        }
    },
};

export default function Greet(props: PageProps) {
    return <div>This link is invalid</div>;
}
