import { useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import TransactionSummary from "../components/investigation/TransactionSummary";
import RiskScore from "../components/investigation/RiskScore";
import RiskFactors from "../components/investigation/RiskFactors";
import FraudTimeline from "../components/investigation/FraudTimeline";
import RecommendationPanel from "../components/investigation/RecommendationPanel";
import AnalystDecision from "../components/investigation/AnalystDecision";

import "./Investigation.css";

function Investigation(){

const location=useLocation();

const transaction=location.state;

if(!transaction){

return <h2>No transaction selected.</h2>;

}

return(

<div className="dashboard">

<Sidebar/>

<div className="main-content">

<Navbar/>

<TransactionSummary transaction={transaction}/>

<RiskScore transaction={transaction}/>

<RiskFactors transaction={transaction}/>

<FraudTimeline/>

<RecommendationPanel/>

<AnalystDecision/>

</div>

</div>

);

}

export default Investigation;