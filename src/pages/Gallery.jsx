const galleryImages = [
  "/images/gallery/gallery1.png",
  "/images/gallery/gallery2.png",
  "/images/gallery/gallery3.png",
  "/images/gallery/gallery4.png",
  "/images/gallery/gallery5.png",
  "/images/gallery/gallery6.png",
  "/images/gallery/gallery7.png",
  "/images/gallery/gallery8.png",
];

function Gallery() {
  return (
    <section className="py-10 bg-gray-100" id="gallery">
      <div className="max-w-8xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-orange-600 mb-3">
          Our Gallery
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Sri Murugan Agency Product Gallery
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-110 duration-300"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;