import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta
        name="viewport" 
        content="upgrade-insecure-requests,initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width,upgrade-insecure-requests" 
        http-equiv="Content-Security-Policy"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
