import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./variables.env" });

export const connectDB = async () => {
  try {
    console.log("MongoDB URL:", process.env.DB_MONGO);
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected database");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
