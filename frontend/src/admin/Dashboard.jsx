import { useEffect, useState } from "react";

import {
  FaShoppingCart,
  FaMoneyBillWave,
  FaClock,
  FaBox
} from "react-icons/fa";



function Dashboard(){


const [orders,setOrders] = useState([]);





useEffect(()=>{


const getOrders = async()=>{


try{


const res = await fetch(

"http://localhost:5000/api/orders"

);


const data = await res.json();


setOrders(data);



}

catch(err){

console.log(err);

}



};


getOrders();


},[]);








const totalOrders = orders.length;




const totalSales = orders.reduce(

(total,order)=>

total + Number(order.totalAmount || 0),

0

);





const pendingOrders = orders.filter(

order => order.orderStatus==="Pending"

).length;








return (


<div className="p-6">





<h1 className="text-4xl font-bold mb-8">

Admin Dashboard

</h1>







<div className="grid md:grid-cols-4 gap-6">







<div className="bg-white shadow rounded-2xl p-6">


<div className="flex items-center gap-4">


<FaShoppingCart

className="text-blue-600"

size={35}

/>


<div>


<p className="text-gray-500">

Total Orders

</p>


<h2 className="text-3xl font-bold">

{totalOrders}

</h2>


</div>


</div>


</div>









<div className="bg-white shadow rounded-2xl p-6">


<div className="flex items-center gap-4">


<FaMoneyBillWave

className="text-green-600"

size={35}

/>



<div>


<p className="text-gray-500">

Total Sales

</p>


<h2 className="text-3xl font-bold">

₹ {totalSales}

</h2>


</div>


</div>


</div>









<div className="bg-white shadow rounded-2xl p-6">


<div className="flex items-center gap-4">


<FaClock

className="text-orange-600"

size={35}

/>



<div>


<p className="text-gray-500">

Pending Orders

</p>


<h2 className="text-3xl font-bold">

{pendingOrders}

</h2>


</div>


</div>


</div>









<div className="bg-white shadow rounded-2xl p-6">


<div className="flex items-center gap-4">


<FaBox

className="text-purple-600"

size={35}

/>



<div>


<p className="text-gray-500">

Products

</p>


<h2 className="text-3xl font-bold">

--

</h2>


</div>


</div>


</div>







</div>









<div className="mt-10 bg-white shadow rounded-2xl p-6">


<h2 className="text-2xl font-bold mb-5">

Recent Orders

</h2>







{

orders.slice(0,5).map(order=>(


<div

key={order._id}

className="flex justify-between border-b py-3"

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


<p className="font-bold">

₹ {order.totalAmount}

</p>


<p className="text-orange-600">

{order.orderStatus}

</p>


</div>





</div>



))


}







{

orders.length===0 &&

<p className="text-gray-500">

No Orders Yet

</p>

}



</div>






</div>


);


}


export default Dashboard;