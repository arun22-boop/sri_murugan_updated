import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  FaTrash,
  FaPlus,
  FaMinus,
  FaShoppingCart
} from "react-icons/fa";

import toast from "react-hot-toast";

import { useCart } from "../context/CartContext";

function Cart() {

  const navigate = useNavigate();

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  // ==========================
  // CUSTOMER FORM
  // ==========================

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);

  // ==========================
  // TOTAL AMOUNT
  // ==========================

  const totalAmount = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + (Number(item.price) * Number(item.quantity));
    }, 0);
  }, [cartItems]);

  // ==========================
  // PLACE ORDER
  // ==========================

  const placeOrder = async () => {

    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    if (!customerName.trim()) {
      toast.error("Enter customer name");
      return;
    }

    if (!phone.trim()) {
      toast.error("Enter mobile number");
      return;
    }

    if (!address.trim()) {
      toast.error("Enter address");
      return;
    }

    try {

      setLoading(true);

      const orderData = {
        customerName,
        phone,
        address,
        notes,
        products: cartItems.map(item => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        totalAmount,
        status: "Pending"
      };

      await axios.post(
        "http://localhost:5000/api/orders",
        orderData
      );

      toast.success("Order Placed Successfully");

      clearCart();

      setCustomerName("");
      setPhone("");
      setAddress("");
      setNotes("");

      navigate("/");

    } catch (error) {

      console.log(error);

      toast.error("Order Failed");

    } finally {

      setLoading(false);

    }

  };
    // ==========================
  // EMPTY CART
  // ==========================

  if (cartItems.length === 0) {

    return (

      <section className="min-h-screen flex items-center justify-center bg-gray-50">

        <div className="bg-white shadow-lg rounded-2xl p-10 text-center">

          <FaShoppingCart
            className="text-6xl text-gray-400 mx-auto mb-5"
          />

          <h2 className="text-3xl font-bold mb-3">

            Your Cart is Empty

          </h2>

          <p className="text-gray-500 mb-6">

            Add some products before placing your order.

          </p>

          <button

            onClick={() => navigate("/")}

            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"

          >

            Continue Shopping

          </button>

        </div>

      </section>

    );

  }






  // ==========================
  // UI
  // ==========================

  return (

    <section className="bg-gray-100 min-h-screen py-10 px-4">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">

          Shopping Cart

        </h1>

        <div className="grid lg:grid-cols-3 gap-8">




          {/* LEFT */}

          <div className="lg:col-span-2 space-y-5">

            {

              cartItems.map(item => (

                <div

                  key={item._id}

                  className="bg-white rounded-2xl shadow p-5 flex gap-5"

                >




                  {/* IMAGE */}

                  <img

                    src={

                      item.image

                        ?

                        item.image.startsWith("http")

                          ?

                          item.image

                          :

                          `http://localhost:5000${item.image}`

                        :

                        "https://via.placeholder.com/150"

                    }

                    alt={item.name}

                    className="w-32 h-32 object-contain"

                  />






                  {/* DETAILS */}

                  <div className="flex-1">

                    <h2 className="text-2xl font-bold">

                      {item.name}

                    </h2>

                    <p className="text-gray-500">

                      {item.tamilName}

                    </p>

                    <p className="text-orange-600 text-2xl font-bold mt-2">

                      ₹ {item.price}

                    </p>






                    {/* QUANTITY */}

                    <div className="flex items-center gap-3 mt-5">

                      <button

                        onClick={() => decreaseQuantity(item._id)}

                        className="bg-gray-200 p-2 rounded"

                      >

                        <FaMinus />

                      </button>

                      <span className="text-xl font-bold">

                        {item.quantity}

                      </span>

                      <button

                        onClick={() => increaseQuantity(item._id)}

                        className="bg-gray-200 p-2 rounded"

                      >

                        <FaPlus />

                      </button>

                    </div>

                  </div>






                  {/* REMOVE */}

                  <div>

                    <button

                      onClick={() => removeFromCart(item._id)}

                      className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl"

                    >

                      <FaTrash />

                    </button>

                  </div>

                </div>

              ))

            }

          </div>
                    {/* RIGHT */}

          <div className="bg-white rounded-2xl shadow p-6 h-fit">

            <h2 className="text-2xl font-bold mb-6">
              Customer Details
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Customer Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full border rounded-lg p-3 outline-none"
              />

              <input
                type="text"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-lg p-3 outline-none"
              />

              <textarea
                rows="3"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border rounded-lg p-3 outline-none"
              />

              <textarea
                rows="3"
                placeholder="Notes (Optional)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border rounded-lg p-3 outline-none"
              />

            </div>

            <hr className="my-6" />

            <div className="space-y-3">

              <div className="flex justify-between text-lg">
                <span>Total Items</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="flex justify-between text-2xl font-bold">
                <span>Total Amount</span>
                <span className="text-orange-600">
                  ₹ {totalAmount}
                </span>
              </div>

            </div>

            <button
              onClick={placeOrder}
              disabled={loading}
              className="w-full mt-8 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-3"
            >
              <FaShoppingCart />

              {loading ? "Placing Order..." : "Place Order"}

            </button>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Cart;