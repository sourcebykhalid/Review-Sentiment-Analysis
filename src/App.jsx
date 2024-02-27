// import ReviewHighlighter from "./Components/ReviewHighLighter";
import ReviewList from "./Components/ReviewList";
// import reviewsData from "./Components/review.json";
function App() {
  return (
    <>
      <h1 className="bg-black font-bold text-slate-400 w-84 p-3 m-3 text-center text-lg shadow-lg shadow-yellow-500">
        Review Sentiment Analysis
      </h1>
      <ReviewList />
    </>
  );
}

export default App;
