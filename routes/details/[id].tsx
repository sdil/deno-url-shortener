/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<null> = {
    GET(_, ctx): Response {
        return ctx.render(null, 404)
    },
};

export default function ShortLinkDetails(props: PageProps) {
    const { id } = props.params
    return <div>
        <div>
            Link Detail
        </div>
        <div>
            Click link here <a href={`/short/${id}`}>short link</a>
    </div>
    </div >;
}
