import { useState } from "react";
import { FaTimes } from "react-icons/fa";

function FloatingQuoteForm() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const sendQuote = () => {
    if (!name || !phone || !product) {
      alert("Please fill all details");
      return;
    }

    const message = `
🏢 *SRI MURUGAN AGENCY*

📄 QUOTATION REQUEST

👤 Name : ${name}

📞 Phone : ${phone}

📦 Product : ${product}

🔢 Quantity : ${quantity}

Please send me the quotation.
`;

    window.open(
      `https://wa.me/919095932878?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setName("");
    setPhone("");
    setProduct("");
    setQuantity("");

    setOpen(false);
  };

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-44 right-6 bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 rounded-full shadow-2xl text-3xl z-50"
      >
        📄
      </button>

      {/* Popup */}

      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4"
            >
              <FaTimes />
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">
              Request Quotation
            </h2>

            <input
              type="text"
              placeholder="Customer Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg p-3 mb-4"
            />

            <input
              type="text"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-lg p-3 mb-4"
            />

            <input
              type="text"
              placeholder="Product Name"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full border rounded-lg p-3 mb-4"
            />

            <input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border rounded-lg p-3 mb-6"
            />

            <button
              onClick={sendQuote}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold"
            >
              📄 Request Quotation
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default FloatingQuoteForm;