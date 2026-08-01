import mongoose from "mongoose";


const settingsSchema = new mongoose.Schema({

shopName:{
    type:String,
    default:"Sri Murugan Agency"
},

phone:{
    type:String,
    default:""
},

whatsapp:{
    type:String,
    default:""
},

address:{
    type:String,
    default:""
},

email:{
    type:String,
    default:""
},

logo:{
    type:String,
    default:""
},

facebook:{
    type:String,
    default:""
},

instagram:{
    type:String,
    default:""
}

},
{
timestamps:true
});


const Settings = mongoose.model(
"Settings",
settingsSchema
);


export default Settings;