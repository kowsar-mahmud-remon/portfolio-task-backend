import express from "express";
import { CategoryController } from "./category.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CategoryValidation } from "./category.validation";

const router = express.Router();

router.get("/get-category/:id", CategoryController.getSingleCategory);
router.get("/get-category", CategoryController.getCategory);
router.post(
  "/create-category",
  validateRequest(CategoryValidation.createCategoryZodSchema),
  CategoryController.createCategory
);
router.delete("/:id/delete-category", CategoryController.deleteCategory);

router.patch("/:id/update-category", CategoryController.updateCategory);

export const CategoryRoutes = router;
