import settings from "@/settings";
import Head from "next/head";

// Next.js App Router Metadata
// Not supported in `pages` directory
// https://beta.nextjs.org/docs/api-reference/metadata

const metadata = settings.metadata;

export default function Metadata() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>
        {metadata.title.template
          ? metadata.title.template.replace("%s", metadata.title.default)
          : metadata.title.default}
      </title>
      <meta name="description" content={metadata.description} />
    </Head>
  );
}
