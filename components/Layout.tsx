import { ComponentChildren } from "preact";
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
    <div class="mx-auto px-6 max-w-screen-md py-32">
      <div class="flex flex-none items-center py-6 justify-between align-middle">
        <h1 class="max-w-lg text-3xl font-bold leading-loose text-gray-900">
          <a href="/">
            URL Shortener
          </a>
        </h1>
        {auth.loggedIn ? <UserInfo auth={auth} /> : <LoginButton />}
      </div>
      <div>
        {auth.loggedIn ? <a href='/me'>View all links</a> : ''}
      </div>
      <p class="my-6 max-w-lg">
        {children}
      </p>
      <div class="mt-10">
        <a href="https://github.com/sdil/deno-url-shortener">
          View the source code on Github
        </a>
      </div>
    </div>
  );
}
