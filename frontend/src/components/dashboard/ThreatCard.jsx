function RiskFactors(){

const factors=[

"High Amount",

"New Device",

"Different Location",

"Late Night Activity"

];

return(

<div className="factor-card">

<h2>

Risk Factors

</h2>

{

factors.map((item)=>(

<p key={item}>

✅ {item}

</p>

))

}

</div>

);

}

export default RiskFactors;