const express = require("express")
const routes=express.Router();
const customer=require("../models/user")

//  post -  /customer
//  get - /customer/customerID
routes.get("/customer/customerID",async(req,res)=>{
   try{
    const data= await customer.find({customer_id:req.body.customer_id})
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

routes.post("/customer",async(req,res)=>{
   try{
    const data= await customer.create({
        customer_id:req.body.customer_id,
        customer_name:req.body. customer_name,
        email:req.body.email,
        balance:req.body.balance
        
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