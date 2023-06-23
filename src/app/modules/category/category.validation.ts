import { z } from "zod";

const createCategoryZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "name is Required",
    }),
  }),
});

export const CategoryValidation = {
  createCategoryZodSchema,
};
