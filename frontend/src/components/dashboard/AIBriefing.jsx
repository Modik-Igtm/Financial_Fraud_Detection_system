
import "./AIBriefing.css";

function AIBriefing({ total, fraud }) {

    const safe = total - fraud;

    return (

        <div className="briefing">

            <h2>🧠 AI Daily Briefing</h2>

            <p>

                Sentinel AI analysed today's uploaded transactions.

            </p>

            <ul>

                <li>Total Transactions : {total}</li>

                <li>Fraud Alerts : {fraud}</li>

                <li>Safe Transactions : {safe}</li>

                <li>
                    Recommendation :
                    Review all High-Risk transactions immediately.
                </li>

            </ul>

        </div>

    );

}

export default AIBriefing;