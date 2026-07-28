import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-8xl mx-auto px-6">

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-900">
            Contact Us
          </h2>

          <p className="text-gray-600 mt-3">
            எங்களை தொடர்பு கொள்ள
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-2xl font-bold mb-6">
              Sri Murugan Agency
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-orange-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>
                    Ganapathipalayam,
                    <br />
                    Erode - 638153
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>+91 9095932878</p>
                  <p>+91 9095332878</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>srimuruganagency@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaClock className="text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold">
                    Business Hours
                  </h4>

                  <p>
                    Monday - Sunday
                  </p>

                  <p>
                    7:00 AM - 9:00 PM
                  </p>

                </div>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl overflow-hidden shadow-lg">

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Ganapathipalayam,Erode&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="border-0"
            ></iframe>

          </div>
          <div className="flex flex-wrap gap-4 mt-6">

  <a
    href="tel:9095932878"
    className="bg-blue-600 text-white px-6 py-3 rounded-xl"
  >
    📞 Call Now
  </a>

  <a
    href="https://wa.me/919095932878"
    target="_blank"
    rel="noreferrer"
    className="bg-green-600 text-white px-6 py-3 rounded-xl"
  >
    💬 WhatsApp
  </a>

  <a
    href="https://maps.app.goo.gl/18LKfwXTc97ujES5A"
    target="_blank"
    rel="noreferrer"
    className="bg-orange-600 text-white px-6 py-3 rounded-xl"
  >
    📍 Get Directions
  </a>

</div>
<div className="flex gap-5 mt-8 text-3xl">

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
    </section>
  );
}

export default Contact;