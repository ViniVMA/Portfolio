import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../src/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Header />
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
