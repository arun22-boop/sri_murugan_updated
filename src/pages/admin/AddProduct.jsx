import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


function AddProduct(){


const [image,setImage] = useState(null);



const [product,setProduct] = useState({

name:"",
tamilName:"",
brand:"",
category:"",
unit:"Piece",
price:"",
stock:"",
description:""

});





const handleChange=(e)=>{


setProduct({

...product,

[e.target.name]:e.target.value

});


};






const handleSubmit=async(e)=>{


e.preventDefault();



try{


const formData = new FormData();



formData.append(
"name",
product.name
);


formData.append(
"tamilName",
product.tamilName
);


formData.append(
"brand",
product.brand
);


formData.append(
"category",
product.category
);


formData.append(
"unit",
product.unit
);


formData.append(
"price",
product.price
);


formData.append(
"stock",
product.stock
);


formData.append(
"description",
product.description
);




// IMAGE FILE

if(image){

formData.append(
"image",
image
);

}







const res = await axios.post(

"http://localhost:5000/api/products",

formData,

{

headers:{

"Content-Type":"multipart/form-data"

}

}

);





toast.success(
"Product Added Successfully"
);



console.log(res.data);





// CLEAR


setProduct({

name:"",
tamilName:"",
brand:"",
category:"",
unit:"Piece",
price:"",
stock:"",
description:""

});


setImage(null);



}


catch(error){


console.log(error.response?.data || error);


toast.error(
"Product Add Failed"
);


}



};









return(


<div className="p-8">


<h1 className="text-2xl font-bold mb-6">

Add Product

</h1>





<form

onSubmit={handleSubmit}

className="space-y-4"

>






<input

type="text"

name="name"

placeholder="Product Name"

value={product.name}

onChange={handleChange}

className="border p-3 w-full"

/>






<input

type="text"

name="tamilName"

placeholder="Tamil Name"

value={product.tamilName}

onChange={handleChange}

className="border p-3 w-full"

/>







<input

type="text"

name="brand"

placeholder="Brand"

value={product.brand}

onChange={handleChange}

className="border p-3 w-full"

/>








<input

type="text"

name="category"

placeholder="Category"

value={product.category}

onChange={handleChange}

className="border p-3 w-full"

/>








<select

name="unit"

value={product.unit}

onChange={handleChange}

className="border p-3 w-full"

>


<option value="Piece">
Piece
</option>


<option value="Bag">
Bag
</option>


<option value="Kg">
Kg
</option>


<option value="Meter">
Meter
</option>


</select>








<input

type="number"

name="price"

placeholder="Price"

value={product.price}

onChange={handleChange}

className="border p-3 w-full"

/>








<input

type="number"

name="stock"

placeholder="Stock"

value={product.stock}

onChange={handleChange}

className="border p-3 w-full"

/>









{/* IMAGE UPLOAD */}


<label className="font-semibold">

Product Image

</label>



<input

type="file"

accept="image/*"

onChange={(e)=>{

setImage(
e.target.files[0]
)

}}

className="border p-3 w-full"

/>







{/* IMAGE PREVIEW */}

{

image &&

<img

src={
URL.createObjectURL(image)
}

alt="preview"

className="w-32 h-32 object-cover mt-3"

/>

}







<textarea

name="description"

placeholder="Description"

value={product.description}

onChange={handleChange}

className="border p-3 w-full"

/>







<button

type="submit"

className="bg-blue-600 text-white px-6 py-3 rounded"

>

Add Product

</button>






</form>


</div>


)


}


export default AddProduct;