import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import settingsRoutes from "./routes/settingsRoutes.js";


dotenv.config();


const app = express();



// ==========================
// Middleware
// ==========================

app.use(cors({

origin:"http://localhost:5173",

methods:[
"GET",
"POST",
"PUT",
"DELETE"
]

}));


app.use(express.json());

app.use(express.urlencoded({

extended:true

}));




// ==========================
// Image Folder
// ==========================

app.use(

"/uploads",

express.static("uploads")

);




// ==========================
// Routes
// ==========================

app.use(

"/api/products",

productRoutes

);



app.use(

"/api/orders",

orderRoutes

);



app.use(

"/api/settings",

settingsRoutes

);





// ==========================
// Test Route
// ==========================

app.get("/",(req,res)=>{


res.send(

"🚀 Sri Murugan Agency Backend Running"

);


});






// ==========================
// MongoDB
// ==========================


mongoose

.connect(process.env.MONGO_URI)

.then(()=>{


console.log(
"✅ MongoDB Connected"
);



app.listen(

5000,

()=>{


console.log(

"✅ Server Running : http://localhost:5000"

);


}

);



})

.catch((error)=>{


console.log(

"MongoDB Error:",

error

);


});