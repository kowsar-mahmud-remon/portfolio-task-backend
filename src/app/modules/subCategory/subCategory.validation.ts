import { z } from "zod";

const createSubCategoryZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "PhoneNumber is Required",
    }),
    parentCategoryId: z.string({
      required_error: "parentCategoryId is Required",
    }),
  }),
});

export const SubCategoryValidation = {
  createSubCategoryZodSchema,
};
