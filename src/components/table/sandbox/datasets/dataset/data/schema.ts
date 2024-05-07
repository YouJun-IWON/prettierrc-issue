import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const dataSchema = z.object({
  id: z.string(),
  query: z.string(),
  context: z.string(),
  response: z.string(),
});

export type Task = z.infer<typeof dataSchema>;
