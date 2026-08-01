const features = [
  {
    icon: "🚚",
    title: "Fast Delivery",
    desc: "வேகமான டெலிவரி சேவை",
  },
  {
    icon: "⭐",
    title: "Quality Products",
    desc: "தரமான கட்டுமானப் பொருட்கள்",
  },
  {
    icon: "💰",
    title: "Best Price",
    desc: "நியாயமான விலை",
  },
  {
    icon: "🤝",
    title: "Trusted Service",
    desc: "நம்பிக்கையான சேவை",
  },
];

function Features() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="text-xl font-bold mt-4">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;