/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export const handler: Handlers<null> = {
  POST(_, ctx): Response {
      return Response.redirect('http://localhost:8000/details/x')
  },
};

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`text-4xl`}>
        URL Shortener
      </h1>
      <p class={tw`my-6`}>
        <form method="post">
          <label>
            Long URL
          </label>
          <input type='text'/>
          <input type='submit'/>
        </form>
      </p>
    </div>
  );
}
