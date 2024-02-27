import reviewsData from "./review.json"; // Importing the JSON data
import Tooltip from "./Tooltip";
function App() {
  const sentimentColors = {
    Positive: "#D9F2DD",
    Negative: "#F2DBD9",
    Mixed: "#e8bd6d3d",
    Neutral: "#eaf09b6b",
  };

  // Function to shuffle array randomly
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle the reviews data to get random reviews
  const shuffledReviewsData = shuffleArray(reviewsData);

  return (
    <div>
      <div className="w-full text-left p-5 text-black">
        {shuffledReviewsData.map((review, reviewIndex) => (
          <div key={review.review_id} className="m-4">
            <img
              src={review.source.icon}
              className="w-8 inline-block mr-2"
              alt="Review Source Icon"
            />

            <span className="font-bold">{review.reviewer_name}</span>
            <span className="bg-grey text-gray-800"> wrote a review at </span>

            <img
              src={review.source.image}
              className=" inline-block w-24 mr-2"
              alt="Review Source Icon"
            />
            <br />
            <span className="ml-12">{review.rating_review_score} </span>
            <span> {review.date}</span>
            <br />

            {/* Iterate over each sentence and apply highlighting */}

            <p className="ml-12">
              {review.content.split(".").map((sentence, sentenceIndex) => {
                if (
                  (reviewIndex === 0 && sentenceIndex === 0) ||
                  (reviewIndex === 1 && sentenceIndex === 1) ||
                  (reviewIndex === 2 && sentenceIndex === 2) ||
                  (reviewIndex === 3 && sentenceIndex === 3) ||
                  (reviewIndex === 4 && sentenceIndex === 4) ||
                  (reviewIndex === 5 && sentenceIndex === 5) ||
                  (reviewIndex === 6 && sentenceIndex === 6)
                ) {
                  const randomSentiment =
                    review.analytics[
                      Math.floor(Math.random() * review.analytics.length)
                    ].sentiment;
                  return (
                    <Tooltip
                      key={`${reviewIndex}-${sentenceIndex}`}
                      text={sentence.trim()}
                    >
                      <span
                        style={{
                          backgroundColor: sentimentColors[randomSentiment],
                          fontWeight: "bold",
                          cursor: "pointer", // Add cursor pointer to indicate hover
                        }}
                      >
                        {sentence.trim() + "."}
                      </span>
                    </Tooltip>
                  );
                } else {
                  return (
                    <span key={sentenceIndex}>{sentence.trim() + "."}</span>
                  );
                }
              })}
            </p>

            {/* Display the rest of the review content */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
