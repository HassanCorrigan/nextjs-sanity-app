import sanityClient from '@sanity/client';

const Client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_PROJECT_DATASET,
  useCdn: false,
});

export default Client;
