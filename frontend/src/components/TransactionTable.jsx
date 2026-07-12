function TransactionTable({ data }) {

  if (!data || data.length === 0) {
    return <h3>No Transactions Uploaded</h3>;
  }

  return (

    <table className="table">

      <thead>

        <tr>

          <th>ID</th>
          <th>Amount</th>
          <th>Prediction</th>
          <th>Confidence</th>

        </tr>

      </thead>

      <tbody>

        {data.map((item) => (

          <tr key={item.transaction_id}>

            <td>{item.transaction_id}</td>

            <td>₹ {item.amount}</td>

            <td>

              {item.prediction === 1
                ? "Fraud"
                : "Safe"}

            </td>

            <td>

              {(item.confidence * 100).toFixed(2)}%

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  );

}

export default TransactionTable;