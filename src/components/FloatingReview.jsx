import { useState } from "react";
import { FaStar, FaTimes } from "react-icons/fa";

function FloatingReview() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const submitReview = () => {
  if (!name || !review) {
    alert("Please fill all details");
    return;
  }

  const newReview = {
    name,
    place,
    review,
    rating: Number(rating),
    date: new Date().toLocaleDateString("en-IN"),
  };

  const oldReviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

  oldReviews.unshift(newReview);

  localStorage.setItem(
    "reviews",
    JSON.stringify(oldReviews)
  );

  alert("⭐⭐⭐⭐⭐ Thank you for your Review!");

  setName("");
  setPlace("");
  setReview("");
  setRating(5);

  setOpen(false);

  window.location.reload();
};

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-6 bg-yellow-500 hover:bg-yellow-600 text-white w-16 h-16 rounded-full shadow-2xl text-3xl z-50"
      >
        ⭐
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-xl"
            >
              <FaTimes />
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">
              Customer Review
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="text"
              placeholder="Place"
              value={place}
              onChange={(e)=>setPlace(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4"
            />

            <textarea
              rows="4"
              placeholder="Write your Review..."
              value={review}
              onChange={(e)=>setReview(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4"
            />

            <select
              value={rating}
              onChange={(e)=>setRating(e.target.value)}
              className="w-full border p-3 rounded-lg mb-5"
            >
              <option value="5">⭐⭐⭐⭐⭐ (5)</option>
              <option value="4">⭐⭐⭐⭐ (4)</option>
              <option value="3">⭐⭐⭐ (3)</option>
              <option value="2">⭐⭐ (2)</option>
              <option value="1">⭐ (1)</option>
            </select>

            <button
              onClick={submitReview}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-bold"
            >
              Submit Review
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default FloatingReview;