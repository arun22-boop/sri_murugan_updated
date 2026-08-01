import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useCart } from "../context/CartContext";


function Checkout(){


    const { cartItems, clearCart } = useCart();


    const navigate = useNavigate();



    const [customer,setCustomer] = useState({

        name:"",
        mobile:"",
        address:""

    });





    const totalAmount = cartItems.reduce(

        (total,item)=>

        total + (item.price * item.quantity),

        0

    );








    const handleChange=(e)=>{


        setCustomer({

            ...customer,

            [e.target.name]:e.target.value

        });


    };







    const placeOrder = async(e)=>{


        e.preventDefault();




        if(cartItems.length===0){

            toast.error("Cart is Empty");

            return;

        }






        const orderData={


            customerName:customer.name,


            mobile:customer.mobile,


            address:customer.address,



            products:


            cartItems.map(item=>(


                {

                    productId:item._id || item.id,

                    name:item.name,

                    price:item.price,

                    quantity:item.quantity,

                    image:item.image

                }


            )),



            totalAmount,


            paymentMethod:"Cash On Delivery"


        };







        try{


            const response = await fetch(

                "http://localhost:5000/api/orders",

                {

                    method:"POST",


                    headers:{

                        "Content-Type":"application/json"

                    },


                    body:JSON.stringify(orderData)


                }

            );




            const data = await response.json();




            if(response.ok){


                toast.success(

                    "Order Placed Successfully"

                );


                clearCart();



                navigate("/order-success");


            }

            else{


                toast.error(

                    data.message || "Order Failed"

                );


            }





        }

        catch(error){


            console.log(error);


            toast.error(

                "Server Error"

            );


        }





    };









    return(


        <section className="bg-gray-50 min-h-screen py-10 px-6">



            <div className="max-w-5xl mx-auto bg-white shadow rounded-2xl p-8">



                <h1 className="text-3xl font-bold mb-8">

                    Checkout

                </h1>





                <div className="grid md:grid-cols-2 gap-10">



                    {/* CUSTOMER FORM */}


                    <form

                    onSubmit={placeOrder}

                    className="space-y-5"

                    >



                        <input

                        name="name"

                        placeholder="Customer Name"

                        value={customer.name}

                        onChange={handleChange}

                        className="w-full border p-3 rounded"

                        required

                        />





                        <input

                        name="mobile"

                        placeholder="Mobile Number"

                        value={customer.mobile}

                        onChange={handleChange}

                        className="w-full border p-3 rounded"

                        required

                        />





                        <textarea

                        name="address"

                        placeholder="Address"

                        value={customer.address}

                        onChange={handleChange}

                        className="w-full border p-3 rounded"

                        required

                        />






                        <button

                        className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold"

                        >

                            Place Order

                        </button>




                    </form>







                    {/* ORDER SUMMARY */}


                    <div>


                        <h2 className="text-xl font-bold mb-5">

                            Order Summary

                        </h2>





                        {

                        cartItems.map(item=>(


                            <div

                            key={item._id || item.id}

                            className="flex justify-between border-b py-3"

                            >


                                <span>

                                    {item.name}

                                    x {item.quantity}

                                </span>


                                <span>

                                    ₹ {item.price * item.quantity}

                                </span>



                            </div>


                        ))

                        }







                        <h2 className="text-2xl font-bold mt-6 text-orange-600">

                            Total : ₹ {totalAmount}

                        </h2>




                    </div>




                </div>



            </div>


        </section>


    );


}


export default Checkout;