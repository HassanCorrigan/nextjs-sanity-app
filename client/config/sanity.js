import sanityClient from '@sanity/client';

/** Configure the sanity client by passing in values stored in environment variables. */
const Client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_PROJECT_DATASET,
  useCdn: false,
});

export default Client;
