import { useState } from "react";
import { FaStar } from "react-icons/fa";

function ReviewForm() {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("⭐ Thank you for your review!");

    setName("");
    setPlace("");
    setReview("");
    setRating(5);
  };

  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-blue-900">
          Write a Review
        </h2>

        <p className="text-center text-gray-600 mb-8">
          உங்கள் கருத்தை பதிவு செய்யுங்கள்
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-xl p-3"
          />

          <input
            type="text"
            placeholder="Your Place"
            required
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="w-full border rounded-xl p-3"
          />

          <textarea
            rows="5"
            placeholder="Write your review..."
            required
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full border rounded-xl p-3"
          />

          <div>
            <p className="font-semibold mb-2">
              Rating
            </p>

            <div className="flex gap-2">

              {[1,2,3,4,5].map((star)=>(
                <FaStar
                  key={star}
                  onClick={()=>setRating(star)}
                  className={`cursor-pointer text-3xl ${
                    star<=rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}

            </div>

          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold"
          >
            Submit Review
          </button>

        </form>

      </div>
    </section>
  );
}

export default ReviewForm;