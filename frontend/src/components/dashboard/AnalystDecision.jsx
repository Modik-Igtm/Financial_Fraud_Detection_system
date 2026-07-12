import { useState } from "react";

function AnalystDecision(){

const [decision,setDecision]=useState("");

return(

<div className="decision-card">

<h2>

Analyst Decision

</h2>

<select
value={decision}
onChange={(e)=>setDecision(e.target.value)}
>

<option>

Select Decision

</option>

<option>

Approve

</option>

<option>

Freeze Account

</option>

<option>

Verify Customer

</option>

<option>

Escalate

</option>

<option>

Block Transaction

</option>

</select>

<br/><br/>

<button>

Save Decision

</button>

</div>

);

}

export default AnalystDecision;