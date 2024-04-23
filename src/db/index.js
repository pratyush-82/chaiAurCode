import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// import connectDB from "./db";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    )
    console.log(`MongoDB connected.. : ${connectInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection has been failed", error);
    process.exit(1);
  }
}

export default connectDB
