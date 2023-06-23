import { Model, Schema, model } from "mongoose";
import { ISubCategory } from "./subCategory.interface";

type SubCategoryModel = Model<ISubCategory, Record<string, unknown>>;

const SubCategorySchema = new Schema<ISubCategory>(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    parentCategoryId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const SubCategory = model<ISubCategory, SubCategoryModel>(
  "SubCategory",
  SubCategorySchema
);
