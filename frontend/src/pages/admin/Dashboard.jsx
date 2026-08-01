import { useEffect, useState } from "react";
import axios from "axios";

import {
FaBox,
FaShoppingCart,
FaClock,
FaMoneyBillWave
} from "react-icons/fa";



function Dashboard(){


const [products,setProducts] = useState([]);

const [orders,setOrders] = useState([]);





useEffect(()=>{


loadDashboard();


},[]);






const loadDashboard = async()=>{


try{


const productRes = await axios.get(

"http://localhost:5000/api/products"

);



const orderRes = await axios.get(

"http://localhost:5000/api/orders"

);




setProducts(
productRes.data
);



setOrders(
orderRes.data
);



}

catch(error){


console.log(error);


}


};







const pendingOrders = orders.filter(

item=>

item.orderStatus==="Pending"

).length;





const deliveredOrders = orders.filter(

item=>

item.orderStatus==="Delivered"

).length;








const totalSales = orders.reduce(

(sum,item)=>

sum + Number(item.totalAmount),

0

);







return(


<div className="p-6">





<h1 className="text-3xl font-bold mb-8">

Admin Dashboard

</h1>







<div className="grid md:grid-cols-4 gap-6">







<div className="bg-blue-100 p-6 rounded-xl flex items-center gap-4">


<FaBox

size={40}

className="text-blue-600"

/>


<div>


<p className="text-gray-600">

Products

</p>


<h2 className="text-3xl font-bold">

{products.length}

</h2>


</div>


</div>









<div className="bg-green-100 p-6 rounded-xl flex items-center gap-4">


<FaShoppingCart

size={40}

className="text-green-600"

/>


<div>


<p className="text-gray-600">

Orders

</p>


<h2 className="text-3xl font-bold">

{orders.length}

</h2>


</div>


</div>









<div className="bg-yellow-100 p-6 rounded-xl flex items-center gap-4">


<FaClock

size={40}

className="text-yellow-600"

/>


<div>


<p className="text-gray-600">

Pending

</p>


<h2 className="text-3xl font-bold">

{pendingOrders}

</h2>


</div>


</div>









<div className="bg-purple-100 p-6 rounded-xl flex items-center gap-4">


<FaMoneyBillWave

size={40}

className="text-purple-600"

/>


<div>


<p className="text-gray-600">

Sales

</p>


<h2 className="text-3xl font-bold">

₹ {totalSales}

</h2>


</div>


</div>






</div>









<div className="mt-10 bg-white shadow rounded-xl p-6">


<h2 className="text-2xl font-bold mb-4">

Recent Orders

</h2>





{

orders.slice(0,5).map(order=>(


<div

key={order._id}

className="border-b py-3 flex justify-between"

>


<div>


<p className="font-bold">

{order.customerName}

</p>


<p className="text-gray-500">

{order.phone}

</p>


</div>




<div>


<p>

₹ {order.totalAmount}

</p>


<span className="text-sm">

{order.orderStatus}

</span>


</div>



</div>


))


}







</div>







</div>


);


}


export default Dashboard;