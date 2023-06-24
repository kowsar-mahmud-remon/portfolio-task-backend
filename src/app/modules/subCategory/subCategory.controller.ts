import { NextFunction, Request, Response } from "express";
import { SubCategoryService } from "./subCategory.service";
import { Category } from "../category/category.model";

const createSubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const subCategoryData = req.body;
    const result = await SubCategoryService.createSubCategory(subCategoryData);

    const statusCode = 200;
    res.status(statusCode).json({
      success: true,
      statusCode: statusCode,
      message: "Sub Category Created Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateSubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await SubCategoryService.updateSubCategory(id, updatedData);

    const statusCode = 200;
    res.status(statusCode).json({
      success: true,
      statusCode: statusCode,
      message: "SubCategory update Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await SubCategoryService.getSubCategory();

    const statusCode = 200;
    res.status(statusCode).json({
      success: true,
      statusCode: statusCode,
      message: "Sub Category Get Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleSubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await SubCategoryService.getSingleSubCategory(id);

    const statusCode = 200;
    res.status(statusCode).json({
      success: true,
      statusCode: statusCode,
      message: "Sub Category Get Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await SubCategoryService.deleteSubCategory(id);

    const statusCode = 200;
    res.status(statusCode).json({
      success: true,
      statusCode: statusCode,
      message: "Sub Category Deleted Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const SubCategoryController = {
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
  getSubCategory,
  getSingleSubCategory,
};
