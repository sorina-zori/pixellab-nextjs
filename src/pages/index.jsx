import { Layout } from "@/layouts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sorina`&apos;`s React App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>Hello Layout</Layout>
    </>
  );
}
