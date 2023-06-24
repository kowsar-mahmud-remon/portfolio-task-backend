import { Model, Schema, model } from "mongoose";
import { ISubCategory } from "./subCategory.interface";
import mongoose from "mongoose";

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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      // required: true,
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
