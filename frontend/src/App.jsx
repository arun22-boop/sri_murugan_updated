import { Routes, Route } from "react-router-dom";


// Layout
import Layout from "./components/Layout";
import AdminLayout from "./components/admin/AdminLayout";


// Website Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";



// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import ProductsList from "./pages/admin/ProductsList";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import Orders from "./pages/admin/Orders";
import Reports from "./pages/admin/Reports";
import Settings from "./pages/admin/Settings";



function App() {


return (


<Routes>





{/* =========================
        ADMIN LOGIN
========================= */}



<Route

path="/admin/login"

element={<AdminLogin />}

/>








{/* =========================
        ADMIN PANEL
========================= */}




<Route

path="/admin"

element={<AdminLayout />}

>




<Route

index

element={<Dashboard />}

/>





<Route

path="dashboard"

element={<Dashboard />}

/>






<Route

path="products"

element={<ProductsList />}

/>






<Route

path="products/add"

element={<AddProduct />}

/>






<Route

path="products/edit/:id"

element={<EditProduct />}

/>






<Route

path="orders"

element={<Orders />}

/>






<Route

path="reports"

element={<Reports />}

/>






<Route

path="settings"

element={<Settings />}

/>





</Route>












{/* =========================
        WEBSITE
========================= */}




<Route

element={<Layout />}

>




<Route

path="/"

element={<Home />}

/>






<Route

path="/products"

element={<Products />}

/>






<Route

path="/product/:id"

element={<ProductDetails />}

/>






<Route

path="/about"

element={<About />}

/>






<Route

path="/gallery"

element={<Gallery />}

/>






<Route

path="/contact"

element={<Contact />}

/>






<Route

path="/cart"

element={<Cart />}

/>







<Route

path="/checkout"

element={<Checkout />}

/>






<Route

path="/checkout-success"

element={<CheckoutSuccess />}

/>






</Route>







</Routes>


);


}


export default App;