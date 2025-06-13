import Link from "next/link";
import NavMobile from "./NavMobile.jsx";

// tailwind css in use

export default function Navbar() {
    return(
        <div className="w-full h-[70px] border-b border-gray-600">
            <div className="w-[90%] sm:w-[80%] h-full mx-auto flex justify-between items-center">
                <div>
                    <Link href="/">
                        <h1 className="text-3xl text-slate-100 font-semibold">CodeName-A</h1>
                    </Link>
                </div>
    
                <div className="sm:hidden">
                    <NavMobile />
                </div>

                <div className="hidden sm:block">
                    <ul className="flex gap-4">
                        <li className="px-3 py-1 hover:bg-gray-600 rounded-sm">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="px-3 py-1 hover:bg-gray-600 rounded-sm">
                            <Link href="/movies">Movies</Link>
                        </li>
                        <li className="px-3 py-1 hover:bg-gray-600 rounded-sm"> 
                            <Link href="/request">Request</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    ) 
}
