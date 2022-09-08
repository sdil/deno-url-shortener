import { ComponentChildren } from "preact";

export default function LoginButton() {
  return (
    <a href="/api/github_login">
      <div
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Login with Github
      </div>
    </a>
  );
}
