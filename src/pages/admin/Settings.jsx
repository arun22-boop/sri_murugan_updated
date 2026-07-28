import { useEffect, useState } from "react";
import toast from "react-hot-toast";


function Settings(){


const [settings,setSettings] = useState({

shopName:"",

address:"",

phone1:"",

phone2:"",

whatsapp:"",

email:"",

logo:""

});






// Load Settings


useEffect(()=>{


const savedSettings =

JSON.parse(
localStorage.getItem("settings")
);



if(savedSettings){

setSettings(savedSettings);

}

else{


setSettings({

shopName:"SRI MURUGAN AGENCY",

address:"Ganapathipalayam, Erode",

phone1:"9095932878",

phone2:"9095332878",

whatsapp:"9095932878",

email:"",

logo:""

});


}


},[]);








// Change Input


const handleChange=(e)=>{


setSettings({

...settings,

[e.target.name]:e.target.value

});


};









// Save


const saveSettings=(e)=>{


e.preventDefault();



localStorage.setItem(

"settings",

JSON.stringify(settings)

);



window.dispatchEvent(

new Event("storage")

);



toast.success(

"Settings Updated Successfully"

);


};









return(


<div className="p-6">


<h1 className="text-3xl font-bold mb-2">

Settings

</h1>


<p className="text-gray-500 mb-8">

Sri Murugan Agency

</p>








<form

onSubmit={saveSettings}

className="max-w-xl space-y-5"

>





<input

name="shopName"

value={settings.shopName}

onChange={handleChange}

placeholder="Shop Name"

className="border p-3 w-full rounded"

/>








<input

name="address"

value={settings.address}

onChange={handleChange}

placeholder="Shop Address"

className="border p-3 w-full rounded"

/>








<input

name="phone1"

value={settings.phone1}

onChange={handleChange}

placeholder="Phone Number 1"

className="border p-3 w-full rounded"

/>








<input

name="phone2"

value={settings.phone2}

onChange={handleChange}

placeholder="Phone Number 2"

className="border p-3 w-full rounded"

/>








<input

name="whatsapp"

value={settings.whatsapp}

onChange={handleChange}

placeholder="WhatsApp Number"

className="border p-3 w-full rounded"

/>








<input

name="email"

value={settings.email}

onChange={handleChange}

placeholder="Email"

className="border p-3 w-full rounded"

/>








<input

name="logo"

value={settings.logo}

onChange={handleChange}

placeholder="Logo Image URL"

className="border p-3 w-full rounded"

/>








{

settings.logo &&

<img

src={settings.logo}

alt="logo preview"

className="w-32 h-32 object-contain border rounded"

/>

}








<button

type="submit"

className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"

>

Save Settings

</button>







</form>



</div>


);


}


export default Settings;