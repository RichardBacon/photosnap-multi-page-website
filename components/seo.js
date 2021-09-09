import Head from 'next/head';

function Seo() {
  const siteMetadata = {
    title: 'Photosnap',
    description:
      'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
  };

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={siteMetadata.description} />
      <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.svg" />
      <title>{siteMetadata.title}</title>
    </Head>
  );
}

export default Seo;
