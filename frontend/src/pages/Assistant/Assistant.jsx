import { Bot, Send } from "lucide-react";
import { useState } from "react";

export default function Assistant() {
  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "Hello! I'm Sentinel AI. Ask me anything about fraud detection.",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "You", text: input },
      {
        sender: "AI",
        text: "This is a demo response. Later, Gemini AI will answer your questions.",
      },
    ]);

    setInput("");
  };

  return (
    <div className="bg-[#131D32]/80 rounded-3xl border border-cyan-500/10 h-[80vh] flex flex-col">

      <div className="p-6 border-b border-gray-700 flex items-center gap-3">
        <Bot className="text-cyan-400" size={28} />
        <h2 className="text-2xl font-bold">Sentinel AI Assistant</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[75%] p-4 rounded-2xl ${
              msg.sender === "You"
                ? "ml-auto bg-cyan-500 text-black"
                : "bg-[#1F2937]"
            }`}
          >
            <p className="text-sm font-semibold mb-1">{msg.sender}</p>
            <p>{msg.text}</p>
          </div>
        ))}

      </div>

      <div className="p-5 border-t border-gray-700 flex gap-4">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Sentinel AI..."
          className="flex-1 bg-[#1F2937] rounded-xl px-4 py-3 outline-none"
        />

        <button
          onClick={handleSend}
          className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 rounded-xl"
        >
          <Send />
        </button>

      </div>

    </div>
  );
}