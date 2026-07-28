import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-10 bg-gray-50">
      <div className="max-w-8xl mx-auto px-5 grid lg:grid-cols-2 gap-20 items-center">

        {/* Image */}
        <div>
          <img
            src="/images/shop.jpg"
            alt="Sri Murugan Agency"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>

        {/* Content */}
        <div>

          <h4 className="text-orange-500 font-bold uppercase">
            About Us
          </h4>

          <h2 className="text-4xl font-bold text-blue-900 mt-3">
            Sri Murugan Agency
          </h2>

          <p className="mt-6 text-gray-700 leading-8">
            ஸ்ரீ முருகன் ஏஜென்சி, கணபதிபாளையத்தில் அமைந்துள்ள
            கட்டுமானப் பொருட்கள் விற்பனை நிலையமாகும்.
            தரமான பொருட்கள், நியாயமான விலை மற்றும்
            நம்பகமான சேவையை வழங்குவது எங்கள் நோக்கம்.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-600" />
              <span>Quality Products</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-600" />
              <span>Affordable Price</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-600" />
              <span>Fast Delivery</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-600" />
              <span>Customer Satisfaction</span>
            </div>

          </div>

          <div className="grid grid-cols-4 gap-5 mt-4">

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h2 className="text-3xl font-bold text-orange-500">
                28+
              </h2>
              <p>Years Experience</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h2 className="text-3xl font-bold text-blue-900">
                2000+
              </h2>
              <p>Happy Customers</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h2 className="text-3xl font-bold text-blue-900">
                500+
              </h2>
              <p>Products</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h2 className="text-3xl font-bold text-blue-900">
                10+
              </h2>
              <p>Trusted Brands</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;