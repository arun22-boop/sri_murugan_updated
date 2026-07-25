import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">
          Product Not Found
        </h2>
      </div>
    );
  }

  // WhatsApp Message
  const whatsappMessage = `
Hello Sri Murugan Agency,

Product : ${product.name}
Brand : ${product.brand}
Quantity : ${quantity} ${product.unit}

Please send me the price.
`;

  // Add To Cart
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });

    navigate("/cart");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid md:grid-cols-2 gap-12">

        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div>

          <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full">
            {product.category}
          </span>

          <h1 className="text-5xl font-bold mt-4">
            {product.name}
          </h1>

          <h2 className="text-2xl text-gray-600 mt-2">
            {product.tamilName}
          </h2>

          <h3 className="text-4xl font-bold text-green-600 mt-5">
            ₹ {product.price}
          </h3>

          <div className="mt-8 space-y-4 text-lg">

            <p>
              <strong>Brand :</strong> {product.brand}
            </p>

            <p>
              <strong>Unit :</strong> {product.unit}
            </p>

            <p>
              <strong>Availability :</strong>{" "}
              <span className="text-green-600 font-bold">
                Available
              </span>
            </p>

          </div>

          {/* Quantity */}
          <div className="mt-8">

            <h3 className="text-xl font-bold mb-4">
              Select Quantity
            </h3>

            <div className="flex items-center gap-3">

              <button
                onClick={() =>
                  quantity > 1 &&
                  setQuantity(quantity - 1)
                }
                className="w-12 h-12 bg-gray-300 rounded-lg text-2xl"
              >
                -
              </button>

              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Number(e.target.value))
                }
                className="w-24 text-center border rounded-lg py-3 text-xl"
              />

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
                className="w-12 h-12 bg-orange-500 text-white rounded-lg text-2xl"
              >
                +
              </button>

            </div>

          </div>

          {/* Description */}
          <div className="mt-8">

            <h3 className="text-2xl font-bold mb-2">
              Description
            </h3>

            <p className="text-gray-600">
              {product.description}
            </p>

          </div>

          {/* Buttons */}
          <div className="mt-10 space-y-4">

            <button
              onClick={handleAddToCart}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-3"
            >
              <FaShoppingCart />
              Add to Cart
            </button>

            <div className="grid md:grid-cols-2 gap-4">

              <a
                href={`https://wa.me/919095932878?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl flex justify-center items-center gap-3"
              >
                <FaWhatsapp />
                WhatsApp Order
              </a>

              <a
                href="tel:9095932878"
                className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl flex justify-center items-center gap-3"
              >
                <FaPhoneAlt />
                Call Now
              </a>

            </div>

          </div>

          <Link
            to="/products"
            className="inline-block mt-10 text-blue-600 font-bold"
          >
            ← Back to Products
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;