import { defineCollection, z } from "astro:content";

/* --------------------
   Shared schemas
-------------------- */

const performerSchema = z.object({
  name: z.string().min(1),
  title: z.string().optional(),
});

const eventSchema = z.object({
  language: z.string().optional(),
  title: z.string().min(1),
  subTitle: z.string().optional(),
  date: z.union([
    z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
    z.date().transform((d) => d.toISOString().split('T')[0])
  ]),
  time: z.union([
    z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Time must be in HH:mm format"),
    z.number().transform((n) => {
      const hours = Math.floor(n / 100);
      const minutes = n % 100;
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    })
  ]).optional(),
  location: z.string().min(1),
  performers: z.array(performerSchema).min(1),
  link: z
    .object({
      url: z.string().url(),
      text: z.string().min(1),
    })
    .optional()
    .nullable(),
  alwaysShow: z.boolean().optional().default(false),
});

const galleryItemSchema = z.object({
  title: z.string().min(1),
  caption: z.string().optional(),
  image: z.string().min(1), // filename in src/assets/gallery/
});

const videoItemSchema = z.object({
  title: z.string().min(1),
  vimeoId: z.number().int().positive(),
  customContainerStyle: z.string().optional().default(''),
  hidden: z.boolean().optional(),
});

/* --------------------
   Collections
-------------------- */

const quoteSchema = z.object({
  text: z.string().min(1),
  author: z.string().min(1),
});

const biography = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    quotes: z.array(quoteSchema).optional(),
  }),
});

const events = defineCollection({
  type: "content",
  schema: eventSchema,
});

const gallery = defineCollection({
  type: "content",
  schema: z.object({
    items: z.array(galleryItemSchema),
  }),
});

const videos = defineCollection({
  type: "content",
  schema: z.object({
    items: z.array(videoItemSchema),
  }),
});

const settings = defineCollection({
  type: "content",
  schema: z.object({
    pageTitle: z.string().min(1),
    metaDescription: z.string().min(1),
    headerMainTitle: z.string().min(1),
    headerSubtitle: z.string().min(1),
    posthogId: z.string().optional(),
  }),
});

export const collections = {
  biography,
  events,
  gallery,
  videos,
  settings,
};
