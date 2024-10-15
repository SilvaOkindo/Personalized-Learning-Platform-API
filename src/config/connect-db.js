import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect("mongodb://localhost").then(
        () => {
            console.log("DB connected successfully")
        }
    ).catch(err => console.log(err))
}