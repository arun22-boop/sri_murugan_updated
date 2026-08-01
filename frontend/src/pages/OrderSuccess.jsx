import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";


function OrderSuccess(){


    return(


        <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">


            <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md">


                <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-5"/>


                <h1 className="text-3xl font-bold mb-4">

                    Order Placed Successfully

                </h1>



                <p className="text-gray-600 mb-8">

                    உங்கள் ஆர்டர் வெற்றிகரமாக பதிவு செய்யப்பட்டுள்ளது.

                    விரைவில் உங்களை தொடர்பு கொள்கிறோம்.

                </p>




                <Link

                to="/products"

                className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold"

                >

                    Continue Shopping

                </Link>



            </div>


        </section>


    );


}


export default OrderSuccess;