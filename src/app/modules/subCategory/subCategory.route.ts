import express from "express";
import { SubCategoryController } from "./subCategory.controller";
import validateRequest from "../../middlewares/validateRequest";
import { SubCategoryValidation } from "./subCategory.validation";

const router = express.Router();

router.get("/get-sub-category/:id", SubCategoryController.getSingleSubCategory);
router.get("/get-sub-category", SubCategoryController.getSubCategory);
router.post(
  "/create-sub-category",
  validateRequest(SubCategoryValidation.createSubCategoryZodSchema),
  SubCategoryController.createSubCategory
);
router.delete(
  "/:id/delete-sub-category",
  SubCategoryController.deleteSubCategory
);

router.patch(
  "/:id/update-sub-category",
  SubCategoryController.updateSubCategory
);

export const SubCategoryRoutes = router;
