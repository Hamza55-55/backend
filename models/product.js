import mongoose from 'mongoose';
const productSchema = mongoose.Schema({
    categoryId: { type: String },
    name: { type: String, required: true },
    quantity: { type: Number },
    price: { type: String, required: true },
    image: {
        type: String,
    }
});
const productModel=mongoose.model("product",productSchema);
export default productModel;