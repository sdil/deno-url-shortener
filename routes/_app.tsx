import { AppProps } from "$fresh/server.ts";

export default function App({ Component, state }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>deno-url-shortener</title>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,200&display=swap"
          rel="stylesheet"
        >
        </link>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
