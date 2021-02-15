import Head from 'next/head';

const Meta = ({ title, description, keywords, url }) => {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, viewport-fit=cover maximum-scale=1'
      />
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='/images/opengraph-twitter-card.jpg' />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta
        property='twitter:image'
        content='/images/opengraph-twitter-card.jpg'
      />

      <meta name='apple-mobile-web-app-cabable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='theme-color' content='#ececec' />
      {/* <link rel='apple-touch-icon' href='/images/icons/icon-192x192.png' />
      <link
        rel='shortcut icon'
        type='image/png'
        href='/images/icons/favicon.png'
      />

      <link rel='manifest' href='/manifest.json' /> */}

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Next.js & Sanity app',
  description:
    "A starter template for building a Next.js app using Sanity's CMS.",
  keywords: 'nextjs, sanity, app',
  url: 'http://localhost:3000',
};

export default Meta;
