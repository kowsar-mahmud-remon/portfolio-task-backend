import ApiError from "../../../errors/ApiError";
import { ISubCategory } from "./subCategory.interface";
import { SubCategory } from "./subCategory.model";

import slugify from "slugify";
const shortId = require("shortid");

const createSubCategory = async (
  subCategory: ISubCategory
): Promise<ISubCategory | null> => {
  const subCategoryName = subCategory.name;
  const newId = slugify(subCategoryName.toLowerCase());
  const uniqueId = shortId.generate();
  const slug = newId + "-" + uniqueId;
  subCategory.slug = slug;

  const createdSubCategory = await SubCategory.create(subCategory);
  if (!createdSubCategory) {
    throw new ApiError(400, "Failed to create sub category");
  }

  return createdSubCategory;
};

const updateSubCategory = async (id: string, payload: any) => {
  const updateSubCategory = await SubCategory.findByIdAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    }
  );
  if (!updateSubCategory) {
    throw new ApiError(400, "Failed to update Sub Category");
  }

  return updateSubCategory;
};

const getSubCategory = async () => {
  const getSubCategory = await SubCategory.find({});
  if (!getSubCategory) {
    throw new ApiError(400, "Failed to get Sub Category");
  }

  return getSubCategory;
};

const getSingleSubCategory = async (id: string) => {
  const getSingleSubCategory = await SubCategory.findById({ _id: id });
  if (!getSingleSubCategory) {
    throw new ApiError(400, "Failed to get Sub Category");
  }

  return getSingleSubCategory;
};

const deleteSubCategory = async (id: string) => {
  const deleteSubCategory = await SubCategory.findByIdAndDelete({ _id: id });
  if (!deleteSubCategory) {
    throw new ApiError(400, "Sub Category deleted successfully");
  }

  return deleteSubCategory;
};

export const SubCategoryService = {
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
  getSubCategory,
  getSingleSubCategory,
};
