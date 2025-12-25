import { defineCollection, z } from "astro:content";

const performerSchema = z.object({
  name: z.string().min(1),
  title: z.string().optional(),
});

const eventSchema = z.object({
  title: z.string().min(1),
  subTitle: z.string().optional(),
  date: z.string().refine(
    (val) => !Number.isNaN(Date.parse(val)),
    { message: "Date must be a valid ISO date (YYYY-MM-DD or YYYY-MM-DDTHH:mm)" }
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

export const collections = {
  events: defineCollection({
    type: "data",
    schema: z.object({
      events: z.array(eventSchema).default([]),
    }),
  }),
};
