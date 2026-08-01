import { useEffect, useState } from "react";
import axios from "axios";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import toast from "react-hot-toast";



function Reports(){


const [orders,setOrders] = useState([]);





useEffect(()=>{

loadOrders();

},[]);





const loadOrders = async()=>{


try{


const res = await axios.get(

"http://localhost:5000/api/orders"

);


setOrders(res.data);


}

catch(error){


console.log(error);


toast.error(
"Report Load Failed"
);


}


};







const totalOrders = orders.length;



const totalSales = orders.reduce(

(sum,item)=>

sum + Number(item.totalAmount),

0

);








// Product Summary


const productSummary = {};



orders.forEach(order=>{


order.items?.forEach(item=>{


if(productSummary[item.name]){


productSummary[item.name] += item.qty;


}

else{


productSummary[item.name] = item.qty;


}


});


});








const downloadPDF = ()=>{


const doc = new jsPDF();



doc.text(

"Sri Murugan Agency Sales Report",

14,

20

);




doc.text(

`Total Orders : ${totalOrders}`,

14,

35

);



doc.text(

`Total Sales : Rs.${totalSales}`,

14,

45

);






const tableData = orders.map(order=>(

[

order.customerName,

order.phone,

order.totalAmount,

order.orderStatus

]

));





autoTable(doc,{

startY:55,

head:[

[

"Customer",

"Phone",

"Amount",

"Status"

]

],


body:tableData


});





doc.save(

"sri-murugan-sales-report.pdf"

);



};










return(


<div className="p-6">





<h1 className="text-3xl font-bold mb-8">

Sales Reports

</h1>







<div className="grid md:grid-cols-3 gap-6 mb-8">





<div className="bg-blue-100 p-6 rounded-xl">

<p>

Total Orders

</p>


<h2 className="text-3xl font-bold">

{totalOrders}

</h2>


</div>







<div className="bg-green-100 p-6 rounded-xl">

<p>

Total Sales

</p>


<h2 className="text-3xl font-bold">

₹ {totalSales}

</h2>


</div>







<div className="bg-orange-100 p-6 rounded-xl">

<p>

Products Sold

</p>


<h2 className="text-3xl font-bold">

{

Object.keys(productSummary).length

}

</h2>


</div>





</div>








<button

onClick={downloadPDF}

className="bg-red-600 text-white px-6 py-3 rounded-lg mb-6"

>


Download PDF Report


</button>









<div className="bg-white shadow rounded-xl p-6">


<h2 className="text-2xl font-bold mb-4">

Order Report

</h2>





<table className="w-full border">


<thead className="bg-gray-100">


<tr>


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

orders.map(order=>(


<tr key={order._id}>


<td className="border p-3">

{order.customerName}

</td>


<td className="border p-3">

{order.phone}

</td>


<td className="border p-3">

₹ {order.totalAmount}

</td>


<td className="border p-3">

{order.orderStatus}

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


export default Reports;