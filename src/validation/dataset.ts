import { z } from "zod";

export const updateLikeschema = z.object({
  agenda_id: z.string(),
  new_likes_list: z.array(z.string()),
  user_id: z.string(),
  plus_check: z.boolean(),
});
