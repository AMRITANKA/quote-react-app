import { useState } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.freeapi.app/api/v1/public/quotes/quote/random"
      );
      setQuote(response.data.data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-xl w-full text-center flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Random Quote Generator</h1>
        
        <button
          onClick={fetchQuote}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition mb-6"
          disabled={loading}
        >
          {loading ? "Fetching..." : "Get a Quote"}
        </button>

        <div className="w-full flex justify-center">
          {quote && (
            <div
              className="mt-0 flex flex-col items-center animate-fade-in w-full"
              style={{ minHeight: "260px", maxHeight: "320px" }}
            >
          
              <div
                className="relative max-w-lg w-full"
                style={{ maxHeight: "220px" }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 opacity-70 shadow-2xl"></div>
                <div className="relative bg-indigo-50 border border-indigo-200 rounded-xl px-6 py-6 shadow-inner overflow-auto">
                  <p className="text-2xl italic text-indigo-700 mb-4 transition-all duration-300 break-words">{`“${quote.content}”`}</p>
                  <p className="text-lg font-bold text-indigo-900 mb-2">— {quote.author}</p>
                  <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
                    {quote.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-pink-200 via-indigo-100 to-purple-200 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold shadow"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

// Add this style to your global CSS or in index.css for fade-in animation:
// .animate-fade-in { animation: fadeIn 0.8s ease; }
// @keyframes fadeIn { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: none;} }
