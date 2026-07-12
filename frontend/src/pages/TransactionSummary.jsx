function TransactionSummary({transaction}){

return(

<div className="summary-card">

<h2>

Transaction Summary

</h2>

<div className="summary-grid">

<p>

<b>ID</b>

{transaction.transaction_id}

</p>

<p>

<b>Amount</b>

₹ {transaction.amount}

</p>

<p>

<b>Status</b>

{

transaction.prediction===1

?

"Fraud"

:

"Safe"

}

</p>

<p>

<b>Confidence</b>

{

(transaction.confidence*100).toFixed(1)

}%

</p>

</div>

</div>

);

}

export default TransactionSummary;