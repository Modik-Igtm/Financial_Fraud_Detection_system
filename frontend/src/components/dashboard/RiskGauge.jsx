function RiskScore({transaction}){

const score=Math.round(transaction.confidence*100);

return(

<div className="risk-card">

<h2>

Overall Risk Score

</h2>

<div className="progress">

<div
className="progress-fill"
style={{

width:`${score}%`

}}
></div>

</div>

<h1>

{score}%

</h1>

<h3>

{

score>80

?

"🔴 HIGH"

:

score>50

?

"🟡 MEDIUM"

:

"🟢 LOW"

}

</h3>

</div>

);

}

export default RiskScore;