import type { AppProps } from "next/app";
import { Provider as WrapBalanceProvider } from "react-wrap-balancer";
import "@/styles/global.css";
import { FontProvider } from "@/fonts";
import { Metadata, Layout, Header, Footer } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Metadata />
      <WrapBalanceProvider>
        <FontProvider>
          <Layout>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Layout>
        </FontProvider>
      </WrapBalanceProvider>
    </>
  );
}
