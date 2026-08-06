import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "https://YOUR-BACKEND-URL.onrender.com";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [product, setProduct] = useState({
    name: "",
    tamilName: "",
    brand: "",
    category: "",
    unit: "Piece",
    price: "",
    stock: "",
    description: "",
    image: "",
  });

  // ==========================
  // LOAD PRODUCT
  // ==========================

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${API_URL}/api/products/${id}`
      );

      setProduct(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load product");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // INPUT CHANGE
  // ==========================

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
    // ==========================
  // UPDATE PRODUCT
  // ==========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `${API_URL}/api/products/${id}`,
        {
          name: product.name,
          tamilName: product.tamilName,
          brand: product.brand,
          category: product.category,
          unit: product.unit,
          price: Number(product.price),
          stock: Number(product.stock),
          description: product.description,
          image: product.image,
        }
      );

      toast.success("Product Updated Successfully");

      navigate("/admin/products");

    } catch (error) {
      console.log(error);

      toast.error("Update Failed");
    }
  };

  // ==========================
  // LOADING
  // ==========================

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-bold">
        Loading Product...
      </div>
    );
  }
    return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-slate-800 mb-8">
        Edit Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 space-y-6"
      >
        {/* Product Name */}
        <div>
          <label className="block mb-2 font-semibold">
            Product Name
          </label>

          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        {/* Tamil Name */}
        <div>
          <label className="block mb-2 font-semibold">
            Tamil Name
          </label>

          <input
            type="text"
            name="tamilName"
            value={product.tamilName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block mb-2 font-semibold">
            Brand
          </label>

          <input
            type="text"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2 font-semibold">
            Category
          </label>

          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        {/* Unit */}
        <div>
          <label className="block mb-2 font-semibold">
            Unit
          </label>

          <select
            name="unit"
            value={product.unit}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          >
            <option value="Piece">Piece</option>
            <option value="Bag">Bag</option>
            <option value="Kg">Kg</option>
            <option value="Meter">Meter</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block mb-2 font-semibold">
            Price
          </label>

          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block mb-2 font-semibold">
            Stock
          </label>

          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-semibold">
            Description
          </label>

          <textarea
            rows="4"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-2 font-semibold">
            Image URL
          </label>

          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          {product.image && (
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover rounded-lg mt-4 border"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
          >
            Update Product
          </button>

          <button
            type="button"
            onClick={() => navigate("/admin/products")}
            className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;