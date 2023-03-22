import mongoose from "mongoose";

const productShema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    desc: {
        type: String
    },
    status: {
        type: Boolean
    },
    quanty: {
        type: Number
    },
});
export default mongoose.model('product', productShema);