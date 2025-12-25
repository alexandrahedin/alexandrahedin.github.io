import { defineCollection, z } from "astro:content";

/* --------------------
   Shared schemas
-------------------- */

const performerSchema = z.object({
  name: z.string().min(1),
  title: z.string().optional(),
});

const eventSchema = z.object({
  title: z.string().min(1),
  subTitle: z.string().optional(),
  date: z
    .string()
    .refine(
      (val) => !Number.isNaN(Date.parse(val)),
      { message: "Date must be a valid ISO 8601 date string" }
    ),
  location: z.string().min(1),
  performers: z.array(performerSchema).min(1),
  link: z
    .object({
      url: z.string().url(),
      text: z.string().min(1),
    })
    .optional(),
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
  type: "data",
  schema: z.object({
    events: z.array(eventSchema).default([]),
  }),
});

export const collections = {
  biography,
  events,
};
