import Layout from "@/layout/layout";
import "@/styles/globals.css";
import Head from "next/head";
import AuthUserContextProvider from "@/context/userContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthUserContextProvider>
      <Layout>
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Bookuter</title>
          <meta
            name="description"
            content="Welcome to our book website, your one-stop destination for exploring a diverse and captivating collection of books, ranging from classic literature to contemporary bestsellers, where you can easily find your next literary adventure."
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AuthUserContextProvider>
  );
}
