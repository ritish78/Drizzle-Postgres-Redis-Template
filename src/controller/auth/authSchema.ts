import { z } from "zod";

export const registerSchema = z.object({
  body: z.object({
    firstName: z.string().min(1, { message: "Please enter your first name!" }),
    lastName: z.string().min(1, { message: "Please enter your last name!" }),
    email: z
      .string()
      .min(1, { message: "Please enter email address!" })
      .email("Please enter valid email address!"),
    password: z.string().min(8, { message: "Please enter password of length 8 or more!" })
  })
});

export const loginSchema = z.object({
  body: z.object({
    email: z
      .string()
      .min(1, { message: "Please enter email address!" })
      .email("Please enter valid email address!"),
    password: z.string().min(8, { message: "Please enter password of length 8 or more!" })
  })
});
