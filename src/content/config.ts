// Importe les propriétés depuis `astro:content`
import { defineCollection, z } from "astro:content";
// Définir un `type` et un `schema` pour chaque collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});
// Exporter un objet `collections` unique pour y enregistrer vos collections
export const collections = {
  posts: postsCollection,
};