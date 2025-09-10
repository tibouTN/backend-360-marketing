import mongoose from "mongoose";
import { db_URL, NODE_ENV } from "../config/env.js";



if (!db_URL) {
    throw new Error("DB_URL is not defined");
}

const connectDB = async () => {
    try {
        await mongoose.connect(db_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectDB;

