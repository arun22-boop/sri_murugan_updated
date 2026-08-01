import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaTrash,
  FaWhatsapp,
  FaEye,
  FaFilePdf
} from "react-icons/fa";

import toast from "react-hot-toast";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";



function Orders(){


const [orders,setOrders]=useState([]);

const [loading,setLoading]=useState(true);

const [selectedOrder,setSelectedOrder]=useState(null);




// GET ORDERS

const getOrders = async()=>{


try{


const res = await axios.get(

"http://localhost:5000/api/orders"

);


setOrders(res.data);


}

catch(error){

console.log(error);

toast.error(
"Order loading failed"
);

}

finally{

setLoading(false);

}


};





useEffect(()=>{

getOrders();

},[]);







// UPDATE STATUS

const updateStatus = async(id,status)=>{


try{


await axios.put(

`http://localhost:5000/api/orders/${id}`,

{
status
}

);


toast.success(
"Status Updated"
);


getOrders();


}

catch(error){

toast.error(
"Update failed"
);

}


};







// DELETE ORDER

const deleteOrder = async(id)=>{


if(!window.confirm(
"Delete this order?"
))
return;



try{


await axios.delete(

`http://localhost:5000/api/orders/${id}`

);



toast.success(
"Order Deleted"
);



getOrders();



}

catch(error){

toast.error(
"Delete failed"
);

}


};









// WHATSAPP

const whatsapp=(order)=>{


const message = `

Sri Murugan Agency

Hello ${order.customerName}

Your Order:

${order.products.map(
item =>
`${item.name} x ${item.quantity}`
).join("\n")}


Total Amount:
₹${order.totalAmount}


Thank You

`;



window.open(

"https://wa.me/91"+

order.phone+

"?text="+

encodeURIComponent(message),

"_blank"

);


};










// PDF INVOICE


const downloadInvoice=(order)=>{


const doc = new jsPDF();



doc.setFontSize(18);

doc.text(

"SRI MURUGAN AGENCY",

14,

20

);



doc.setFontSize(12);


doc.text(

"Construction Materials",

14,

28

);



doc.text(

`Customer : ${order.customerName}`,

14,

40

);



doc.text(

`Mobile : ${order.phone}`,

14,

48

);



doc.text(

`Address : ${order.address}`,

14,

56

);



doc.text(

`Date : ${new Date(order.createdAt).toLocaleDateString()}`,

14,

64

);





autoTable(doc,{

startY:75,


head:[

[
"Product",
"Qty",
"Price"
]

],


body:

order.products.map(item=>[

item.name,

item.quantity,

`Rs ${item.price}`

])


});





doc.text(

`Total Amount : Rs ${order.totalAmount}`,

14,

doc.lastAutoTable.finalY + 15

);





doc.save(

`Invoice-${order._id}.pdf`

);


};









if(loading){

return(

<div className="p-6 text-xl">

Loading Orders...

</div>

);

}








return(


<div className="p-6">


<h1 className="text-3xl font-bold mb-6">

Orders

</h1>






<div className="overflow-x-auto">


<table className="w-full border">


<thead className="bg-gray-100">


<tr>


<th className="border p-3">
Customer
</th>


<th className="border p-3">
Mobile
</th>


<th className="border p-3">
Address
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

orders.map(order=>(


<tr key={order._id}>


<td className="border p-3">

{order.customerName}

</td>



<td className="border p-3">

{order.phone}

</td>




<td className="border p-3">

{order.address}

</td>






<td className="border p-3">


{

order.products.map(

(item,index)=>(


<div key={index}>

{item.name}

×

{item.quantity}

</div>


)

)

}


</td>






<td className="border p-3">

₹{order.totalAmount}

</td>







<td className="border p-3">


<select

value={order.status}

onChange={(e)=>

updateStatus(

order._id,

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

className="bg-blue-500 text-white p-2 rounded"

>

<FaEye/>

</button>






<button

onClick={()=>whatsapp(order)}

className="bg-green-600 text-white p-2 rounded"

>

<FaWhatsapp/>

</button>







<button

onClick={()=>downloadInvoice(order)}

className="bg-purple-600 text-white p-2 rounded"

>

<FaFilePdf/>

</button>







<button

onClick={()=>deleteOrder(order._id)}

className="bg-red-500 text-white p-2 rounded"

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








{

selectedOrder &&


<div className="fixed inset-0 bg-black/50 flex items-center justify-center">


<div className="bg-white p-6 rounded w-96">


<h2 className="text-xl font-bold">

Order Details

</h2>



<p>
Name : {selectedOrder.customerName}
</p>


<p>
Phone : {selectedOrder.phone}
</p>


<p>
Amount : ₹{selectedOrder.totalAmount}
</p>




<button

onClick={()=>setSelectedOrder(null)}

className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"

>

Close

</button>


</div>


</div>


}



</div>


);


}


export default Orders;