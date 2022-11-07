const mongoose=require("mongoose");
// const customer=require("./user")

const orderSchema = new mongoose.Schema({
  order:[
    {
        inventory_id:{type:String,required:true},
        item_name:{type:String,unique:true,required:true},
        quantity:{type:Number}
    }
  ],
  // customerRef:{type:mongoose.Schema.Types.customer_id, ref:"customer"}
   
})


const order = mongoose.model("order",orderSchema)