import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { CategoryRoutes } from "./app/modules/category/category.route";
import { SubCategoryRoutes } from "./app/modules/subCategory/subCategory.route";
import { TechnologyRoutes } from "./app/modules/technology/technology.route";
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use("/api/v1/technology/", CategoryRoutes);
app.use("/api/v1/technology/", SubCategoryRoutes);
app.use("/api/v1/technology/", TechnologyRoutes);

// Testing
// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, "Throw Error");
//   // res.send("Working Successfully");
//   next();
// });

// global error handler
app.use(globalErrorHandler);

export default app;
