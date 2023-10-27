import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Tech Q&A Portal</h1>
      <p className="text-lg mb-8">Explore and ask questions about technology.</p>
      <Link to="/qna" className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
        Go to Q&A
      </Link>
    </div>
  );
}
