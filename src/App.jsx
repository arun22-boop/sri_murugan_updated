import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import AdminLayout from "./components/admin/AdminLayout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import CheckoutSuccess from "./pages/CheckoutSuccess";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProductsList from "./pages/admin/ProductsList";
import AddProduct from "./pages/admin/AddProduct";

function App() {
  return (
    <Routes>

      {/* Admin Login */}
      <Route path="/admin" element={<AdminLogin />} />

      {/* Admin Pages */}
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<ProductsList />} />
        <Route path="/admin/products/add" element={<AddProduct />} />
      </Route>

      {/* Website Pages */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout-success"
          element={<CheckoutSuccess />}
        />
      </Route>

    </Routes>
  );
}

export default App;