import {useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import {
FaEdit,
FaTrash
} from "react-icons/fa";


function ProductsList(){


const [products,setProducts]=useState([]);



// LOAD PRODUCTS

useEffect(()=>{

getProducts();

},[]);



const getProducts=async()=>{


const res =
await axios.get(
"http://localhost:5000/api/products"
);


setProducts(res.data);


};





const deleteProduct=async(id)=>{


await axios.delete(
`http://localhost:5000/api/products/${id}`
);


getProducts();


};




return(

<div className="p-6">


<h1 className="text-3xl font-bold mb-6">
Products
</h1>



<table className="w-full border">


<thead>

<tr className="bg-gray-200">

<th className="p-3">
Image
</th>

<th>
Name
</th>

<th>
Price
</th>

<th>
Stock
</th>

<th>
Action
</th>


</tr>

</thead>



<tbody>


{
products.map((product)=>(


<tr
key={product._id}
className="border"
>


<td className="p-3">


<img

src={
product.image
?
product.image
:
"/no-image.png"
}

className="w-16 h-16 object-cover rounded"

/>


</td>




<td>
{product.name}
</td>



<td>
₹ {product.price}
</td>



<td>
{product.stock}
</td>




<td className="flex gap-3 p-3">


<Link

to={`/admin/edit-product/${product._id}`}

className="bg-green-600 text-white px-3 py-2 rounded"

>

<FaEdit/>

</Link>





<button

onClick={()=>deleteProduct(product._id)}

className="bg-red-600 text-white px-3 py-2 rounded"

>

<FaTrash/>

</button>


</td>



</tr>


))

}



</tbody>



</table>


</div>


)


}


export default ProductsList;