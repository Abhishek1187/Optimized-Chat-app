import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async() =>{
    try {
        const {MONGO_URI} = process.env;
        if(!MONGO_URI) throw new Error("MONGO_URI is not set");
        const conn = await mongoose.connect (process.env.MONGO_URI) 
        console.log("MongoDB Connected Successfully:",conn.connection.host)
    } catch (error) {
        console.log("Error Connection to mongoDB:",error)
        process.exit(1);
        
    }
}