import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaEye, FaEyeSlash } from "react-icons/fa";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      username === "admin" &&
      password === "123456"
    ) {
      localStorage.setItem("admin", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-500 to-blue-700 flex items-center justify-center px-5">

      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md">

        <div className="text-center">

          <FaUserShield
            className="text-6xl text-orange-500 mx-auto mb-4"
          />

          <h1 className="text-3xl font-bold text-blue-900">
            Admin Login
          </h1>

          <p className="text-gray-500 mt-2">
            Sri Murugan Agency
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            className="w-full border rounded-lg p-3"
            required
          />

          <div className="relative">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full border rounded-lg p-3"
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-4"
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>

          </div>

          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;