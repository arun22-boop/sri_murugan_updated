import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";

import products from "../data/products";
import categoriesData from "../data/categories";
import Navbar from "../components/Navbar";

function Products() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Search
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Quantity
  const [quantities, setQuantities] = useState({});

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  // Search Filter
  const filteredProducts = products.filter((product) => {
  const search = searchTerm.toLowerCase();

  const matchesSearch =
    product.name.toLowerCase().includes(search) ||
    product.tamilName.toLowerCase().includes(search);

  const matchesCategory =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct =
    indexOfLastProduct - productsPerPage;

  const paginatedProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  // Categories
  const categories = [
    ...new Set(
      paginatedProducts.map((item) => item.category)
    ),
  ];

  // Quantity Update
 const updateQty = (id, qty) => {
  const product = products.find((p) => p.id === id);

  if (!product) return;

  if (qty < 1) qty = 1;

  if (qty > product.stock) qty = product.stock;

  setQuantities((prev) => ({
    ...prev,
    [id]: qty,
  }));
};

  // Add To Cart
const handleAddToCart = (item) => {
  addToCart(item, quantities[item.id] || 1);

  alert(`${item.name} added to cart`);
};
    return (
    <section className="bg-gray-100 min-h-screen py-5">
      <div className="max-w-8xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-900">
          Our Products
        </h1>

        <p className="text-center text-gray-600 mt-3 mb-10">
          கட்டுமானத்திற்கு தேவையான அனைத்து பொருட்களும் ஒரே இடத்தில்
        </p>

        {/* Search Box */}
        <div className="flex justify-center mb-12">
          <input
            type="text"
            placeholder="🔍 Search Products..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full md:w-96 border rounded-xl px-4 py-3 shadow"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">

  <button
    onClick={() => {
      setSelectedCategory("All");
      setCurrentPage(1);
    }}
    className={`px-5 py-2 rounded-full ${
      selectedCategory === "All"
        ? "bg-orange-500 text-white"
        : "bg-white border"
    }`}
  >
    All
  </button>

  {categoriesData.map((category) => (
    <button
      key={category.name}
      onClick={() => {
        setSelectedCategory(category.name);
        setCurrentPage(1);
      }}
      className={`px-5 py-2 rounded-full ${
        selectedCategory === category.name
          ? "bg-orange-500 text-white"
          : "bg-white border"
      }`}
    >
      {category.icon} {category.name}
    </button>
  ))}

</div>

        {/* Category Wise Products */}
        {categories.map((category) => {
          const categoryInfo = categoriesData.find(
            (cat) => cat.name === category
          );

          return (
            <div key={category} className="mb-16">

              {/* Category Heading */}
              <div className="flex items-center justify-between border-b-2 border-orange-500 pb-3 mb-8">

                <h2 className="text-3xl font-bold text-blue-900">
                  {categoryInfo?.icon} {category}
                </h2>

                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold">
                  {
                    paginatedProducts.filter(
                      (item) => item.category === category
                    ).length
                  }{" "}
                  Products
                </span>

              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {paginatedProducts
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
                    >

                      {/* Product Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-contain p-4"
                      />

                      <div className="p-4">

                        {/* Product Name */}
                        <h3 className="text-lg font-bold text-blue-900">
                          {item.name}
                        </h3>

                        <p className="text-gray-600">
                          {item.tamilName}
                        </p>

                        {/* Brand */}
                        <p className="mt-2">
                          <strong>Brand :</strong> {item.brand}
                        </p>

                        {/* Unit */}
                        <p>
                          <strong>Unit :</strong> {item.unit}
                        </p>

                        {/* Stock */}
                        <p className="text-green-600 font-semibold">
                          ✔ {item.stock}
                        </p>

                        {/* Price */}
                        <h3 className="text-2xl font-bold text-orange-600 mt-3">
                          ₹ {item.price}
                        </h3>

                        {/* Quantity */}
                        <div className="flex justify-center items-center gap-3 mt-4">

                          <button
                            onClick={() =>
                              updateQty(
                                item.id,
                                (quantities[item.id] || 1) - 1
                              )
                            }
                            className="bg-gray-300 w-10 h-10 rounded-lg flex justify-center items-center"
                          >
                            <FaMinus />
                          </button>

                          <input
                            type="number"
                            min="1"
                            value={quantities[item.id] || 1}
                            onChange={(e) =>
                              updateQty(
                                item.id,
                                Number(e.target.value)
                              )
                            }
                            className="w-16 text-center border rounded-lg py-2"
                          />

                          <button
                            onClick={() =>
                              updateQty(
                                item.id,
                                (quantities[item.id] || 1) + 1
                              )
                            }
                            className="bg-orange-500 text-white w-10 h-10 rounded-lg flex justify-center items-center"
                          >
                            <FaPlus />
                          </button>

                        </div>

                        {/* Buttons */}
                        <div className="grid grid-cols-2 gap-3 mt-5">

                          <button
                            onClick={() => handleAddToCart(item)}
                            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2"
                          >
                            <FaShoppingCart />
                            Add
                          </button>

                          <Link to={`/product/${item.id}`}>
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">
                              View
                            </button>
                          </Link>

                        </div>

                      </div>

                    </div>
                  ))}

              </div>

            </div>
          );
        })}
                {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">

          {/* Previous */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-lg font-bold ${
                currentPage === index + 1
                  ? "bg-orange-500 text-white"
                  : "bg-white border hover:bg-orange-100"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Next
          </button>

        </div>

      </div>
    </section>
  );
}

export default Products;