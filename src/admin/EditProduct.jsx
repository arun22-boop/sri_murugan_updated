import {useEffect,useState} from "react";
import axios from "axios";
import {useParams,useNavigate} from "react-router-dom";
import toast from "react-hot-toast";


function EditProduct(){


const {id}=useParams();

const navigate=useNavigate();



const [product,setProduct]=useState({

name:"",
tamilName:"",
brand:"",
category:"",
unit:"",
price:"",
stock:"",
image:"",
description:""

});




// GET DATA

useEffect(()=>{


axios.get(
`http://localhost:5000/api/products/${id}`
)

.then(res=>{

setProduct(res.data);

})


},[id]);







const handleChange=(e)=>{


setProduct({

...product,

[e.target.name]:e.target.value

});


};







const updateProduct=async(e)=>{


e.preventDefault();



try{


await axios.put(

`http://localhost:5000/api/products/${id}`,

product

);



toast.success(
"Product Updated"
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


<h1 className="text-2xl font-bold mb-5">
Edit Product
</h1>




<form
onSubmit={updateProduct}
className="space-y-4"
>



<input

name="name"

value={product.name}

onChange={handleChange}

placeholder="Product Name"

className="border p-3 w-full"

/>





<input

name="brand"

value={product.brand}

onChange={handleChange}

placeholder="Brand"

className="border p-3 w-full"

/>





<input

name="category"

value={product.category}

onChange={handleChange}

placeholder="Category"

className="border p-3 w-full"

/>





<input

name="price"

value={product.price}

onChange={handleChange}

placeholder="Price"

className="border p-3 w-full"

/>





<input

name="stock"

value={product.stock}

onChange={handleChange}

placeholder="Stock"

className="border p-3 w-full"

/>





<input

name="image"

value={product.image}

onChange={handleChange}

placeholder="Image URL"

className="border p-3 w-full"

/>





{
product.image &&

<img

src={product.image}

className="w-32 h-32 object-cover"

/>

}




<button

className="bg-blue-600 text-white px-6 py-3 rounded"

>

Update Product

</button>



</form>


</div>


)

}


export default EditProduct;