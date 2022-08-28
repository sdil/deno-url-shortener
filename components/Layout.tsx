/** @jsx h */
import { ComponentChildren, h } from "preact";
import { tw } from "@twind";

interface LayoutProps {
    children: ComponentChildren;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div class={tw`mx-auto px-6 max-w-screen-md py-32`}>
            <h1 class={tw`max-w-lg text-3xl font-bold leading-loose text-gray-900`}>
                <a href="/">
                    URL Shortener
                </a>
            </h1>
            <p class={tw`my-6 max-w-lg`}>
                {children}
            </p>
        </div>
    );
}