import { Model, Schema, model } from "mongoose";
import { ICategory } from "./category.interface";

type CategoryModel = Model<ICategory, Record<string, unknown>>;

const CategorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Category = model<ICategory, CategoryModel>(
  "Category",
  CategorySchema
);
