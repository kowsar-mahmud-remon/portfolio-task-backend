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

export const CategoryController = {
  createCategory,
};
