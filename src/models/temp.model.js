import mongoose from "mongoose";

const TempSchema = new mongoose.Schema({
    _id: String    
}, { timestamps: true });

export const Temp = mongoose.model("Temp", TempSchema);