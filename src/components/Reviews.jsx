import { useEffect, useState } from "react";

function Reviews() {
  const defaultReviews = [
    {
      name: "Arun Kumar",
      place: "Erode",
      review:
        "Excellent quality materials and best price. Very good customer service.",
      rating: 5,
      date: "01/07/2026",
    },
    {
      name: "Ramesh",
      place: "Perundurai",
      review:
        "All construction materials are available in one place. Highly recommended.",
      rating: 5,
      date: "03/07/2026",
    },
    {
      name: "Saravanan",
      place: "Chennimalai",
      review:
        "Fast delivery and genuine branded products. Very satisfied.",
      rating: 5,
      date: "05/07/2026",
    },
  ];

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("reviews")) || [];

    setReviews([...saved, ...defaultReviews]);
  }, []);

  return (
    <section className="py-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Customer Reviews
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          எங்கள் வாடிக்கையாளர்களின் கருத்துக்கள்
        </p>

        <div className="grid md:grid-cols-5 gap-3">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="bg-white rounded-1x1 shadow-lg p-3 hover:shadow-1x1 transition"
            >

              <div className="text-yellow-500 text-xl">
                {"⭐".repeat(review.rating)}
              </div>

              <p className="mt-2 italic text-gray-700">
                "{review.review}"
              </p>

              <div className="mt-6 border-t pt-4">

                <h3 className="font-bold text-blue-900">
                  {review.name}
                </h3>

                <p className="text-sm text-gray-500">
                  📍 {review.place}
                </p>

                <p className="text-xs text-gray-400 mt-2">
                  {review.date}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Reviews;