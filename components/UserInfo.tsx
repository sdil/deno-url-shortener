/** @jsx h */
import { ComponentChildren, h } from "preact";
import { tw } from "@twind";

export default function UserInfo({ children }: LayoutProps) {
    return (
        <div>
            <div>

                Logged In
            </div>
            <a href="/api/logout">Click here to logout</a>
        </div>
    );
}
