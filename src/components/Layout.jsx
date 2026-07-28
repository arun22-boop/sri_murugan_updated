import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import FloatingQuoteForm from "./FloatingQuoteForm";

function Layout() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />

      <FloatingButtons />
      <FloatingQuoteForm />
    </>
  );
}

export default Layout;