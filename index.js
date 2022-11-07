const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoutes= require("./routes/productRoutes")
const orderRoutes=require("./routes/orderRoutes")
const customerRoutes=require("./routes/customerRoutes")



app.use("/",productRoutes)
app.use("/",orderRoutes)
app.use("/",customerRoutes)

mongoose.connect("mongodb+srv://pooja:pooja@cluster0.ybliyac.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser:true,UseUnifiedTopology:true
},
(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("DB connected")
    }
}
)

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(3000, ()=>{
    console.log("server is up at 3000")
})