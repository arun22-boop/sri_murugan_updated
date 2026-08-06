import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddProduct() {

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    tamilName: "",
    brand: "",
    category: "",
    unit: "Piece",
    price: "",
    stock: "",
    description: "",
    image: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/products",
        product
      );

      toast.success("Product Added Successfully");

      setProduct({
        name: "",
        tamilName: "",
        brand: "",
        category: "",
        unit: "Piece",
        price: "",
        stock: "",
        description: "",
        image: ""
      });

      navigate("/admin/products");

    } catch (error) {

      console.log(error);

      toast.error("Product Add Failed");

    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-8">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="border p-3 w-full rounded"
          required
        />

        <input
          type="text"
          name="tamilName"
          placeholder="Tamil Name"
          value={product.tamilName}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={product.brand}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          className="border p-3 w-full rounded"
          required
        />

        <select
          name="unit"
          value={product.unit}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        >
          <option>Piece</option>
          <option>Bag</option>
          <option>Kg</option>
          <option>Meter</option>
        </select>

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="border p-3 w-full rounded"
          required
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={product.stock}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          rows="4"
          className="border p-3 w-full rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
        >
          Add Product
        </button>

      </form>

    </div>
  );
}

export default AddProduct;