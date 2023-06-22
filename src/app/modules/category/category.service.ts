import ApiError from "../../../errors/ApiError";
import { ICategory } from "./category.interface";
import { Category } from "./category.model";

const createCategory = async (
  category: ICategory
): Promise<ICategory | null> => {
  const createdCategory = await Category.create(category);
  if (!createdCategory) {
    throw new ApiError(400, "Failed to create category");
  }

  return createdCategory;
};
export const CategoryService = {
  createCategory,
};
