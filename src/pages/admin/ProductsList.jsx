import { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import productsData from "../../data/products";
import { useNavigate } from "react-router-dom";

function ProductsList() {
  const [products, setProducts] = useState(productsData);
  const navigate = useNavigate();

  const deleteProduct = (id) => {
    if (window.confirm("Delete this product?")) {
      setProducts(products.filter((item) => item.id !== id));
    }
  };

  const handleAddProduct = () => {
    navigate("/admin/products/add");
  };

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold text-blue-900">
          Product Management
        </h1>

<button
  onClick={() => navigate("/admin/products/add")}
  className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg flex items-center gap-2"
>
  <FaPlus />
  Add Product
</button>

      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full">

          <thead className="bg-blue-700 text-white">

            <tr>

              <th className="p-4">Image</th>

              <th>Name</th>

              <th>Brand</th>

              <th>Category</th>

              <th>Price</th>

              <th>Stock</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {products.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-3">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                  />

                </td>

                <td>{item.name}</td>

                <td>{item.brand}</td>

                <td>{item.category}</td>

                <td>₹ {item.price}</td>

                <td>{item.stock}</td>

                <td>

                  <div className="flex gap-3 justify-center">

                    <button
                      className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => deleteProduct(item.id)}
                      className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg"
                    >
                      <FaTrash />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ProductsList;