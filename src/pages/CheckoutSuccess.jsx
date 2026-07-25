import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaHome,
  FaWhatsapp,
  FaShoppingBag,
} from "react-icons/fa";

function CheckoutSuccess() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center">

        {/* Success Icon */}
        <div className="flex justify-center">
          <FaCheckCircle
            className="text-green-500"
            size={90}
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-green-600 mt-6">
          Order Sent Successfully!
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          Thank you for choosing
        </p>

        <h2 className="text-2xl font-bold text-orange-600 mt-2">
          Sri Murugan Agency
        </h2>

        <p className="text-gray-500 mt-5 leading-7">
          Your enquiry has been sent successfully via WhatsApp.
          <br />
          Our team will contact you shortly with the quotation.
        </p>

        {/* Buttons */}
        <div className="mt-10 space-y-4">

          <Link
            to="/products"
            className="w-full flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"
          >
            <FaShoppingBag />
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
          >
            <FaHome />
            Back to Home
          </Link>

          <a
            href="https://wa.me/919095932878"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}

export default CheckoutSuccess;