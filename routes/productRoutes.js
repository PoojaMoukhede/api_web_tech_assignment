const express = require("express")
const routes=express.Router();
const product=require("../models/product")

// post - /product
// get - /product/productID
// get - /product/productType
routes.get("/product/productID",async(req,res)=>{
    try{
        const data= await product.find({Product_id:req.body.Product_id})
       res.status(200).json({
        status:"sucess",
        message:data
       })
       }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
       }

})

routes.get("/product/productType",async(req,res)=>{
    try{
        const data= await product.find({Product_type:req.params.Product_type})
       res.status(200).json({
        status:"sucess",
        message:data
       })
       }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
       }

})

routes.post("/product",async(req,res)=>{
    try{
        const data= await product.create({
            Product_id:req.body.Product_id,
            Product_type:req.body.Product_type,
            Product_name:req.body.Product_name,
            Product_price:req.body.Product_price,
            Available_quantity:req.body.Available_quantity
            
        })
        res.status(200).json({
            status:"sucess",
            message:data
        })
       }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
       }

})
module.exports = routes