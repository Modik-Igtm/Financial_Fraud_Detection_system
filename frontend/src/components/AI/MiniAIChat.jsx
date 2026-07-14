import { Bot, Send } from "lucide-react";
import { useState } from "react";

export default function MiniAIChat() {

  const [question, setQuestion] = useState("");

  return (

    <div className="bg-[#131D32]/80 rounded-3xl border border-cyan-500/10 p-6 h-full">

      <div className="flex items-center gap-3 mb-5">

        <Bot className="text-cyan-400"/>

        <h2 className="text-xl font-semibold">
          AI Assistant
        </h2>

      </div>

      <textarea
        rows="7"
        placeholder="Ask Sentinel AI..."
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}
        className="w-full bg-[#1F2937] rounded-xl p-4 resize-none outline-none"
      />

      <button className="w-full mt-5 bg-cyan-500 hover:bg-cyan-400 rounded-xl py-3 text-black font-semibold flex justify-center items-center gap-2">

        <Send size={18}/>

        Ask AI

      </button>

    </div>

  );

}