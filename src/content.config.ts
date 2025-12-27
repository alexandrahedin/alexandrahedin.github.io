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

/* --------------------
   Collections
-------------------- */

const biography = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
  }),
});

const events = defineCollection({
  type: "content",
  schema: eventSchema,
});

export const collections = {
  biography,
  events,
};
