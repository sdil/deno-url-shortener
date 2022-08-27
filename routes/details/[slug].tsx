/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<null> = {
    GET(_, ctx): Response {
        return ctx.render(null, 404)
    },
};

export default function ShortLinkDetails(props: PageProps) {
    const { slug } = props.params
    return <div>
        <div>
            Link Detail
        </div>
        <div>
            Click link here <a href={`/short/${slug}`}>short link</a>
    </div>
    </div >;
}
