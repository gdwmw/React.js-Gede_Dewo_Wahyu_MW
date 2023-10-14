import { useState } from "react";
import OpenAI from "openai";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (prompt.length === 0) {
      alert("Please enter a prompt.");
      return;
    }

    setLoading(true);

    try {
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: prompt },
        ],
      });

      setResult(response.choices[0].message.content);
    } catch (error) {
      console.error("An error occurred:", error);
    }

    setLoading(false);
  };

  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-2/4 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">AI Chat Generator</h1>
        <textarea
          className="w-full h-40 border border-gray-300 rounded-lg p-2 mb-4"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Write your prompt..."
        ></textarea>
        <button
          className={`w-full py-2 rounded-lg font-semibold ${
            loading ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
        <pre className="mt-4 overflow-scroll">{result}</pre>
      </div>
    </main>
  );
}

export default App;
