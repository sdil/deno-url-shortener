/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface AuthData {
  username: String
  loggedIn: boolean
}

interface Props {
  auth: AuthData;
}

export default function UserInfo({ auth }: Props) {
  return (
    <div>
      <div>
        Logged in as {auth.username}
      </div>
      <a href="/api/logout" class={tw`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}>Click here to logout</a>
    </div>
  );
}
