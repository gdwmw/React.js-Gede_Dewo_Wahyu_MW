import { useState } from "react";
import OpenAI from "openai";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateAnswer = async () => {
    if (question.length === 0) {
      alert("Please enter your question.");
      return;
    }

    setLoading(true);

    try {
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const response = await openai.completions.create({
        model: "text-davinci-003",
        prompt: `Please answer the following question: ${question}`,
        max_tokens: 150,
      });

      setAnswer(response.choices[0].text);
    } catch (error) {
      console.error("An error occurred:", error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-16 lg:px-32">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

        <div className="bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Ask a Question</h2>
          <input
            className="w-full p-2 mb-4 border rounded"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
          />
          <button
            className={`w-full p-2 rounded text-white bg-purple-500 hover:bg-violet-600 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
            onClick={handleGenerateAnswer}
            disabled={loading}
          >
            {loading ? "Generating..." : "Get Answer"}
          </button>
          {answer && (
            <div className="mt-8 bg-gray-200 p-4 rounded">
              <h2 className="text-2xl font-semibold mb-2">Answer</h2>
              <p className="text-lg">{answer}</p>
            </div>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Common Questions</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Q: What is the purpose of this app?</h3>
            <p>This app is designed to provide answers to your questions using OpenAI's GPT-3 model.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Q: How do I use it?</h3>
            <p>Simply type your question in the input field above and click the "Get Answer" button.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Q: How can I contact customer support if I encounter issues with the app?</h3>
            <p>
              You can contact our customer support team by emailing support@example.com. We're here to assist you with any problems or questions you
              may have.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Q: Are there any plans to add new features to the app in the future?</h3>
            <p>
              Yes, we are constantly working on improving the app. You can expect regular updates that may include new features and enhancements based
              on user feedback and needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
