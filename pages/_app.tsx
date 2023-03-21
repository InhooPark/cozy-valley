import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Charactestatus from "@/contexts/Characterstatus";

export default function App({ Component, pageProps: { session, pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Charactestatus>
        <Component {...pageProps} />
      </Charactestatus>
    </SessionProvider>
  );
}
