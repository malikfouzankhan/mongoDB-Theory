import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function dbConnect()
{
    try {
        let URI = process.env.DB_URI;
        await mongoose.connect(URI);
    } catch (error) {
        console.log(error);
    }
}

dbConnect();