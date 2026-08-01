import {useEffect,useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";


function Settings(){


const [setting,setSetting]=useState({

shopName:"",
phone:"",
whatsapp:"",
address:"",
email:"",
logo:""

});





useEffect(()=>{

loadSettings();

},[]);





const loadSettings=async()=>{


const res=await axios.get(

"http://localhost:5000/api/settings"

);


if(res.data){

setSetting(res.data);

}


};







const handleChange=(e)=>{


setSetting({

...setting,

[e.target.name]:e.target.value

});


};








const saveSettings=async()=>{


try{


await axios.put(

"http://localhost:5000/api/settings",

setting

);



toast.success(
"Settings Updated"
);


}

catch(error){

toast.error(
"Update Failed"
);

}


};








return(


<div className="p-6">


<h1 className="text-3xl font-bold mb-8">

Website Settings

</h1>





<div className="max-w-xl space-y-4">



<input

name="shopName"

value={setting.shopName}

onChange={handleChange}

placeholder="Shop Name"

className="border p-3 w-full rounded"

/>




<input

name="phone"

value={setting.phone}

onChange={handleChange}

placeholder="Phone"

className="border p-3 w-full rounded"

/>




<input

name="whatsapp"

value={setting.whatsapp}

onChange={handleChange}

placeholder="Whatsapp"

className="border p-3 w-full rounded"

/>





<input

name="email"

value={setting.email}

onChange={handleChange}

placeholder="Email"

className="border p-3 w-full rounded"

/>





<textarea

name="address"

value={setting.address}

onChange={handleChange}

placeholder="Address"

className="border p-3 w-full rounded"

/>





<input

name="logo"

value={setting.logo}

onChange={handleChange}

placeholder="Logo URL"

className="border p-3 w-full rounded"

/>







<button

onClick={saveSettings}

className="bg-blue-600 text-white px-6 py-3 rounded"

>


Save Settings


</button>





</div>


</div>


);


}


export default Settings;