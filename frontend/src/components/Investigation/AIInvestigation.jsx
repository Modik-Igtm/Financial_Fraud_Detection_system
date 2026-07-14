import {
    ShieldAlert,
    Smartphone,
    MapPin,
    Wallet,
    CircleAlert
} from "lucide-react";

export default function AIInvestigation() {

    return (

        <div className="bg-[#131D32]/80 backdrop-blur-xl border border-red-500/20 rounded-3xl p-6">

            <div className="flex items-center gap-3 mb-6">

                <ShieldAlert
                    className="text-red-500"
                    size={30}
                />

                <h2 className="text-2xl font-bold">
                    AI Investigation
                </h2>

            </div>

            <div className="space-y-5">

                <div>

                    <p className="text-gray-400">
                        Transaction
                    </p>

                    <h2 className="text-xl mt-1">
                        TRX-24091
                    </h2>

                </div>

                <div>

                    <p className="text-gray-400">
                        Risk Score
                    </p>

                    <div className="w-full bg-gray-700 rounded-full h-4 mt-3">

                        <div
                            className="bg-red-500 h-4 rounded-full"
                            style={{ width: "94%" }}
                        ></div>

                    </div>

                    <p className="mt-2 text-red-400 font-bold">
                        94% High Risk
                    </p>

                </div>

                <div>

                    <h3 className="font-semibold mb-3">
                        AI Reasons
                    </h3>

                    <div className="space-y-3">

                        <div className="flex gap-3">
                            <Wallet className="text-cyan-400"/>
                            Amount unusually high
                        </div>

                        <div className="flex gap-3">
                            <Smartphone className="text-cyan-400"/>
                            New device detected
                        </div>

                        <div className="flex gap-3">
                            <MapPin className="text-cyan-400"/>
                            Login from another city
                        </div>

                        <div className="flex gap-3">
                            <CircleAlert className="text-cyan-400"/>
                            Multiple rapid transfers
                        </div>

                    </div>

                </div>

                <div className="bg-red-500/20 rounded-xl p-4">

                    <h3 className="font-semibold text-red-400">
                        Recommendation
                    </h3>

                    <p className="mt-2">

                        Freeze account temporarily and verify
                        customer identity before allowing further
                        transactions.

                    </p>

                </div>

            </div>

        </div>

    )

}