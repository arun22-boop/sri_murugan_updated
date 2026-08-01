import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  FaShoppingCart
} from "react-icons/fa";

import toast from "react-hot-toast";

import { useCart } from "../context/CartContext";



function ProductDetails(){


const { id } = useParams();


const { addToCart } = useCart();


const [product,setProduct] = useState(null);

const [loading,setLoading] = useState(true);







// ==========================
// GET SINGLE PRODUCT
// ==========================


useEffect(()=>{


getProduct();


},[id]);






const getProduct = async()=>{


try{


const res = await fetch(

`http://localhost:5000/api/products/${id}`

);



const data = await res.json();



console.log("PRODUCT DATA:",data);



if(res.ok){


setProduct(data);


}
else{


setProduct(null);


}



setLoading(false);



}

catch(error){


console.log(error);


setLoading(false);


}



};









if(loading){


return(

<div className="text-center py-20 text-xl">

Loading Product...

</div>

);


}









if(!product){


return(

<div className="text-center py-20 text-2xl font-bold">

Product Not Found

</div>

);


}









return(


<section className="bg-gray-50 min-h-screen py-10 px-6">


<div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-8">





<div className="grid md:grid-cols-2 gap-10">







{/* IMAGE */}


<div>


<img


src={

product.image

?

`http://localhost:5000${product.image}`

:

"/images/no-image.png"

}


alt={product.name}


className="w-full h-96 object-contain rounded-xl"

/>


</div>








{/* DETAILS */}


<div>



<h1 className="text-4xl font-bold mb-4">

{product.name}

</h1>





<p className="text-gray-600 text-xl">

{product.tamilName}

</p>






<p className="text-orange-600 text-3xl font-bold mt-5">

₹ {product.price}

</p>






<div className="mt-6 space-y-3">


<p>

<b>Brand :</b> {product.brand}

</p>


<p>

<b>Category :</b> {product.category}

</p>


<p>

<b>Unit :</b> {product.unit}

</p>


<p>

<b>Stock :</b> {product.stock}

</p>



</div>







<p className="mt-6 text-gray-700">

{product.description}

</p>








<button


onClick={()=>{


addToCart(product,1);



toast.success(

`${product.name} Added To Cart`

);



}}


className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl flex items-center gap-3"


>


<FaShoppingCart/>

Add To Cart


</button>







</div>







</div>


</div>


</section>


);


}



export default ProductDetails;