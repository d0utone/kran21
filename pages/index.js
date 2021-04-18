import Head from "next/head";
import { getPage } from "../lib/api";

export default function Home({ pageData }) {
  return (
    <div>
      <Head>
        <title>{pageData?.meta?.data?.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeIntro content={pageData?.home?.content} />
    </div>
  );
}

const HomeIntro = ({ content }) => (
  <div
    className="px-12 w-full text-center"
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

export async function getStaticProps() {
  const pageData = await getPage("home");

  return {
    props: { pageData },
  };
}
