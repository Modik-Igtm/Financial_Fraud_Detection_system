
import {
Bell,
Search,
UserCircle
} from "lucide-react";

export default function Navbar(){

const hour=new Date().getHours();

const greeting=
hour<12
?"Good Morning"
:hour<18
?"Good Afternoon"
:"Good Evening";

return(

<header className="h-24 bg-[#111827] border-b border-gray-800 flex justify-between items-center px-8">

<div>

<h1 className="text-3xl font-bold">

{greeting},

<span className="text-cyan-400">
 Modika 👋
</span>

</h1>

<p className="text-gray-400 mt-2">
Welcome back to Sentinel AI
</p>

</div>

<div className="flex items-center gap-5">

<div className="relative">

<Search
className="absolute left-3 top-3 text-gray-500"
/>

<input

placeholder="Search transaction..."

className="bg-[#1F2937]
rounded-xl
pl-10
py-3
w-72
outline-none"
/>

</div>

<Bell/>

<UserCircle
size={38}
/>

</div>

</header>

)

}