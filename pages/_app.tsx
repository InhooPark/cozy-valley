import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Charactestatus from "@/contexts/Characterstatus";
import PageStatus from "@/contexts/PageStatus";

export default function App({ Component, pageProps: { session, pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <PageStatus>
        <Charactestatus>
          <Component {...pageProps} />
        </Charactestatus>
      </PageStatus>
    </SessionProvider>
  );
}
