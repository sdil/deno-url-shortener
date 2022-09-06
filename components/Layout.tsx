/** @jsx h */
import { ComponentChildren, h } from "preact";
import { tw } from "@twind";
import LoginButton from "@/components/LoginButton.tsx";
import UserInfo from "@/components/UserInfo.tsx";

interface AuthData {
  username: String;
  loggedIn: boolean;
}
interface LayoutProps {
  children: ComponentChildren;
  auth: AuthData;
}

export default function Layout({ children, auth }: LayoutProps) {
  return (
    <div class={tw`mx-auto px-6 max-w-screen-md py-32`}>
      <h1 class={tw`max-w-lg text-3xl font-bold leading-loose text-gray-900`}>
        <a href="/">
          URL Shortener
        </a>
        {auth.loggedIn ? <UserInfo auth={auth} /> : <LoginButton />}
      </h1>
      <p class={tw`my-6 max-w-lg`}>
        {children}
      </p>
      <div class={tw`mt-10`}>
        <a href="https://github.com/sdil/deno-url-shortener">
          View the source code on Github
        </a>
      </div>
    </div>
  );
}
