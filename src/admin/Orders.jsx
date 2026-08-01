import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import {
    FaTrash,
    FaEye
} from "react-icons/fa";



function Orders(){


    const [orders,setOrders] = useState([]);

    const [loading,setLoading] = useState(true);





    // GET ORDERS

    const getOrders = async()=>{


        try{


            const res = await axios.get(

                "http://localhost:5000/api/orders"

            );


            setOrders(res.data);


            setLoading(false);



        }

        catch(error){


            console.log(error);


            toast.error(

                "Orders Load Failed"

            );


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


            console.log(error);


            toast.error(

                "Update Failed"

            );


        }


    };









    // DELETE ORDER

    const deleteOrder = async(id)=>{


        const confirmDelete = window.confirm(

            "Delete this order?"

        );


        if(!confirmDelete) return;



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


            console.log(error);


            toast.error(

                "Delete Failed"

            );


        }


    };








    if(loading){


        return(

            <div className="text-center py-20 text-xl">

                Loading Orders...

            </div>

        );


    }








    return(


        <div className="p-6">



            <h1 className="text-3xl font-bold mb-8">

                Customer Orders

            </h1>







            <div className="overflow-x-auto bg-white shadow rounded-xl">



                <table className="w-full">



                    <thead className="bg-gray-100">


                        <tr>


                            <th className="p-4 text-left">
                                Customer
                            </th>


                            <th className="p-4 text-left">
                                Mobile
                            </th>


                            <th className="p-4">
                                Amount
                            </th>


                            <th className="p-4">
                                Status
                            </th>


                            <th className="p-4">
                                Action
                            </th>


                        </tr>


                    </thead>







                    <tbody>


                    {

                    orders.map(order=>(


                        <tr

                        key={order._id}

                        className="border-b"

                        >



                            <td className="p-4">


                                <b>

                                {order.customerName}

                                </b>


                                <br/>

                                {order.address}


                            </td>






                            <td className="p-4">


                                {order.mobile}


                            </td>








                            <td className="p-4 font-bold text-orange-600">


                                ₹ {order.totalAmount}


                            </td>









                            <td className="p-4">


                                <select


                                value={order.status}


                                onChange={(e)=>

                                    updateStatus(

                                        order._id,

                                        e.target.value

                                    )

                                }


                                className="border rounded p-2"

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









                            <td className="p-4 flex gap-4">



                                <button

                                className="text-blue-600"

                                title="View"

                                >

                                    <FaEye/>

                                </button>





                                <button

                                onClick={()=>deleteOrder(order._id)}

                                className="text-red-600"

                                title="Delete"

                                >

                                    <FaTrash/>

                                </button>



                            </td>





                        </tr>


                    ))


                    }



                    </tbody>




                </table>



            </div>






            {

            orders.length===0 &&

            (

                <div className="text-center py-10 text-xl">

                    No Orders Found

                </div>

            )

            }



        </div>


    );


}



export default Orders;