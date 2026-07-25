import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-8xl mx-auto px-6 py-8 grid md:grid-cols-4 gap-7">

        {/* Company */}
        <div>
          <img
            src="/images/logo.png"
            alt="Sri Murugan Agency"
            className="w-20 mb-4"
          />

          <h2 className="text-2xl font-bold">
            Sri Murugan Agency
          </h2>

          <p className="mt-3 text-gray-300">
            தரமான கட்டுமான பொருட்கள் மற்றும் சிறந்த சேவை.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-bold text-xl mb-4">Products</h3>

          <ul className="space-y-2">
            <li>Hollow Blocks</li>
            <li>Cement</li>
            <li>Asian Paints</li>
            <li>Astral Pipes</li>
            <li>Electrical</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-xl mb-4">Contact</h3>

          <p>📍 Ganapathipalayam, Erode</p>

          <p className="mt-2">📞 9095932878</p>

          <p>📞 9095332878</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-bold text-xl mb-4">Follow Us</h3>

          <div className="flex gap-5 text-3xl">

            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919095932878"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-5">
        © 2026 Sri Murugan Agency | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;