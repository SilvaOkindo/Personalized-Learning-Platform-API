import express from "express"
import {connectDB} from "./config/connect-db.js";

const app = express()

app.get("/", (req, res) => {
    res.json({message: "Hello World"})
})

// connect db

connectDB()

app.listen(3000, () => {
    console.log("Server running on port 3000")
})