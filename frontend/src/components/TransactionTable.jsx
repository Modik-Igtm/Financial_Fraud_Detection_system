
import "./TransactionTable.css";
import { useNavigate } from "react-router-dom";

function TransactionTable({ data, onInvestigate }) {

    if (!data || data.length === 0) {
        return (
            <div className="empty-state">
                No Transactions Uploaded
            </div>
        );
    }

    return (

        <div className="table-container">

            <div className="table-header">

                <h2>Live Transaction Monitor</h2>

                <p>
                    Monitor suspicious digital payment activity
                </p>

            </div>

            <table className="transaction-table">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Amount</th>

                        <th>Risk</th>

                        <th>Confidence</th>

                        <th>Status</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {data.map((item) => {

                        const confidence =
                            (item.confidence * 100).toFixed(1);

                        return (

                            <tr key={item.transaction_id}>

                                <td>{item.transaction_id}</td>

                                <td>₹ {item.amount}</td>

                                <td>

                                    {item.prediction === 1
                                        ? "🔴 High"
                                        : "🟢 Low"}

                                </td>

                                <td>

                                    {confidence}%

                                </td>

                                <td>

                                    <span
                                        className={
                                            item.prediction === 1
                                                ? "badge danger"
                                                : "badge success"
                                        }
                                    >

                                        {item.prediction === 1
                                            ? "Fraud"
                                            : "Safe"}

                                    </span>

                                </td>

                                <td>

                          <button
className="investigate-btn"
onClick={() =>
navigate(
`/investigation/${item.transaction_id}`,
{
state:item
})
}
>

Investigate

</button>

                                </td>

                            </tr>

                        );

                    })}

                </tbody>

            </table>

        </div>

    );

}

export default TransactionTable;