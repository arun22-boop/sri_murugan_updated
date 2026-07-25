import DashboardCard from "../../components/admin/DashboardCard";

import {
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaStar,
} from "react-icons/fa";

function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        Welcome Admin 👋
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

        <DashboardCard
          title="Products"
          value="120"
          color="bg-blue-600"
          icon={<FaBoxOpen />}
        />

        <DashboardCard
          title="Orders"
          value="45"
          color="bg-orange-500"
          icon={<FaShoppingCart />}
        />

        <DashboardCard
          title="Customers"
          value="38"
          color="bg-green-600"
          icon={<FaUsers />}
        />

        <DashboardCard
          title="Reviews"
          value="18"
          color="bg-purple-600"
          icon={<FaStar />}
        />

      </div>
    </div>
  );
}

export default AdminDashboard;