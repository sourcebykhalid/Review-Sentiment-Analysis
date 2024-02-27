import React from "react";

// Define colors for different sentiments
const sentimentColors = {
  positive: "#00FF00",
  neutral: "#FFFF00",
  negative: "#FF0000",
};

function ReviewHighlighter({ reviews }) {
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.review_id} className="m-4">
          <img
            src={review.source.icon}
            className="w-8 inline-block mr-2"
            alt="Review Source Icon"
          />
          <span className="font-bold">{review.reviewer_name}</span>
          <span className="bg-grey text-gray-800"> wrote a review at </span>
          <span className="font-bold">{review.source.name}</span>
          <br />
          <span className="ml-12">{review.rating_review_score}</span>
          <span>{review.date}</span>
          <br />
          <div className="ml-12">
            {/* Split review content into sentences and apply colors */}
            {review.analytics.map((sentence) => (
              <span
                key={sentence.text}
                style={{ color: sentimentColors[sentence.sentiment] }}
              >
                {sentence.sentence}{" "}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewHighlighter;
