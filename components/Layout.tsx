/** @jsx h */
import { ComponentChildren, h } from "preact";
import { tw } from "@twind";
import LoginButton from "@/components/LoginButton.tsx";
import UserInfo from "@/components/UserInfo.tsx";

interface LayoutProps {
  children: ComponentChildren;
  loggedIn: boolean;
}

export default function Layout({ children, loggedIn }: LayoutProps) {
  return (
    <div class={tw`mx-auto px-6 max-w-screen-md py-32`}>
      <h1 class={tw`max-w-lg text-3xl font-bold leading-loose text-gray-900`}>
        <a href="/">
          URL Shortener
        </a>
        {/* {ditto} */}
        {loggedIn ? <UserInfo /> : <LoginButton />}
      </h1>
      <p class={tw`my-6 max-w-lg`}>
        {children}
      </p>
    </div>
  );
}
