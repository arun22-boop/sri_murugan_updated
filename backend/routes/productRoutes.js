import express from "express";
import Product from "../models/Product.js";

const router = express.Router();


// GET ALL PRODUCTS
router.get("/", async(req,res)=>{

try{

const products = await Product.find();

res.json(products);

}
catch(error){

res.status(500).json({
message:error.message
});

}

});




// GET SINGLE PRODUCT
router.get("/:id", async(req,res)=>{

try{


const product = await Product.findById(
req.params.id
);



if(!product){

return res.status(404).json({

message:"Product not found"

});

}



res.json(product);



}
catch(error){


res.status(500).json({

message:error.message

});


}


});





// ADD PRODUCT
router.post("/", async(req,res)=>{


try{


const product = await Product.create(req.body);


res.json(product);



}
catch(error){


res.status(500).json(error);


}


});





export default router;