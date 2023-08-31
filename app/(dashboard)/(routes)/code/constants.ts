import * as z from "zod";

export const FormSchema = z.object({
  prompt: z
    .string()
    .min(3, {
      message: "Prompt must be at least 3 characters long",
    })
    .max(100, { message: "Prompt must be less than 100 characters long" }),
});
