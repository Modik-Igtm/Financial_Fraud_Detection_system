import { Bot } from "lucide-react";

export default function AISummary() {

    return (

        <div className="bg-[#131D32]/80 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-6">

            <div className="flex items-center gap-3 mb-5">

                <Bot className="text-cyan-400"/>

                <h2 className="text-xl font-semibold">
                    AI Summary
                </h2>

            </div>

            <ul className="space-y-4 text-gray-300">

                <li>✔ Fraud increased by 12% today.</li>

                <li>✔ Most frauds occurred between 10 PM and 2 AM.</li>

                <li>✔ Credit card fraud is dominating.</li>

                <li>✔ Mumbai has the highest fraud rate.</li>

            </ul>

        </div>

    )

}