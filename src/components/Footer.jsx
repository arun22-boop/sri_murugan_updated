import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div  className="border-t border-gray-700 text-center py-5">

        {/* Company */}
        <div>

          <h2 className="text-2xl font-bold">
            Sri Murugan Agency
          </h2>

          <p className="mt-3 text-gray-300">
            தரமான கட்டுமான பொருட்கள் மற்றும் சிறந்த சேவை.
          </p>
        </div>

          </div>


      <div className="border-t border-gray-700 text-center py-5">
        © 2026 Sri Murugan Agency | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;