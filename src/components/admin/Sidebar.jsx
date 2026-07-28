import {
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaStar,
  FaImages,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin");
  };

  return (
    <div className="w-64 bg-blue-900 text-white min-h-screen p-5">

      <h1 className="text-2xl font-bold text-center mb-8">
        SRI MURUGAN
        <br />
        ADMIN
      </h1>

      <div className="space-y-2">

        <Link
          to="/admin/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700"
        >
          <FaTachometerAlt />
          Dashboard
        </Link>

        <Link
          to="/admin/products"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700"
        >
          <FaBoxOpen />
          Products
        </Link>

        <Link
          to="/admin/orders"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700"
        >
          <FaShoppingCart />
          Orders
        </Link>

        <Link
          to="/admin/customers"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700"
        >
          <FaUsers />
          Customers
        </Link>

        <Link
          to="/admin/gallery"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700"
        >
          <FaImages />
          Gallery
        </Link>

        <Link
          to="/admin/reports"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700"
        >
          <FaChartBar />
          Reports
        </Link>

        <Link
          to="/admin/settings"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700"
        >
          <FaCog />
          Settings
        </Link>

        <button
          onClick={logout}
          className="w-full flex items-center gap-3 p-3 rounded-lg bg-red-600 hover:bg-red-700 mt-8"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>
    </div>
  );
}

export default Sidebar;