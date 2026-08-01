import express from "express";
import Settings from "../models/Settings.js";


const router = express.Router();



// GET SETTINGS

router.get("/", async(req,res)=>{

try{


let settings = await Settings.findOne();



if(!settings){

settings = await Settings.create({});

}



res.json(settings);


}
catch(err){


res.status(500).json({

message:err.message

});


}


});





// UPDATE SETTINGS


router.put("/", async(req,res)=>{


try{


let settings = await Settings.findOne();



if(!settings){


settings = await Settings.create(req.body);


}
else{


settings =
await Settings.findByIdAndUpdate(

settings._id,

req.body,

{
new:true
}

);


}



res.json(settings);



}
catch(err){


res.status(500).json({

message:err.message

});


}


});




export default router;