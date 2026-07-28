import { useEffect, useState } from "react";
import {
  FaBox,
  FaShoppingCart,
  FaMoneyBill,
  FaClock,
  FaCheckCircle
} from "react-icons/fa";


function Dashboard(){


const [products,setProducts] = useState([]);

const [orders,setOrders] = useState([]);





useEffect(()=>{


const productData =

JSON.parse(
localStorage.getItem("products")
) || [];



const orderData =

JSON.parse(
localStorage.getItem("orders")
) || [];



setProducts(productData);

setOrders(orderData);



},[]);







// Total Sales


const totalSales =

orders.reduce(

(sum,order)=>

sum + Number(order.total || 0),

0

);








// Pending Orders


const pendingOrders =

orders.filter(

order =>

order.status === "Pending"

).length;








// Delivered Orders


const deliveredOrders =

orders.filter(

order =>

order.status === "Delivered"

).length;







return(


<div className="p-6">



<h1 className="text-4xl font-bold mb-2">

Dashboard

</h1>


<p className="text-gray-500 mb-8">

Sri Murugan Agency Admin

</p>









{/* Cards */}


<div className="grid md:grid-cols-5 gap-6">







<div className="bg-blue-600 text-white rounded-2xl p-6 shadow">


<div className="flex justify-between">

<h3 className="text-xl font-bold">

Products

</h3>

<FaBox size={30}/>

</div>


<p className="text-4xl font-bold mt-5">

{products.length}

</p>


</div>








<div className="bg-green-600 text-white rounded-2xl p-6 shadow">


<div className="flex justify-between">

<h3 className="text-xl font-bold">

Orders

</h3>

<FaShoppingCart size={30}/>

</div>


<p className="text-4xl font-bold mt-5">

{orders.length}

</p>


</div>








<div className="bg-orange-500 text-white rounded-2xl p-6 shadow">


<div className="flex justify-between">

<h3 className="text-xl font-bold">

Sales

</h3>

<FaMoneyBill size={30}/>

</div>


<p className="text-3xl font-bold mt-5">

₹ {totalSales}

</p>


</div>








<div className="bg-yellow-500 text-white rounded-2xl p-6 shadow">


<div className="flex justify-between">

<h3 className="text-xl font-bold">

Pending

</h3>

<FaClock size={30}/>

</div>


<p className="text-4xl font-bold mt-5">

{pendingOrders}

</p>


</div>








<div className="bg-purple-600 text-white rounded-2xl p-6 shadow">


<div className="flex justify-between">

<h3 className="text-xl font-bold">

Delivered

</h3>

<FaCheckCircle size={30}/>

</div>


<p className="text-4xl font-bold mt-5">

{deliveredOrders}

</p>


</div>






</div>









{/* Recent Orders */}



<div className="mt-12 bg-white rounded-2xl shadow p-6">



<h2 className="text-3xl font-bold mb-6">

Recent Orders

</h2>






<div className="overflow-x-auto">


<table className="w-full border">



<thead className="bg-gray-100">


<tr>


<th className="border p-3">

Order ID

</th>


<th className="border p-3">

Customer

</th>


<th className="border p-3">

Phone

</th>


<th className="border p-3">

Amount

</th>


<th className="border p-3">

Status

</th>


</tr>


</thead>







<tbody>



{

orders.length === 0 ?


<tr>

<td

colSpan="5"

className="text-center p-5"

>

No Orders Found

</td>

</tr>



:


orders.slice(0,5).map(order=>(


<tr key={order.id}>


<td className="border p-3">

#{order.id}

</td>



<td className="border p-3">

{order.customerName}

</td>



<td className="border p-3">

{order.phone}

</td>



<td className="border p-3">

₹ {order.total}

</td>



<td className="border p-3">


<span className="bg-orange-100 px-3 py-1 rounded">

{order.status}

</span>


</td>



</tr>


))


}



</tbody>


</table>


</div>



</div>






</div>


);


}


export default Dashboard;