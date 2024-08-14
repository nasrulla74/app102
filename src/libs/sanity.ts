import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { StaticImageData } from 'next/image';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_STUDIO_TOKEN,
  apiVersion: '2021-10-21',
});


const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: StaticImageData)  => builder.image(source);
