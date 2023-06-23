import ApiError from "../../../errors/ApiError";
import { ICategory } from "./category.interface";
import { Category } from "./category.model";
import slugify from "slugify";
const shortId = require("shortid");

const createCategory = async (
  category: ICategory
): Promise<ICategory | null> => {
  const categoryName = category.name;
  const newId = slugify(categoryName.toLowerCase());
  const uniqueId = shortId.generate();
  const slug = newId + "-" + uniqueId;
  category.slug = slug;

  const createdCategory = await Category.create(category);
  if (!createdCategory) {
    throw new ApiError(400, "Failed to create category");
  }

  return createdCategory;
};

const getCategory = async () => {
  const getCategory = await Category.find({});
  if (!getCategory) {
    throw new ApiError(400, "Failed to get Category");
  }

  return getCategory;
};

const getSingleCategory = async (id: string) => {
  const getSingleCategory = await Category.findById({ _id: id });
  if (!getSingleCategory) {
    throw new ApiError(400, "Failed to get Category");
  }

  return getSingleCategory;
};

const updateCategory = async (id: string, payload: any) => {
  const updateCategory = await Category.findByIdAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    }
  );
  if (!updateCategory) {
    throw new ApiError(400, "Failed to update Category");
  }

  return updateCategory;
};

const deleteCategory = async (id: string) => {
  const deleteCategory = await Category.findByIdAndDelete({ _id: id });
  if (!deleteCategory) {
    throw new ApiError(400, "Category deleted successfully");
  }

  return deleteCategory;
};

export const CategoryService = {
  createCategory,
  getCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
