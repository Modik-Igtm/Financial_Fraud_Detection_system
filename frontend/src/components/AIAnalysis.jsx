
import { useState } from "react";
import api from "../services/api";

function AIAnalysis({ transaction }) {

    const [analysis, setAnalysis] = useState("");

    const [loading, setLoading] = useState(false);

    async function analyzeTransaction() {

        if (!transaction) return;

        setLoading(true);

        try {

            const response = await api.post(
                "/ai/analyze",
                transaction
            );

            setAnalysis(response.data.analysis);

        }

        catch {

            setAnalysis(
                "Unable to generate AI Investigation."
            );

        }

        setLoading(false);

    }

    if (!transaction) {

        return (

            <div className="ai-box">

                <h2>🤖 Sentinel AI</h2>

                <p>

                    Select a transaction from
                    the Live Monitor to begin
                    an investigation.

                </p>

            </div>

        );

    }

    return (

        <div className="ai-box">

            <h2>

                🤖 AI Investigation

            </h2>

            <div className="summary">

                <p>

                    <b>ID</b>

                    {transaction.transaction_id}

                </p>

                <p>

                    <b>Amount</b>

                    ₹ {transaction.amount}

                </p>

                <p>

                    <b>Prediction</b>

                    {

                        transaction.prediction === 1

                            ? "High Risk"

                            : "Safe"

                    }

                </p>

                <p>

                    <b>Confidence</b>

                    {

                        (transaction.confidence * 100)

                            .toFixed(1)

                    }%

                </p>

            </div>

            <button

                onClick={analyzeTransaction}

            >

                Generate AI Investigation

            </button>

            <br />

            <br />

            {

                loading

                    ?

                    <p>

                        AI is analysing
                        transaction...

                    </p>

                    :

                    <div>

                        <h3>

                            Investigation Summary

                        </h3>

                        <p>

                            {analysis}

                        </p>

                    </div>

            }

        </div>

    );

}

export default AIAnalysis;