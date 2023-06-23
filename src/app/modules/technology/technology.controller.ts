import { NextFunction, Request, Response } from "express";
import { TechnologyService } from "./technology.service";
import getDataUri from "../../utils/dataUri";
import cloudinary from "cloudinary";

const createTechnology = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const file = req.file;
    const fileUri = getDataUri(file);

    if (fileUri.content !== undefined) {
      const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

      const image = {
        url: myCloud.secure_url,
        public_id: myCloud.public_id,
      };

      const technologyData = req.body;
      const result = await TechnologyService.createTechnology(
        technologyData,
        image
      );

      const statusCode = 200;
      res.status(statusCode).json({
        success: true,
        statusCode: statusCode,
        message: "Technology Created Successfully",
        data: result,
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateTechnology = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await TechnologyService.updateTechnology(id, updatedData);

    const statusCode = 200;
    res.status(statusCode).json({
      success: true,
      statusCode: statusCode,
      message: "Technology update Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getTechnology = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await TechnologyService.getTechnology();

    const statusCode = 200;
    res.status(statusCode).json({
      success: true,
      statusCode: statusCode,
      message: "Technology Get Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleTechnology = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await TechnologyService.getSingleTechnology(id);

    const statusCode = 200;
    res.status(statusCode).json({
      success: true,
      statusCode: statusCode,
      message: "Technology Get Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTechnology = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await TechnologyService.deleteTechnology(id);

    const statusCode = 200;
    res.status(statusCode).json({
      success: true,
      statusCode: statusCode,
      message: "Technology Deleted Successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const TechnologyController = {
  createTechnology,
  updateTechnology,
  getTechnology,
  getSingleTechnology,
  deleteTechnology,
};
