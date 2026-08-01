import { useState } from "react";

function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = () => {
    const text = `Hello Sri Murugan Agency

Name: ${form.name}
Phone: ${form.phone}
Product: ${form.product}

Message:
${form.message}`;

    window.open(
      `https://wa.me/919095932878?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="py-10 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Request a Quote
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-10">
          விலை விவரம் பெற உங்கள் தகவல்களை பதிவு செய்யுங்கள்.
        </p>

        <div className="bg-white shadow-xl rounded-2xl p-8 space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            className="w-full border rounded-lg p-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="product"
            placeholder="Required Product"
            className="w-full border rounded-lg p-3"
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Requirement"
            className="w-full border rounded-lg p-3"
            onChange={handleChange}
          />

          <button
            onClick={sendWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-bold"
          >
            💬 Send via WhatsApp
          </button>

        </div>
      </div>
    </section>
  );
}

export default QuoteForm;