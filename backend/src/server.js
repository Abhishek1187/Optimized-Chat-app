import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;



app.get("/api/auth/signup" , (req , res) => {
    res.send("Signup Endpoint");
})

app.get("/api/auth/login" , (req , res) => {
    res.send("Login Endpoint");
})

app.get("/api/auth/logout" , (req , res) => {
    res.send("LogOut Endpoint");
})

app.listen (PORT , () => console.log("Server is Start at PORT 3000"));