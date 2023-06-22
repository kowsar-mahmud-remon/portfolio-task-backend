import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { CategoryRoutes } from "./app/modules/category/category.route";
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use("/api/v1/technology/", CategoryRoutes);

// Testing
// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, "Throw Error");
//   // res.send("Working Successfully");
//   next();
// });

// global error handler
app.use(globalErrorHandler);

export default app;
