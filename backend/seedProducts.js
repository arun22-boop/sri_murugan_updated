import mongoose from "mongoose";
import dotenv from "dotenv";

import Product from "./models/Product.js";
import products from "./data/products.js";


dotenv.config();



const seedProducts = async()=>{


try{


await mongoose.connect(
process.env.MONGO_URI
);


console.log(
"MongoDB Connected"
);



// Remove old products

await Product.deleteMany();



console.log(
"Old Products Removed"
);



// Insert products

await Product.insertMany(products);



console.log(
"Products Added Successfully"
);



process.exit();



}
catch(error){


console.log(error);

process.exit(1);


}


};



seedProducts();