import sanityClient from '@sanity/client';

const Client = sanityClient({
  projectId: 'bfrf90lz',
  dataset: 'production',
  useCdn: true,
});

export default Client;
