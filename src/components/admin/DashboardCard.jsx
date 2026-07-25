import AdminSidebar from "../../components/admin/AdminSidebar";

function DashboardCard({ title, value, color, icon }) {
return (
<div className="flex">

  <AdminSidebar />

  <div className="flex-1 p-8">

    <h1 className="text-4xl font-bold">
      Welcome Admin 👋
    </h1>

    {/* Dashboard Cards */}

  </div>

</div>
);
}

export default DashboardCard;