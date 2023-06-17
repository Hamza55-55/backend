import mongoose from 'mongoose';
const adminstructure=mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: {
        type: String,
    }
});
const adminmodel=mongoose.model("product",adminstructure);
export default adminmodel;