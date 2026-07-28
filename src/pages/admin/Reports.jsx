import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
  FaFilePdf,
  FaSearch
} from "react-icons/fa";


function Reports(){


const [orders,setOrders] = useState([]);

const [search,setSearch] = useState("");

const [fromDate,setFromDate] = useState("");

const [toDate,setToDate] = useState("");





// Load Orders


useEffect(()=>{


const data =

JSON.parse(
localStorage.getItem("orders")
) || [];


setOrders(data);


},[]);







// Date Filter


const filteredOrders = orders.filter(order=>{


if(!fromDate && !toDate)
return true;



const orderDate =

new Date(order.date);



const from =

fromDate
?
new Date(fromDate)
:
null;



const to =

toDate
?
new Date(toDate)
:
null;




return (

(!from || orderDate >= from)

&&

(!to || orderDate <= to)

);



});










// Search


const finalOrders = filteredOrders.filter(order=>


order.customerName
?.toLowerCase()
.includes(
search.toLowerCase()
)


);










// Sales


const totalSales =

finalOrders.reduce(

(sum,item)=>

sum + Number(item.total || 0),

0

);







const pending =

finalOrders.filter(

item=>item.status==="Pending"

).length;






const delivered =

finalOrders.filter(

item=>item.status==="Delivered"

).length;







const cancelled =

finalOrders.filter(

item=>item.status==="Cancelled"

).length;









// Product Summary


const productSales={};



finalOrders.forEach(order=>{


order.products?.forEach(item=>{


if(!productSales[item.name]){


productSales[item.name]={

qty:0,

amount:0

};


}



productSales[item.name].qty +=

Number(item.qty);



productSales[item.name].amount +=

Number(item.price) *
Number(item.qty);



});


});





const productData =

Object.keys(productSales).map(name=>({


name:name,


qty:productSales[name].qty,


amount:productSales[name].amount


}));









// PDF Report


const downloadPDF=()=>{


const doc = new jsPDF();



doc.setFontSize(18);

doc.text(

"SRI MURUGAN AGENCY",

14,

20

);



doc.setFontSize(12);


doc.text(

"Sales Report",

14,

30

);



doc.text(

`Total Orders : ${finalOrders.length}`,

14,

40

);



doc.text(

`Total Sales : ₹ ${totalSales}`,

14,

48

);





autoTable(doc,{


startY:60,


head:[

[
"Product",
"Qty",
"Amount"
]

],



body:

productData.map(item=>[

item.name,

item.qty,

`₹ ${item.amount}`

])


});





doc.save(

"Sales-Report.pdf"

);


};











return(


<div className="p-6">



<h1 className="text-3xl font-bold mb-2">

Reports

</h1>


<p className="text-gray-500 mb-8">

Sri Murugan Agency Sales Report

</p>









{/* Summary Cards */}


<div className="grid md:grid-cols-4 gap-6 mb-8">



<div className="bg-blue-600 text-white p-6 rounded-xl">

<h3 className="font-bold">

Total Orders

</h3>

<p className="text-4xl mt-3">

{finalOrders.length}

</p>

</div>





<div className="bg-green-600 text-white p-6 rounded-xl">

<h3 className="font-bold">

Total Sales

</h3>

<p className="text-3xl mt-3">

₹ {totalSales}

</p>

</div>





<div className="bg-yellow-500 text-white p-6 rounded-xl">

<h3 className="font-bold">

Pending

</h3>

<p className="text-4xl mt-3">

{pending}

</p>

</div>





<div className="bg-purple-600 text-white p-6 rounded-xl">

<h3 className="font-bold">

Delivered

</h3>

<p className="text-4xl mt-3">

{delivered}

</p>

</div>



</div>









{/* Filters */}


<div className="flex flex-wrap gap-4 mb-8">


<div className="flex items-center border rounded-lg px-3">

<FaSearch/>


<input

placeholder="Search Customer"

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="p-3 outline-none"

/>


</div>




<input

type="date"

value={fromDate}

onChange={(e)=>setFromDate(e.target.value)}

className="border p-3 rounded"

/>



<input

type="date"

value={toDate}

onChange={(e)=>setToDate(e.target.value)}

className="border p-3 rounded"

/>






<button

onClick={downloadPDF}

className="bg-red-600 text-white px-5 py-3 rounded flex items-center gap-2"

>

<FaFilePdf/>

Download PDF

</button>



</div>









{/* Product Sales Table */}


<div className="bg-white shadow rounded-xl p-6">


<h2 className="text-2xl font-bold mb-5">

Product Sales Summary

</h2>



<table className="w-full border">


<thead className="bg-gray-100">

<tr>


<th className="border p-3">

Product

</th>


<th className="border p-3">

Quantity

</th>


<th className="border p-3">

Amount

</th>


</tr>


</thead>



<tbody>


{

productData.length===0 ?


<tr>

<td

colSpan="3"

className="text-center p-5"

>

No Sales Data

</td>

</tr>



:


productData.map(item=>(


<tr key={item.name}>


<td className="border p-3">

{item.name}

</td>



<td className="border p-3">

{item.qty}

</td>



<td className="border p-3">

₹ {item.amount}

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