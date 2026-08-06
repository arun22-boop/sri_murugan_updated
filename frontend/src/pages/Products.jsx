import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaShoppingCart,
  FaSearch
} from "react-icons/fa";

import toast from "react-hot-toast";

import { useCart } from "../context/CartContext";


function Products() {


const { addToCart } = useCart();


const [products,setProducts] = useState([]);

const [loading,setLoading] = useState(true);

const [search,setSearch] = useState("");

const [category,setCategory] = useState("All");





// ==========================
// GET PRODUCTS FROM BACKEND
// ==========================

useEffect(()=>{


const getProducts = async()=>{


try{


const res = await fetch(

"https://YOUR-BACKEND-URL.onrender.com/api/products"

);



if(!res.ok){

throw new Error("API Error");

}



const data = await res.json();



console.log(
"Products:",
data
);



setProducts(data);



}


catch(error){


console.log(error);


toast.error(
"Product Loading Failed"
);


}


finally{


setLoading(false);


}



};


getProducts();



},[]);








if(loading){


return(

<div className="text-center py-20 text-xl">

Loading Products...

</div>

);


}









// CATEGORY LIST

const categories = [

"All",

...new Set(

products.map(

item=>item.category

)

)

];









// SEARCH + FILTER

const filteredProducts = products.filter(product=>{


const text = search.toLowerCase();



const searchMatch =

product.name
?.toLowerCase()
.includes(text)

||

product.tamilName
?.toLowerCase()
.includes(text);



const categoryMatch =

category==="All"

||

product.category===category;



return searchMatch && categoryMatch;



});









return(


<section className="bg-gray-50 min-h-screen py-10 px-6">


<div className="max-w-7xl mx-auto">





<h1 className="text-4xl font-bold text-center mb-10">

Sri Murugan Agency Products

</h1>








{/* SEARCH */}

<div className="flex flex-col md:flex-row gap-5 mb-8">



<div className="bg-white flex items-center px-4 rounded-xl shadow flex-1">


<FaSearch className="text-gray-400"/>



<input

type="text"

placeholder="Search Product"

className="p-3 w-full outline-none"

value={search}

onChange={(e)=>

setSearch(e.target.value)

}

/>


</div>







{/* CATEGORY */}


<select

className="p-3 rounded-xl shadow"

value={category}

onChange={(e)=>

setCategory(e.target.value)

}

>


{

categories.map(cat=>(


<option

key={cat}

value={cat}

>

{cat}

</option>


))

}


</select>




</div>









{/* PRODUCTS */}


<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">



{

filteredProducts.map(product=>(



<div

key={product._id}

className="bg-white rounded-2xl shadow p-5"

>







<Link

to={`/product/${product._id}`}

>



<img

src={

product.image

?

product.image

:

"/images/no-image.png"

}

alt={product.name}

className="h-52 w-full object-contain"

/>



</Link>









<h2 className="font-bold text-xl mt-4">

{product.name}

</h2>





<p className="text-gray-600">

{product.tamilName}

</p>







<p className="text-orange-600 text-2xl font-bold mt-3">

₹ {product.price}

</p>









<button


onClick={()=>{


addToCart(product,1);



toast.success(

`${product.name} Added`

);



}}



className="mt-5 bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded-xl flex justify-center items-center gap-2"


>


<FaShoppingCart/>

Add Cart


</button>









<Link


to={`/product/${product._id}`}


className="block text-center mt-4 text-blue-600"


>


View Details


</Link>









</div>



))


}





</div>









{

filteredProducts.length===0 &&


<div className="text-center py-20 text-xl">


No Products Found


</div>


}



</div>


</section>


);


}



export default Products;