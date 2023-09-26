import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  const url = process.env.MONGODB_URL;
  try {
    console.log("Connecting to database...");
    await mongoose.connect(url);
    console.log("Database connection successful");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Database connection failed" + error.message);
    }
    process.exit(1);
  }
};
