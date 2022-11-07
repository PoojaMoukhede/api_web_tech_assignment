const express = require("express")
const routes=express.Router();
const order=require("../models/order")

// - post - /orders
// - get - /orders/orderID
routes.get("/orders/orderID",async(req,res)=>{
    try{
        const data= await order.findOne({Product_id:req.Product_id})
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

routes.post("/orders",async(req,res)=>{
    try{
        const data= await product.create({
            inventory_id:req.body.inventory_id,
            item_name:req.body.item_name,
            quantity:req.body. quantity
            
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