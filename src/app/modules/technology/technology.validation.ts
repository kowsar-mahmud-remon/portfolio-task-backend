import { z } from "zod";

const createTechnologyZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is Required",
    }),
    slug: z
      .string({
        required_error: "Slug is Required",
      })
      .optional(),
    experience: z.object({
      count: z.any({
        required_error: "count is Required",
      }),
      unit: z.enum(["year", "month", "week", "day"]),
    }),
    projects: z.any({
      required_error: "projects is Required",
    }),
    description: z.string({
      required_error: "description is Required",
    }),
  }),
});

export const TechnologyValidation = {
  createTechnologyZodSchema,
};
