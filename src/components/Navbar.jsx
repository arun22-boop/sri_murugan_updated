import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaShoppingCart,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";


function Navbar() {


  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);



  // FIX: default empty array
  const { cartItems = [] } = useCart();




  const totalItems = cartItems.reduce(

    (total, item) =>

      total + Number(item.quantity || 0),

    0

  );







  useEffect(() => {


    const handleScroll = () => {

      setScrolled(window.scrollY > 20);

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () =>

      window.removeEventListener(
        "scroll",
        handleScroll
      );


  }, []);









  const navClass = ({ isActive }) =>

    isActive

      ? "text-orange-600 font-semibold transition"

      : "text-gray-700 hover:text-orange-600 transition";








  return (


    <nav

      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg"
          : "bg-white"
      }`}

    >



      <div className="max-w-7xl mx-auto px-5">


        <div className="flex justify-between items-center h-20">






          {/* LOGO */}


          <Link

            to="/"

            className="flex items-center gap-4"

          >


            <img

              src="/images/logo.png"

              alt="Sri Murugan Agency"

              className="w-12 h-12 rounded-full object-cover"

            />



            <div>


              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">

                Sri Murugan Agency

              </h2>


              <p className="text-sm text-gray-600">

                Quality • Trust • Service

              </p>


            </div>


          </Link>









          {/* DESKTOP MENU */}


          <div className="hidden lg:flex items-center gap-7">





            <NavLink

              to="/"

              className={navClass}

            >

              Home

            </NavLink>





            <NavLink

              to="/products"

              className={navClass}

            >

              Products

            </NavLink>





            <NavLink

              to="/about"

              className={navClass}

            >

              About

            </NavLink>





            <NavLink

              to="/gallery"

              className={navClass}

            >

              Gallery

            </NavLink>





            <NavLink

              to="/contact"

              className={navClass}

            >

              Contact

            </NavLink>








            {/* CART */}


            <Link

              to="/cart"

              className="relative text-2xl hover:text-orange-600"

            >


              <FaShoppingCart />



              {

                totalItems > 0 &&


                <span

                  className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"

                >

                  {totalItems}

                </span>


              }


            </Link>









            <a

              href="tel:9095932878"

              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"

            >


              <FaPhoneAlt />

              Call

            </a>









            <Link

              to="/admin"

              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"

            >

              Admin Login

            </Link>






          </div>









          {/* MOBILE BUTTON */}



          <button


            className="lg:hidden text-2xl"


            onClick={() =>

              setMenuOpen(!menuOpen)

            }


          >


            {

              menuOpen

              ?

              <FaTimes />

              :

              <FaBars />

            }


          </button>






        </div>


      </div>









      {/* MOBILE MENU */}



      {

        menuOpen &&


        <div className="lg:hidden bg-white shadow-lg">





          <NavLink

            to="/"

            onClick={()=>setMenuOpen(false)}

            className="block px-5 py-4 border-b"

          >

            Home

          </NavLink>





          <NavLink

            to="/products"

            onClick={()=>setMenuOpen(false)}

            className="block px-5 py-4 border-b"

          >

            Products

          </NavLink>





          <NavLink

            to="/about"

            onClick={()=>setMenuOpen(false)}

            className="block px-5 py-4 border-b"

          >

            About

          </NavLink>





          <NavLink

            to="/gallery"

            onClick={()=>setMenuOpen(false)}

            className="block px-5 py-4 border-b"

          >

            Gallery

          </NavLink>





          <NavLink

            to="/contact"

            onClick={()=>setMenuOpen(false)}

            className="block px-5 py-4 border-b"

          >

            Contact

          </NavLink>






          <Link

            to="/cart"

            onClick={()=>setMenuOpen(false)}

            className="block px-5 py-4 border-b"

          >

            🛒 Cart ({totalItems})

          </Link>








          <Link

            to="/admin"

            onClick={()=>setMenuOpen(false)}

            className="block mx-4 my-4 text-center bg-red-600 text-white py-3 rounded-lg"

          >

            Admin Login

          </Link>






        </div>


      }



    </nav>


  );

}


export default Navbar;