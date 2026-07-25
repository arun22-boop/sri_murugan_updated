import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPlus,
  FaMinus,
  FaTrash,
  FaWhatsapp,
  FaArrowLeft,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";

function Cart() {
  const navigate = useNavigate();

  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
  } = useCart();

  // Customer Details
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Delivery
  const [deliveryType, setDeliveryType] =
    useState("Delivery");

  const [location, setLocation] = useState("");

  // Total Items

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Total Amount

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Order ID

  const generateOrderId = () => {
    const now = new Date();

    const date =
      now.getFullYear().toString() +
      String(now.getMonth() + 1).padStart(2, "0") +
      String(now.getDate()).padStart(2, "0");

    const random =
      Math.floor(1000 + Math.random() * 9000);

    return `SMA-${date}-${random}`;
  };

  const orderId = generateOrderId();

  const orderDate =
    new Date().toLocaleString("en-IN");

  // WhatsApp Message

  const whatsappMessage = `
🏢 *SRI MURUGAN AGENCY*

━━━━━━━━━━━━━━━━━━
🧾 ORDER INFORMATION
━━━━━━━━━━━━━━━━━━

Order ID : ${orderId}

Order Date : ${orderDate}

━━━━━━━━━━━━━━━━━━
👤 CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━

Name : ${name}

Phone : ${phone}

Delivery : ${deliveryType}

Address : ${address}

Location :

${location}

━━━━━━━━━━━━━━━━━━
📦 ORDER DETAILS
━━━━━━━━━━━━━━━━━━

${cartItems
  .map(
    (item, index) => `

${index + 1}. ${item.name}

Brand : ${item.brand}

Unit : ${item.unit}

Qty : ${item.quantity}

Price : ₹${item.price}

Total : ₹${item.price * item.quantity}

-----------------------------`
  )
  .join("\n")}

━━━━━━━━━━━━━━━━━━

Total Items : ${totalItems}

Grand Total : ₹${totalAmount}

━━━━━━━━━━━━━━━━━━

Thank You 🙏

Sri Murugan Agency
Ganapathipalayam
`;

  // Google Location

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat =
          position.coords.latitude;

        const lng =
          position.coords.longitude;

        const map =
          `https://maps.google.com/?q=${lat},${lng}`;

        setLocation(map);

        alert("Location Added Successfully");
      },
      () => {
        alert("Unable to fetch location");
      }
    );
  };

    // ==========================
  // Download PDF Quotation
  // ==========================

  const downloadQuotation = () => {
    if (!name || !phone) {
      alert("Please enter Customer Name and Mobile Number.");
      return;
    }

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("SRI MURUGAN AGENCY", 14, 20);

    doc.setFontSize(11);
    doc.text("Ganapathipalayam, Erode", 14, 28);
    doc.text("Phone : 9095932878 / 9095332878", 14, 35);

    doc.text(`Order ID : ${orderId}`, 14, 45);
    doc.text(`Order Date : ${orderDate}`, 14, 52);

    doc.text(`Customer : ${name}`, 14, 60);
    doc.text(`Phone : ${phone}`, 14, 67);
    doc.text(`Delivery : ${deliveryType}`, 14, 74);

    if (deliveryType === "Delivery") {
      doc.text(`Address : ${address}`, 14, 81);
    }

    autoTable(doc, {
      startY: deliveryType === "Delivery" ? 92 : 82,

      head: [["Product", "Qty", "Price", "Total"]],

      body: cartItems.map((item) => [
        item.name,
        item.quantity,
        `₹ ${item.price}`,
        `₹ ${item.price * item.quantity}`,
      ]),
    });

    const finalY = doc.lastAutoTable.finalY + 10;

    doc.setFontSize(13);
    doc.text(`Total Items : ${totalItems}`, 14, finalY);

    doc.text(
      `Grand Total : ₹ ${totalAmount}`,
      14,
      finalY + 8
    );

    doc.save(`Quotation-${orderId}.pdf`);
  };

  // ==========================
  // Place WhatsApp Order
  // ==========================

  const handleOrder = () => {
    if (!name || !phone) {
      alert(
        "Please enter Customer Name and Mobile Number."
      );
      return;
    }

    if (
      deliveryType === "Delivery" &&
      address.trim() === ""
    ) {
      alert("Please enter Delivery Address.");
      return;
    }

    window.open(
      `https://wa.me/919095932878?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    clearCart();

    navigate("/checkout-success");
  };

  return (
  <section className="max-w-7xl mx-auto px-6 py-12">

    {/* Back Button */}

    <button
      onClick={() => navigate("/products")}
      className="mb-8 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
    >
      <FaArrowLeft />
      Back to Products
    </button>

    {/* Title */}

    <h1 className="text-4xl font-bold text-center text-orange-600 mb-10">
      Shopping Cart
    </h1>

    {cartItems.length === 0 ? (

      <div className="text-center py-20">

        <h2 className="text-3xl font-bold text-gray-500">
          Your Cart is Empty
        </h2>

        <button
          onClick={() => navigate("/products")}
          className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg"
        >
          Continue Shopping
        </button>

      </div>

    ) : (

      <>

        {/* Cart Items */}

        <div className="space-y-6">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col lg:flex-row items-center gap-6"
            >

              {/* Image */}

              <img
                src={item.image}
                alt={item.name}
                className="w-36 h-36 object-contain"
              />

              {/* Product Info */}

              <div className="flex-1">

                <h2 className="text-2xl font-bold text-blue-900">
                  {item.name}
                </h2>

                <p className="text-gray-500 mt-1">
                  {item.tamilName}
                </p>

                <p className="mt-3">
                  <strong>Brand :</strong> {item.brand}
                </p>

                <p>
                  <strong>Unit :</strong> {item.unit}
                </p>

                <h3 className="text-2xl font-bold text-green-600 mt-3">
                  ₹ {item.price}
                </h3>

              </div>

              {/* Quantity */}

              <div className="flex items-center gap-3">

                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-11 h-11 rounded-lg bg-gray-300 hover:bg-gray-400 flex justify-center items-center"
                >
                  <FaMinus />
                </button>

                <span className="text-2xl font-bold w-12 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-11 h-11 rounded-lg bg-orange-500 hover:bg-orange-600 text-white flex justify-center items-center"
                >
                  <FaPlus />
                </button>

              </div>

              {/* Total */}

              <div className="text-right">

                <p className="text-gray-500">
                  Item Total
                </p>

                <h2 className="text-3xl font-bold text-green-700">
                  ₹ {item.price * item.quantity}
                </h2>

              </div>

              {/* Delete */}

              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-xl"
              >
                <FaTrash size={20} />
              </button>

            </div>

          ))}

        </div>

                {/* Order Summary */}

        <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">

          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            🧾 Order Summary
          </h2>

          <table className="w-full border-collapse">

            <thead>

              <tr className="bg-orange-500 text-white">

                <th className="p-4 text-left">Product</th>

                <th className="p-4 text-left">Brand</th>

                <th className="p-4 text-center">Qty</th>

                <th className="p-4 text-right">Price</th>

                <th className="p-4 text-right">Total</th>

              </tr>

            </thead>

            <tbody>

              {cartItems.map((item) => (

                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4 font-semibold">
                    {item.name}
                  </td>

                  <td className="p-4">
                    {item.brand}
                  </td>

                  <td className="p-4 text-center">
                    {item.quantity}
                  </td>

                  <td className="p-4 text-right">
                    ₹ {item.price}
                  </td>

                  <td className="p-4 text-right font-bold text-green-600">
                    ₹ {item.price * item.quantity}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {/* Total Cards */}

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">

              <h3 className="text-lg font-semibold text-gray-700">
                Total Quantity
              </h3>

              <p className="text-4xl font-bold text-blue-700 mt-2">
                {totalItems}
              </p>

            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">

              <h3 className="text-lg font-semibold text-gray-700">
                Grand Total
              </h3>

              <p className="text-4xl font-bold text-green-700 mt-2">
                ₹ {totalAmount}
              </p>

            </div>

          </div>

        </div>

                {/* Customer Details */}

        <div className="mt-10 bg-gray-100 rounded-2xl shadow-lg p-6">

          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            👤 Customer Details
          </h2>

          {/* Name */}

          <input
            type="text"
            placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4"
          />

          {/* Phone */}

          <input
            type="tel"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-lg p-3 mb-6"
          />

          {/* Delivery Option */}

          <h3 className="text-xl font-bold mb-3">
            🚚 Delivery Option
          </h3>

          <div className="flex flex-wrap gap-6 mb-6">

            <label className="flex items-center gap-2 cursor-pointer">

              <input
                type="radio"
                value="Delivery"
                checked={deliveryType === "Delivery"}
                onChange={(e) =>
                  setDeliveryType(e.target.value)
                }
              />

              Home Delivery

            </label>

            <label className="flex items-center gap-2 cursor-pointer">

              <input
                type="radio"
                value="Pickup"
                checked={deliveryType === "Pickup"}
                onChange={(e) =>
                  setDeliveryType(e.target.value)
                }
              />

              Shop Pickup

            </label>

          </div>

          {/* Address */}

          {deliveryType === "Delivery" && (

            <>

              <textarea
                rows="4"
                placeholder="Delivery Address"
                value={address}
                onChange={(e) =>
                  setAddress(e.target.value)
                }
                className="w-full border rounded-lg p-3 mb-5"
              />

              <button
                type="button"
                onClick={getLocation}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
              >
                📍 Share My Location
              </button>

              {location && (

                <>

                  <p className="mt-4 text-green-700 break-all">
                    📍 Location Shared Successfully
                  </p>

                  <a
                    href={location}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline block mt-2"
                  >
                    View Shared Location
                  </a>

                </>

              )}

            </>

          )}

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-8">

            <button
              onClick={downloadQuotation}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              📄 Download Quotation
            </button>

            <button
              onClick={handleOrder}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <FaWhatsapp />
              Place Order
            </button>

            <button
              onClick={clearCart}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
            >
              🗑️ Clear Cart
            </button>

          </div>

        </div>
              </>
    )}

  </section>
);

}

export default Cart;