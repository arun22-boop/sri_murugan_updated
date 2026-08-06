import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaSearch
} from "react-icons/fa";

import toast from "react-hot-toast";
import axios from "axios";


const API_URL = "https://YOUR-BACKEND-URL.onrender.com";


function ProductsList(){


const [products,setProducts] = useState([]);

const [search,setSearch] = useState("");

const [category,setCategory] = useState("All");

const [loading,setLoading] = useState(true);





// ======================
// Load Products
// ======================

useEffect(()=>{

loadProducts();

},[]);




const loadProducts = async()=>{


try{


setLoading(true);


const res = await axios.get(`${API_URL}/api/products`);

console.log("API Response:", res.data);

setProducts(res.data);



}
catch(error){


console.log(error);


toast.error(
"Products Load Failed"
);


}
finally{

setLoading(false);

}


};









// ======================
// Delete Product
// ======================

const deleteProduct = async(id)=>{


const confirmDelete = window.confirm(
"Delete this product?"
);



if(!confirmDelete) return;



try{


await axios.delete(

`${API_URL}/api/products/${id}`

);



setProducts(

products.filter(
item=>item._id !== id
)

);



toast.success(
"Product Deleted"
);



}
catch(error){


console.log(error);


toast.error(
"Delete Failed"
);


}



};










// ======================
// Categories
// ======================


const categories=[

"All",

...new Set(

products.map(
item=>item.category
)

)

];









// ======================
// Filter
// ======================


const filteredProducts = products.filter(item=>{


const text =
search.toLowerCase();



const searchMatch =

item.name
?.toLowerCase()
.includes(text)


||

item.brand
?.toLowerCase()
.includes(text)


||

item.tamilName
?.toLowerCase()
.includes(text);





const categoryMatch =

category==="All"

||

item.category===category;




return searchMatch && categoryMatch;



});









return(


<div className="p-6">





{/* Header */}

<div className="flex justify-between items-center mb-8">


<div>


<h1 className="text-3xl font-bold">

Products

</h1>



<p className="text-gray-500">

Sri Murugan Agency

</p>



</div>







<Link

to="/admin/products/add"

className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center gap-2"

>


<FaPlus/>

Add Product


</Link>



</div>









{/* Count */}


<div className="bg-orange-100 p-5 rounded-xl mb-6">


<h2 className="text-xl font-bold">


Total Products :


<span className="text-orange-600">

{" "}

{products.length}

</span>


</h2>


</div>









{/* Search */}


<div className="flex gap-4 mb-6 flex-wrap">



<div className="flex items-center border rounded-lg px-3">


<FaSearch className="text-gray-400"/>



<input

type="text"

placeholder="Search Product..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="p-3 outline-none"

/>


</div>







<select

value={category}

onChange={(e)=>setCategory(e.target.value)}

className="border rounded-lg p-3"

>


{

categories.map(item=>(

<option key={item}>

{item}

</option>

))

}


</select>



</div>









{/* Table */}



<div className="overflow-x-auto">


<table className="w-full border">


<thead className="bg-gray-100">


<tr>


<th className="border p-3">
Image
</th>


<th className="border p-3">
Name
</th>


<th className="border p-3">
Brand
</th>


<th className="border p-3">
Category
</th>


<th className="border p-3">
Price
</th>


<th className="border p-3">
Stock
</th>


<th className="border p-3">
Action
</th>


</tr>


</thead>






<tbody>



{

loading ?


<tr>

<td

colSpan="7"

className="text-center p-5"

>

Loading...

</td>

</tr>



:


filteredProducts.length===0 ?



<tr>

<td

colSpan="7"

className="text-center p-5"

>

No Products Found

</td>

</tr>




:



filteredProducts.map(item=>(


<tr key={item._id}>


<td className="border p-3">


<img


src={

item.image

?

`${API_URL}${item.image}`

:

"https://via.placeholder.com/80"

}


onError={(e)=>

e.currentTarget.src=
"https://via.placeholder.com/80"

}


className="w-16 h-16 object-contain"


/>



</td>







<td className="border p-3">


<div className="font-bold">

{item.name}

</div>


<div className="text-gray-500">

{item.tamilName}

</div>


</td>







<td className="border p-3">

{item.brand}

</td>






<td className="border p-3">

{item.category}

</td>






<td className="border p-3">

₹ {item.price}

</td>







<td className="border p-3">


{

Number(item.stock)<10 ?


<span className="text-red-600 font-bold">

Low Stock ({item.stock})

</span>


:


<span className="text-green-600">

{item.stock}

</span>


}


</td>







<td className="border p-3">


<div className="flex gap-3">


<Link

to={`/admin/products/edit/${item._id}`}

className="bg-green-600 text-white p-2 rounded"

>


<FaEdit/>


</Link>






<button

onClick={()=>deleteProduct(item._id)}

className="bg-red-600 text-white p-2 rounded"

>


<FaTrash/>


</button>



</div>


</td>





</tr>


))


}



</tbody>



</table>



</div>





</div>


);


}


export default ProductsList;