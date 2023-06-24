import express from "express";
import validateRequest from "../../middlewares/validateRequest";
// import { TechnologyValidation } from "./technology.validation";
import { TechnologyController } from "./technology.controller";
import singleUpload from "../../middlewares/multer";

const router = express.Router();

router.get("/get-technology/:id", TechnologyController.getSingleTechnology);
router.get("/get-technology", TechnologyController.getTechnology);
router.post(
  "/create-technology",
  singleUpload,
  // validateRequest(TechnologyValidation.createTechnologyZodSchema),
  TechnologyController.createTechnology
);

router.delete("/:id/delete-technology", TechnologyController.deleteTechnology);

router.patch("/:id/update-technology", TechnologyController.updateTechnology);

export const TechnologyRoutes = router;
