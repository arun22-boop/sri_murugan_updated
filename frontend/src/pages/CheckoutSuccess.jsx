import { Link, useLocation } from "react-router-dom";

import {
  FaCheckCircle,
  FaHome,
  FaWhatsapp,
  FaShoppingBag,
  FaReceipt
} from "react-icons/fa";


function CheckoutSuccess(){


const location = useLocation();


const order = location.state?.order;





const whatsappMessage = order

?

`Sri Murugan Agency Order


Order ID:
${order._id}


Customer:
${order.customerName}


Phone:
${order.phone}


Address:
${order.address}


Products:

${order.products
.map(
(item)=>
`${item.name} x ${item.quantity}`
)
.join("\n")
}



Total:
₹${order.totalAmount}


Order Status:
${order.status}



Thank you`

:

"Hello Sri Murugan Agency";






const whatsappURL =

`https://wa.me/919095932878?text=${encodeURIComponent(
whatsappMessage
)}`;









return(


<section className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-6">



<div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center">






{/* SUCCESS ICON */}


<div className="flex justify-center">


<FaCheckCircle

className="text-green-500"

size={90}

/>


</div>









<h1 className="text-4xl font-bold text-green-600 mt-6">


Order Placed Successfully!


</h1>








<p className="text-gray-600 mt-4 text-lg">


Thank you for choosing


</p>








<h2 className="text-2xl font-bold text-orange-600 mt-2">


Sri Murugan Agency


</h2>









{

order &&


<div className="bg-gray-100 rounded-xl p-5 mt-6 text-left">





<p className="flex items-center gap-2 font-bold">


<FaReceipt/>

Order ID


</p>



<p className="text-sm text-gray-600 break-all">


{order._id}


</p>







<p className="mt-4">


<strong>
Customer :
</strong>


{" "}

{order.customerName}


</p>







<p>


<strong>
Phone :
</strong>


{" "}

{order.phone}


</p>







<p>


<strong>
Total :
</strong>


<span className="text-green-600 font-bold">


₹ {order.totalAmount}


</span>


</p>








<p>


<strong>
Status :
</strong>


<span className="text-orange-600 font-bold">


{" "}

{order.status}


</span>


</p>






</div>


}









<p className="text-gray-500 mt-5 leading-7">


Your order details have been saved successfully.


<br/>


Our team will contact you shortly.


</p>









<div className="mt-10 space-y-4">







<Link

to="/products"

className="w-full flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"

>


<FaShoppingBag/>

Continue Shopping


</Link>









<Link

to="/"

className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"

>


<FaHome/>

Back To Home


</Link>









<a


href={whatsappURL}


target="_blank"


rel="noopener noreferrer"


className="w-full flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"


>


<FaWhatsapp/>


Send Order WhatsApp


</a>







</div>







</div>



</section>


);


}


export default CheckoutSuccess;