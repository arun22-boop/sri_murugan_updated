import { Link } from "react-router-dom";

function Products() {
  return (
    <section className="py-5 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-blue-900">
          Order the Products
        </h2>

        <p className="text-gray-600 mt-3">
          கட்டுமானத்திற்கு தேவையான அனைத்து பொருட்களும் ஒரே இடத்தில்
        </p>

        <div className="mt-8">
          <Link to="/products">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
              Order Now
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Products;