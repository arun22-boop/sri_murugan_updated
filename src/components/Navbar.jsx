import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaWhatsapp,
  FaShoppingCart,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-orange-600 font-semibold"
      : "text-gray-800 hover:text-orange-600 transition";

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-white/100 backdrop-blur-md"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Sri Murugan Agency"
              className="w-14 h-14 rounded-full"
            />

            <div>
              <h1 className="font-bold text-xl text-orange-600">
                Sri Murugan Agency
              </h1>

              <p className="text-xs text-gray-500">
                Ganapathipalayam
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">

            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            <NavLink to="/products" className={navClass}>
              Products
            </NavLink>

            <NavLink to="/about" className={navClass}>
              About
            </NavLink>

            <NavLink to="/gallery" className={navClass}>
              Gallery
            </NavLink>

            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>

            <Link
              to="/cart"
              className="relative text-2xl hover:text-orange-600"
            >
              <FaShoppingCart />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <a
              href="tel:9095932878"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
            >
              <FaPhoneAlt />
              Call
            </a>

          </div>

          <Link
            to="/admin"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
         >
           Admin Login
         </Link>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg">

          <NavLink
            to="/"
            className="block p-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className="block p-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </NavLink>

          <NavLink
            to="/about"
            className="block p-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/gallery"
            className="block p-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className="block p-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          <Link
            to="/cart"
            className="block p-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            🛒 Cart ({totalItems})
          </Link>

          <Link
            to="/admin"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
         >
            Admin Login
         </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;