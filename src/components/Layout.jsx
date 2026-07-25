import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import FloatingReview from "./FloatingReview";
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
      <FloatingReview />
      <FloatingQuoteForm />
    </>
  );
}

export default Layout;