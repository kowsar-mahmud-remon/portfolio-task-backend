import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: config.cloud_name,
  api_key: config.api_key,
  api_secret: config.api_secret,
});

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`Database is connected successfully`);

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(`Failed to connect database`, error);
  }
}

bootstrap();
