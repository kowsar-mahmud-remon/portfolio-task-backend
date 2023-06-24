import mongoose from "mongoose";
import { ICategory } from "../category/category.interface";

export type ISubCategory = {
  name: string;
  slug: string;
  parentCategoryId: mongoose.Types.ObjectId | ICategory;
};
