import { z, defineCollection } from "astro:content";

const storiesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    excerpt: z.string(),
    intro: z.string(),
    image: z.object({
      src: z.string(),
      width: z.number(),
      height: z.number(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  stories: storiesCollection,
};
