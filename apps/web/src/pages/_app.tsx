import type { AppProps } from "next/app";
import { Provider as WrapBalanceProvider } from "react-wrap-balancer";
import { Metadata, Layout, Header, Footer } from "@/components";
import { FontProvider } from "@/fonts";
import "@/styles/global.css";

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
