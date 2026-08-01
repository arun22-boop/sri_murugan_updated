import mongoose from "mongoose";


const settingsSchema = new mongoose.Schema(
{

shopName:
{
type:String,
default:"Sri Murugan Agency"
},


phone:
{
type:String,
default:"9095932878"
},


whatsapp:
{
type:String,
default:"9095932878"
},


address:
{
type:String,
default:"Ganapathipalayam, Erode - 638011"
},


email:
{
type:String,
default:""
},


logo:
{
type:String,
default:""
},


description:
{
type:String,
default:"Quality • Trust • Service"
}


},
{
timestamps:true
}

);



const Settings =
mongoose.model(
"Settings",
settingsSchema
);


export default Settings;