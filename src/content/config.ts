import { defineCollection } from "astro:content";
import { postSchema } from "./post/schema";

const postCollection = defineCollection({
  type: "content",
  schema: postSchema
})

export const collections = {
  "post": postCollection
}