import mongoose from "mongoose";


const productSchema = new mongoose.Schema({

name:{
 type:String,
 required:true
},

tamilName:{
 type:String,
 default:""
},

brand:{
 type:String,
 default:""
},

category:{
 type:String,
 required:true
},

unit:{
 type:String,
 default:"Piece"
},

price:{
 type:Number,
 required:true
},

stock:{
 type:Number,
 default:0
},

image:{
 type:String,
 default:""
},

description:{
 type:String,
 default:""
}


},{
timestamps:true
});


export default mongoose.model(
"Product",
productSchema
);