import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    tamilName: "",
    brand: "",
    category: "",
    unit: "",
    price: "",
    stock: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(product);

    alert("✅ Product Added Successfully");

    navigate("/admin/products");
  };

  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-3xl font-bold text-blue-900 mb-8">
        Add New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-6"
      >

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="border rounded-lg p-3"
          required
        />

        <input
          type="text"
          name="tamilName"
          placeholder="Tamil Name"
          value={product.tamilName}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={product.brand}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="unit"
          placeholder="Unit (Bag / Kg / Piece)"
          value={product.unit}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={product.stock}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <div className="md:col-span-2 flex gap-4">

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
          >
            Save Product
          </button>

          <button
            type="button"
            onClick={() => navigate("/admin/products")}
            className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg"
          >
            Cancel
          </button>

        </div>

      </form>

    </div>
  );
}

export default AddProduct;