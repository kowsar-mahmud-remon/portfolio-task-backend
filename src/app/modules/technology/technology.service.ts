import ApiError from "../../../errors/ApiError";
import { ITechnology } from "./technology.interface";
import { Technology } from "./technology.model";
import slugify from "slugify";
const shortId = require("shortid");
import cloudinary from "cloudinary";

const createTechnology = async (
  technology: ITechnology,
  image: any
): Promise<ITechnology | null> => {
  const technologyName = technology.name;
  const newId = slugify(technologyName.toLowerCase());
  const uniqueId = shortId.generate();
  const slug = newId + "-" + uniqueId;
  technology.slug = slug;
  technology.image = image;

  const createdTechnology = await Technology.create(technology);
  if (!createdTechnology) {
    throw new ApiError(400, "Failed to create Technology");
  }

  return createdTechnology;
};

const updateTechnology = async (id: string, payload: any) => {
  const updateTechnology = await Technology.findByIdAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    }
  );
  if (!updateTechnology) {
    throw new ApiError(400, "Failed to update Technology");
  }

  return updateTechnology;
};

const getTechnology = async () => {
  const getTechnology = await Technology.find({});
  if (!getTechnology) {
    throw new ApiError(400, "Failed to get Technology");
  }

  return getTechnology;
};

const getSingleTechnology = async (id: string) => {
  const getSingleTechnology = await Technology.findById({ _id: id });
  if (!getSingleTechnology) {
    throw new ApiError(400, "Failed to get Technology");
  }

  return getSingleTechnology;
};

const deleteTechnology = async (id: string) => {
  const deleteTechnology = await Technology.findByIdAndDelete({ _id: id });

  if (!deleteTechnology) {
    throw new ApiError(400, "Category deleted successfully");
  }

  const public_id = deleteTechnology?.image?.public_id;

  if (public_id) {
    await cloudinary.v2.uploader.destroy(public_id);
  }

  return deleteTechnology;
};

export const TechnologyService = {
  createTechnology,
  updateTechnology,
  getTechnology,
  getSingleTechnology,
  deleteTechnology,
};
