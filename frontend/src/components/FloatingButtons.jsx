import { FaWhatsapp } from "react-icons/fa";

function FloatingButtons() {
  return (
    <a
      href="https://wa.me/919095932878"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

export default FloatingButtons;