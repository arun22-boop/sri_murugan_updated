import { useEffect, useState } from "react";
import { FaSearch, FaTrash, FaEye } from "react-icons/fa";
import toast from "react-hot-toast";


function Orders() {


const [orders,setOrders] = useState([]);

const [search,setSearch] = useState("");

const [selectedOrder,setSelectedOrder] = useState(null);





// Load Orders

useEffect(()=>{


const savedOrders =
JSON.parse(localStorage.getItem("orders")) || [];


setOrders(savedOrders);


},[]);







// Status Change

const changeStatus=(id,status)=>{


const updatedOrders = orders.map(order=>

order.id === id

?

{
...order,
status:status
}

:

order

);



setOrders(updatedOrders);


localStorage.setItem(

"orders",

JSON.stringify(updatedOrders)

);


toast.success("Status Updated");


};







// Delete Order

const deleteOrder=(id)=>{


if(window.confirm("Delete this order?")){


const updatedOrders =
orders.filter(
order=>order.id!==id
);



setOrders(updatedOrders);


localStorage.setItem(

"orders",

JSON.stringify(updatedOrders)

);



toast.success("Order Deleted");


}


};








// Search

const filteredOrders = orders.filter(order=>


order.customerName
?.toLowerCase()
.includes(search.toLowerCase())


||

order.phone
?.includes(search)


);







return(


<div className="p-6">



<h1 className="text-3xl font-bold mb-2">
Orders
</h1>


<p className="text-gray-500 mb-8">
Sri Murugan Agency
</p>





{/* Search */}

<div className="flex items-center border rounded-lg px-3 w-full md:w-96 mb-6">


<FaSearch/>


<input

placeholder="Search orders..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="p-3 outline-none w-full"

/>


</div>








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
Products
</th>


<th className="border p-3">
Amount
</th>


<th className="border p-3">
Status
</th>


<th className="border p-3">
Action
</th>


</tr>


</thead>







<tbody>



{
filteredOrders.length===0 ?


<tr>

<td
colSpan="7"
className="text-center p-5"
>

No Orders Found

</td>

</tr>



:


filteredOrders.map(order=>(


<tr key={order.id}>


<td className="border p-3">

{order.id}

</td>





<td className="border p-3">


<p className="font-bold">
{order.customerName}
</p>


<p className="text-sm">
{order.deliveryType}
</p>


</td>





<td className="border p-3">

{order.phone}

</td>







<td className="border p-3">


{
order.products?.map((item,index)=>(


<div
key={index}
className="mb-2"
>


<p className="font-semibold">

{item.name}

</p>


<p>

Qty : {item.quantity}

</p>


</div>


))

}


</td>







<td className="border p-3 font-bold text-green-600">

₹ {order.total}

</td>








<td className="border p-3">


<select

value={order.status}

onChange={(e)=>
changeStatus(
order.id,
e.target.value
)
}

className="border p-2 rounded"

>


<option>
Pending
</option>


<option>
Confirmed
</option>


<option>
Delivered
</option>


<option>
Cancelled
</option>


</select>



</td>









<td className="border p-3">


<div className="flex gap-2">



<button

onClick={()=>setSelectedOrder(order)}

className="bg-blue-600 text-white p-2 rounded"

>

<FaEye/>

</button>






<button

onClick={()=>deleteOrder(order.id)}

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









{/* Order View Modal */}


{
selectedOrder &&

<div className="fixed inset-0 bg-black/50 flex items-center justify-center">


<div className="bg-white rounded-xl p-6 w-96">


<h2 className="text-2xl font-bold mb-4">

Order Details

</h2>


<p>
Name : {selectedOrder.customerName}
</p>


<p>
Phone : {selectedOrder.phone}
</p>


<p>
Address : {selectedOrder.address}
</p>



<hr className="my-4"/>



{
selectedOrder.products?.map(
(item,index)=>(

<div key={index}>

{item.name}

-
{item.quantity}

</div>

)

)
}




<h3 className="text-xl font-bold mt-4">

Total : ₹ {selectedOrder.total}

</h3>




<button

onClick={()=>setSelectedOrder(null)}

className="mt-5 bg-gray-700 text-white px-5 py-2 rounded"

>

Close

</button>


</div>


</div>


}



</div>


)


}


export default Orders;