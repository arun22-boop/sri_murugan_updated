import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";


function EditProduct(){


const { id } = useParams();

const navigate = useNavigate();



const [product,setProduct] = useState({

name:"",

tamilName:"",

brand:"",

category:"",

unit:"",

price:"",

stock:"",

image:""

});







// Load Product


useEffect(()=>{


const products =

JSON.parse(
localStorage.getItem("products")
) || [];



const selectedProduct =

products.find(

item =>

item.id === Number(id)

);



if(selectedProduct){


setProduct(selectedProduct);


}


},[id]);









// Input Change


const handleChange=(e)=>{


setProduct({

...product,

[e.target.name]:e.target.value

});


};









// Update Product


const updateProduct=(e)=>{


e.preventDefault();



const products =

JSON.parse(
localStorage.getItem("products")
) || [];




const updatedProducts =

products.map(item=>


item.id === Number(id)

?

product

:

item


);






localStorage.setItem(

"products",

JSON.stringify(updatedProducts)

);




window.dispatchEvent(

new Event("storage")

);





toast.success(

"Product Updated Successfully"

);



navigate("/admin/products");



};








return(


<div className="p-6">


<h1 className="text-3xl font-bold mb-8">

Edit Product

</h1>





<form

onSubmit={updateProduct}

className="max-w-xl space-y-4"

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







<input

name="unit"

value={product.unit}

onChange={handleChange}

placeholder="Unit"

className="border p-3 w-full rounded"

/>







<input

name="price"

value={product.price}

onChange={handleChange}

placeholder="Price"

className="border p-3 w-full rounded"

/>







<input

name="stock"

value={product.stock}

onChange={handleChange}

placeholder="Stock"

className="border p-3 w-full rounded"

/>







<input

name="image"

value={product.image}

onChange={handleChange}

placeholder="Image URL"

className="border p-3 w-full rounded"

/>







<div className="flex gap-4">


<button

type="submit"

className="bg-green-600 text-white px-6 py-3 rounded-lg"

>

Update Product

</button>




<button

type="button"

onClick={()=>navigate("/admin/products")}

className="bg-gray-500 text-white px-6 py-3 rounded-lg"

>

Cancel

</button>



</div>





</form>



</div>


);


}


export default EditProduct;