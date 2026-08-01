import {useEffect,useState} from "react";
import {useParams,useNavigate} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


function EditProduct(){


const {id}=useParams();

const navigate=useNavigate();


const [product,setProduct]=useState({

name:"",
tamilName:"",
brand:"",
category:"",
unit:"Piece",
price:"",
stock:"",
description:"",
image:""

});


const [newImage,setNewImage]=useState(null);

const [preview,setPreview]=useState("");





// ==========================
// GET PRODUCT
// ==========================

useEffect(()=>{


getProduct();


},[id]);





const getProduct=async()=>{


try{


const res=await axios.get(

`http://localhost:5000/api/products/${id}`

);



setProduct(res.data);



if(res.data.image){

setPreview(

`http://localhost:5000${res.data.image}`

);

}



}

catch(error){

console.log(error);

}


};








// ==========================
// INPUT CHANGE
// ==========================


const handleChange=(e)=>{


setProduct({

...product,

[e.target.name]:e.target.value

});


};









// ==========================
// IMAGE CHANGE
// ==========================


const handleImageChange=(e)=>{


const file=e.target.files[0];


setNewImage(file);



if(file){


setPreview(

URL.createObjectURL(file)

);


}


};









// ==========================
// UPDATE PRODUCT
// ==========================


const handleSubmit=async(e)=>{


e.preventDefault();



try{


const formData=new FormData();



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




// NEW IMAGE

if(newImage){

formData.append(
"image",
newImage
);

}





await axios.put(

`http://localhost:5000/api/products/${id}`,

formData,

{

headers:{

"Content-Type":"multipart/form-data"

}

}

);





toast.success(
"Product Updated Successfully"
);



navigate(
"/admin/products"
);



}

catch(error){


console.log(error);


toast.error(
"Update Failed"
);


}



};








return(


<div className="p-8">


<h1 className="text-3xl font-bold mb-8">

Edit Product

</h1>






<form

onSubmit={handleSubmit}

className="max-w-xl space-y-5"

>





<input

name="name"

value={product.name}

onChange={handleChange}

placeholder="Product Name"

className="border p-3 w-full rounded"

/>







<input

name="tamilName"

value={product.tamilName}

onChange={handleChange}

placeholder="Tamil Name"

className="border p-3 w-full rounded"

/>







<input

name="brand"

value={product.brand}

onChange={handleChange}

placeholder="Brand"

className="border p-3 w-full rounded"

/>







<input

name="category"

value={product.category}

onChange={handleChange}

placeholder="Category"

className="border p-3 w-full rounded"

/>







<select

name="unit"

value={product.unit}

onChange={handleChange}

className="border p-3 w-full rounded"

>


<option>
Piece
</option>


<option>
Bag
</option>


<option>
Kg
</option>


<option>
Meter
</option>


</select>








<input

type="number"

name="price"

value={product.price}

onChange={handleChange}

placeholder="Price"

className="border p-3 w-full rounded"

/>







<input

type="number"

name="stock"

value={product.stock}

onChange={handleChange}

placeholder="Stock"

className="border p-3 w-full rounded"

/>








{/* OLD / NEW IMAGE */}


<label className="font-bold">

Change Product Image

</label>



<input

type="file"

accept="image/*"

onChange={handleImageChange}

className="border p-3 w-full"

/>





{

preview &&

<img

src={preview}

alt="preview"

className="w-40 h-40 object-cover rounded mt-3"

/>

}







<textarea

name="description"

value={product.description}

onChange={handleChange}

placeholder="Description"

className="border p-3 w-full rounded"

/>







<button

className="bg-blue-600 text-white px-8 py-3 rounded-xl"

>

Update Product

</button>






</form>


</div>


);


}


export default EditProduct;