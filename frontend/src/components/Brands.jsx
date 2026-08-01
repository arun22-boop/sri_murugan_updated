function Brands() {
  const brands = [
    {
      name: "HOLLOW BLOCKS",
      image: "/images/brands/hollow-blocks.png",
    },
    {
      name: "Ramco Cement",
      image: "/images/brands/ramco.png",
    },
    {
      name: "Dalmia Cement",
      image: "/images/brands/dalmia.png",
    },
    {
      name: "Asian Paints",
      image: "/images/brands/asian-paints.png",
    },
    {
      name: "Astral Pipes",
      image: "/images/brands/astral.png",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="max-w-8xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Our Trusted Brands
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          நாங்கள் விற்பனை செய்யும் முன்னணி பிராண்டுகள்
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-20 object-contain"
              />

              <p className="mt-4 font-semibold text-center">
                {brand.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Brands;