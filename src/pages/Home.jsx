import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Products from "../components/Products";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Products />
      <Hero />
      <Brands />
      <WhyChooseUs />
      <About />
      <Gallery />
      <Reviews />
      <Contact />
    </>
  );
}

export default Home;