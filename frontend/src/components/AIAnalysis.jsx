import { useState } from "react";
import api from "../services/api";

function AIAnalysis({ transaction }) {

    const [analysis, setAnalysis] = useState("");
    const [loading, setLoading] = useState(false);

    const analyzeTransaction = async () => {

        if (!transaction) return;

        try {

            setLoading(true);

            const response = await api.post(
                "/ai/analyze",
                transaction
            );

            setAnalysis(response.data.analysis);

        } catch (err) {

            console.log(err);

            setAnalysis("Unable to generate AI analysis.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="ai-box">

            <h2>🤖 AI Fraud Analysis</h2>

            <button onClick={analyzeTransaction}>
                Analyze Transaction
            </button>

            <br /><br />

            {loading ? (
                <p>Generating analysis...</p>
            ) : (
                <p>{analysis}</p>
            )}

        </div>

    );

}

export default AIAnalysis;