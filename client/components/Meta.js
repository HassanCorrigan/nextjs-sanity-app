import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const Meta = ({ title, description, keywords, url, image, type }) => {
  const { asPath } = useRouter();
  const pathname = asPath.split('?')[0];

  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, viewport-fit=cover maximum-scale=1'
      />
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      <meta property='og:type' content={type} />
      <meta property='og:url' content={`${url}${pathname}`} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={`${url}${pathname}`} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />

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

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Meta.defaultProps = {
  title: 'Next.js & Sanity app',
  description:
    "A starter template for building a Next.js app using Sanity's CMS.",
  keywords: 'nextjs, sanity, app',
  url: 'https://nextjs-sanity-app-client.vercel.app',
  image: '/images/opengraph-twitter-card.jpg',
  type: 'website',
};

export default Meta;
