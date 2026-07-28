import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

function Topbar() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">

      {/* Search */}
      <div className="relative w-96">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />

        <input
          type="text"
          placeholder="Search products..."
          className="w-full border rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        <button className="relative">
          <FaBell className="text-2xl text-gray-600" />

          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <FaUserCircle className="text-4xl text-orange-600" />

          <div>
            <h3 className="font-bold">Admin</h3>
            <p className="text-sm text-gray-500">
              Sri Murugan Agency
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Topbar;