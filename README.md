# Next.js/Sanity app

## A app built using Next.js on the front-end and Sanity CMS for API requests.

![Next.js/Sanity Promo Image](/client/public/images/opengraph-twitter-card.jpg 'Next.js/Sanity Promo Image')

A minimal, re-usable app with a clean UI which uses Next.js for the font-end and Sanity CMS for API requests. Features a blog and online store, including a persistent shopping cart and checkout summary.

Supports setting featured products on the home page as well as the displaying the latest posts. Setting an item as 'sold out' will prevent a user from adding the item to the cart and also remove it from the featured section.

---

## Setup

The project is seperated into a client folder for the front-end and studio folder for Sanity. You'll first need a [Sanity account](https://accounts.sanity.io/signup/) to manage your content and get a project ID.

### Client

Set environment variables:

```
SANITY_STUDIO_API_PROJECT_ID # e.g. abcd12xz
SANITY_STUDIO_API_DATASET # e.g. production
```

### Studio

Set environment variables:

```
SANITY_STUDIO_API_PROJECT_ID # e.g. abcd12xz
SANITY_STUDIO_API_DATASET # e.g. production
```

---

## Deployment

As this project is structured as a monorepo, a base/root directory must be set with the chosen hosting provider. Popular providers such as [Netlify](https://docs.netlify.com/configure-builds/get-started/#definitions) or [Vercel](https://vercel.com/docs/build-step#root-directory) support this option.

The base/root directory for the front end: **client**

The base/root directory for sanity cms: **studio**

You can easily host the client and studio on either platform, and once deployed, you'll need to add your front-end hostname (e.g. example.com) to the API setting on Sanity's [project management page](https://manage.sanity.io/).
