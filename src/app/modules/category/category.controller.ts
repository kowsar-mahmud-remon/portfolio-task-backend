import { NextFunction, Request, Response } from "express";
import { CategoryService } from "./category.service";

const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categoryData = req.body;
    const result = await CategoryService.createCategory(categoryData);

    const statusCode = 200;
    res.status(statusCode).json({
      success: true,
      statusCode: statusCode,
      message: "Category Created Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CategoryService.getCategory();

    const statusCode = 200;
    res.status(statusCode).json({
      success: true,
      statusCode: statusCode,
      message: "Category Get Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await CategoryService.getSingleCategory(id);

    const statusCode = 200;
    res.status(statusCode).json({
      success: true,
      statusCode: statusCode,
      message: "Category Get Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await CategoryService.updateCategory(id, updatedData);

    const statusCode = 200;
    res.status(statusCode).json({
      success: true,
      statusCode: statusCode,
      message: "Category update Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await CategoryService.deleteCategory(id);

    const statusCode = 200;
    res.status(statusCode).json({
      success: true,
      statusCode: statusCode,
      message: "Category Deleted Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const CategoryController = {
  createCategory,
  getCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
