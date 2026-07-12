function FraudTimeline(){

const events=[

"User Login",

"Unknown Device",

"Location Changed",

"High Amount",

"Fraud Detected"

];

return(

<div className="timeline">

<h2>

Fraud Timeline

</h2>

{

events.map((event,index)=>(

<div key={index}>

● {event}

</div>

))

}

</div>

);

}

export default FraudTimeline;