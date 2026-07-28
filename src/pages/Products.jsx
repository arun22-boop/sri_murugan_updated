import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaShoppingCart,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";

import categoriesData from "../data/categories";
import productsData from "../data/products";


function Products() {


const { addToCart } = useCart();


// Products

const [products,setProducts] = useState([]);



// Search

const [searchTerm,setSearchTerm] = useState("");

const [selectedCategory,setSelectedCategory] =
useState("All");



// Quantity

const [quantities,setQuantities] =
useState({});



// Pagination

const [currentPage,setCurrentPage] =
useState(1);


const productsPerPage = 20;





// ==========================
// Load Products
// ==========================

useEffect(()=>{


const loadProducts = ()=>{


const savedProducts =

JSON.parse(
localStorage.getItem("products")
) || [];



if(savedProducts.length > 0){


setProducts(savedProducts);


}

else{


localStorage.setItem(

"products",

JSON.stringify(productsData)

);


setProducts(productsData);


}


};



// Initial Load

loadProducts();



// Listen Admin Changes

window.addEventListener(
"storage",
loadProducts
);



return()=>{


window.removeEventListener(
"storage",
loadProducts
);


};


},[]);









// ==========================
// Filter
// ==========================


const filteredProducts = products.filter(
(product)=>{


const search =
searchTerm.toLowerCase();



const matchesSearch =

product.name
?.toLowerCase()
.includes(search)

||

product.tamilName
?.toLowerCase()
.includes(search);




const matchesCategory =

selectedCategory==="All"

||

product.category === selectedCategory;



return (
matchesSearch &&
matchesCategory
);


}

);









// Pagination


const indexOfLastProduct =
currentPage * productsPerPage;


const indexOfFirstProduct =
indexOfLastProduct - productsPerPage;



const paginatedProducts =
filteredProducts.slice(

indexOfFirstProduct,

indexOfLastProduct

);



const totalPages =
Math.ceil(
filteredProducts.length /
productsPerPage
);









// Quantity Update


const updateQty=(id,qty)=>{


const product =
products.find(
item=>item.id===id
);



if(!product) return;



if(qty < 1)
qty = 1;



if(qty > Number(product.stock))

qty = Number(product.stock);



setQuantities({

...quantities,

[id]:qty

});


};









// Add Cart


const handleAddToCart=(item)=>{


addToCart(

item,

quantities[item.id] || 1

);


};









return(


<section className="bg-gray-100 min-h-screen py-5">


<div className="max-w-8xl mx-auto px-6">





<h1 className="text-4xl font-bold text-center text-blue-900">

Our Products

</h1>



<p className="text-center text-gray-600 mt-3 mb-10">

கட்டுமானத்திற்கு தேவையான அனைத்து பொருட்களும் ஒரே இடத்தில்

</p>







{/* Search */}


<div className="flex justify-center mb-10">


<input


type="text"


placeholder="🔍 Search Products..."


value={searchTerm}


onChange={(e)=>{


setSearchTerm(e.target.value);


setCurrentPage(1);


}}


className="w-full md:w-96 border rounded-xl px-4 py-3 shadow"


/>


</div>









{/* Category */}


<div className="flex flex-wrap justify-center gap-3 mb-10">



<button

onClick={()=>{

setSelectedCategory("All");

setCurrentPage(1);

}}

className={`px-5 py-2 rounded-full ${
selectedCategory==="All"
?
"bg-orange-500 text-white"
:
"bg-white border"
}`}

>

All

</button>





{
categoriesData.map(category=>(


<button


key={category.name}


onClick={()=>{


setSelectedCategory(
category.name
);


setCurrentPage(1);


}}


className={`px-5 py-2 rounded-full ${
selectedCategory===category.name
?
"bg-orange-500 text-white"
:
"bg-white border"
}`}


>


{category.icon} {category.name}


</button>


))

}



</div>









{/* Products */}


<div className="grid grid-cols-2 md:grid-cols-4 gap-8">



{

paginatedProducts.map(item=>(


<div

key={item.id}

className="bg-white rounded-2xl shadow-lg overflow-hidden"


>



<img


src={
item.image ||
"https://via.placeholder.com/200"
}


alt={item.name}


className="w-full h-48 object-contain p-4"


/>





<div className="p-4">



<h2 className="text-lg font-bold text-blue-900">

{item.name}

</h2>



<p className="text-gray-600">

{item.tamilName}

</p>



<p className="mt-2">

<strong>Brand :</strong>
{item.brand}

</p>



<p>

<strong>Unit :</strong>
{item.unit}

</p>



<p className="text-green-600 font-semibold">

✔ Stock : {item.stock}

</p>




<h3 className="text-2xl font-bold text-orange-600 mt-3">

₹ {item.price}

</h3>








{/* Quantity */}


<div className="flex justify-center items-center gap-3 mt-4">


<button


onClick={()=>updateQty(

item.id,

(quantities[item.id] || 1)-1

)}


className="bg-gray-300 w-10 h-10 rounded-lg"


>

<FaMinus/>

</button>




<input


type="number"


value={
quantities[item.id] || 1
}


onChange={(e)=>

updateQty(

item.id,

Number(e.target.value)

)

}


className="w-16 text-center border rounded-lg"


/>





<button


onClick={()=>updateQty(

item.id,

(quantities[item.id] || 1)+1

)}


className="bg-orange-500 text-white w-10 h-10 rounded-lg"


>

<FaPlus/>

</button>



</div>








<div className="grid grid-cols-2 gap-3 mt-5">



<button


onClick={()=>handleAddToCart(item)}


className="bg-green-600 text-white py-3 rounded-lg flex justify-center items-center gap-2"


>

<FaShoppingCart/>

Add

</button>





<Link

to={`/product/${item.id}`}

>


<button

className="w-full bg-orange-500 text-white py-3 rounded-lg"

>

View

</button>


</Link>



</div>




</div>


</div>



))


}


</div>








{/* Pagination */}


<div className="flex justify-center gap-2 mt-12 flex-wrap">



<button

disabled={currentPage===1}

onClick={()=>setCurrentPage(currentPage-1)}

className="px-4 py-2 bg-blue-600 text-white rounded"

>

Previous

</button>





{

Array.from(
{length:totalPages},

(_,index)=>(


<button

key={index}

onClick={()=>setCurrentPage(index+1)}

className={`px-4 py-2 rounded ${
currentPage===index+1
?
"bg-orange-500 text-white"
:
"bg-white border"
}`}

>

{index+1}

</button>


)

)


}






<button

disabled={currentPage===totalPages}

onClick={()=>setCurrentPage(currentPage+1)}

className="px-4 py-2 bg-blue-600 text-white rounded"

>

Next

</button>



</div>





</div>


</section>


);


}


export default Products;