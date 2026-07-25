import { useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    tamilName: "",
    category: "",
    price: "",
    description: "",
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
    alert("Product Saved Successfully! (Database connection in next step)");
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">
        Add New Product
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="text"
          name="tamilName"
          placeholder="Tamil Product Name"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="w-full border p-3 rounded-lg"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg"
        >
          Save Product
        </button>

      </form>
    </div>
  );
}

export default AddProduct;