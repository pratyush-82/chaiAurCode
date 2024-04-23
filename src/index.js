// require('dotenv').config()
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import express from "express";

function configureEnvironment() {
  dotenv.config({
    path: "./env",
  });
}

// Call the function to configure the environment
configureEnvironment();

connectDB();

/*
const app = express();
  
  (async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`APP IS LISTENING ON PORT ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
