const features = [
  {
    icon: "🏆",
    title: "Quality Products",
    desc: "தரமான கட்டுமானப் பொருட்கள்",
  },
  {
    icon: "💰",
    title: "Best Price",
    desc: "நியாயமான விலையில் அனைத்து பொருட்களும்",
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    desc: "வேகமான டெலிவரி சேவை",
  },
  {
    icon: "🤝",
    title: "Trusted Service",
    desc: "வாடிக்கையாளர்களின் நம்பிக்கையான சேவை",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-8xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-center text-blue-900">
          Why Choose Sri Murugan Agency?
        </h2>

        <p className="text-center text-gray-600 mt-3">
          தரம் • நம்பிக்கை • சேவை
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center"
            >
              <div className="text-6xl">{item.icon}</div>

              <h3 className="text-xl font-bold mt-4">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;