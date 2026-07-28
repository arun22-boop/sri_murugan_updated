import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);

    toast.success(`${product.name} added to cart`, {
      duration: 2000,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">

        <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
          {product.category}
        </span>

        <h3 className="text-xl font-bold mt-3">
          {product.name}
        </h3>

        <p className="text-orange-600 font-bold text-lg mt-2">
          ₹ {product.price}
        </p>

        <div className="flex gap-3 mt-5">

          <Link
            to={`/product/${product.id}`}
            className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            View
          </Link>

          <button
            onClick={handleAddToCart}
            className="bg-orange-500 text-white px-4 rounded-lg hover:bg-orange-600"
          >
            <FaShoppingCart />
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;