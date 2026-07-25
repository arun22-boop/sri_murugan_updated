function TopBar() {
  return (
    <div className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

        {/* Left */}
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span>Ganapathipalayam, Erode - 638153</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">

          <a
            href="tel:9095932878"
            className="hover:text-orange-400"
          >
            📞 9095932878
          </a>

          <a
            href="tel:9095332878"
            className="hover:text-orange-400"
          >
            📞 9095332878
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            Facebook
          </a>

          <a
            href="https://wa.me/919095932878"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400"
          >
            WhatsApp
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400"
          >
            Instagram
          </a>

        </div>
      </div>
    </div>
  );
}

export default TopBar;