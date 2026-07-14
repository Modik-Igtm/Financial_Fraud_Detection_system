import { ShieldAlert } from "lucide-react";

const alerts = [

    "Transaction #194 flagged",

    "High-risk login detected",

    "Large payment blocked",

    "Account frozen temporarily"

];

export default function AlertPanel(){

    return(

        <div className="bg-[#131D32]/80 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-6">

            <div className="flex items-center gap-3 mb-6">

                <ShieldAlert className="text-red-400"/>

                <h2 className="text-xl font-semibold">
                    Live Alerts
                </h2>

            </div>

            <div className="space-y-4">

                {alerts.map((item,index)=>(

                    <div
                    key={index}
                    className="bg-[#0B1120] rounded-xl p-4 border border-red-500/20"
                    >

                        {item}

                    </div>

                ))}

            </div>

        </div>

    )

}