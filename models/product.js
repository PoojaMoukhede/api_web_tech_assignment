const mongoose=require("mongoose");

const productSchema = new mongoose.Schema({
    Product_id:{type:String},
    Product_type:{type:String,required:true},
    Product_name:{type:String,required:true},
    Product_price:{type:Number},
    Available_quantity:{type:Number}
})

const product = mongoose.model("product",productSchema)