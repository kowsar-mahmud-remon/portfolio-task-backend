import { Model, Schema, model } from "mongoose";
import { ITechnology } from "./technology.interface";

type TechnologyModel = Model<ITechnology, Record<string, unknown>>;

const TechnologySchema = new Schema<ITechnology>(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      index: true,
    },
    image: {
      url: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },
    experience: {
      count: {
        type: Number,
        required: true,
      },
      unit: {
        type: String,
        required: true,
        enum: ["year", "month", "week", "day"],
      },
    },
    projects: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Technology = model<ITechnology, TechnologyModel>(
  "Technology",
  TechnologySchema
);
