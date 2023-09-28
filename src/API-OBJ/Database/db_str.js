import mongoose from "mongoose";

const productStructure = new mongoose.Schema({
    name: String,
    brand: String,
    color: String,
    price: Number
});
export const productSTR = mongoose.models.products || mongoose.model('products', productStructure)