import { z } from "astro/zod";

export const postSchema = z.object({
  title: z.string(),
  date: z.date(),
  author: z.string(),
  description: z.string(),
  image: z.string()
})
