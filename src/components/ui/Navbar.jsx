import Link from "next/link"

export default function Navbar() {
    return(
        <div className="w-full h-[70px] border-b border-gray-600">
            <div className="w-[90%] sm:w-[80%] h-full mx-auto flex justify-between items-center">
                <div>
                    <Link href="/">
                    <h1 className="text-2xl font-bold">CodeName-A</h1>
                    </Link>
                </div>
                <div>
                    <ul className="flex gap-6">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Movies</a>
                        </li>
                        <li>
                            <a href="#">Shows</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    ) 
}
