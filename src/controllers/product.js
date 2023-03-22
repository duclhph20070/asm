import joi from 'joi';
import product from "../models/product"
const productShema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    desc: joi.string(),
    status: joi.boolean().required(),
    quandy: joi.number(),
});
export const create = async (req, res) => {
    try {
        const {error} = productShema.validate(req.body);
        if(error){
            res.json({
                message: error.details[0].message,
            });
        }
        const data = await product.create(req.body);
        return res.status(201).json({
            message: "Tao san pham thanh cong",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const getAll = async (req,res) => {
    try {
        const data = await product.find();
        return res.status(201).json({
            message: "Tao san pham thanh cong",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
export const get = async (req, res) => {
    try {
        const data = await Product.findById(req.params.id);
        return res.status(201).json({
            message: "Tao san pham thanh cong",
            data,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
        
    }
};
export const update = async (req, res) => {
    try {
        const {error} = productSchema.validate(req.body);
        if(error){
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        const data = await Product.findOneAndUpdate({_id: req.params.id}, req.body, { new: true});
        return res.json({
            message: "Cap nhat thanh cong",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error
        });
    }
};
export const remove = async (req, res) => {
    
    try {
        const data = await Product.findOneAndDelete({_id: req.params.id});
        return res.json({
            message: "Xoa thanh cong",
            data,
        });
    } catch (error) {
        return res.status(400).json({
            message: error
        });
    }
};
