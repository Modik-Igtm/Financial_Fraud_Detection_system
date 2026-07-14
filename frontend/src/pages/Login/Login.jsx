import { LockClosedIcon } from "@heroicons/react/24/solid";

export default function Login(){

return(

<div className="min-h-screen bg-gradient-to-br from-[#08111f] via-[#101b33] to-[#0a1325] flex justify-center items-center">

<div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl w-[430px]">

<h1 className="text-4xl font-bold text-center">

Sentinel AI

</h1>

<p className="text-gray-400 text-center mt-3">

Financial Fraud Detection Platform

</p>

<input
placeholder="Email"
className="mt-10 w-full bg-[#1d2c4f] rounded-xl p-4 outline-none"
/>

<input
type="password"
placeholder="Password"
className="mt-5 w-full bg-[#1d2c4f] rounded-xl p-4 outline-none"
/>

<div className="flex justify-between mt-5 text-sm">

<label>

<input type="checkbox"/>

<span className="ml-2">

Remember me

</span>

</label>

<p className="text-cyan-400">

Forgot Password?

</p>

</div>

<button

className="mt-8 w-full bg-cyan-500 hover:bg-cyan-400 text-black rounded-xl py-4 font-bold flex justify-center items-center gap-3"

>

<LockClosedIcon className="w-5"/>

Login

</button>

</div>

</div>

)

}