export default function Navbar() {
    return(
        <div className="w-full h-[70px]">
            <div className="w-[90%] sm:w-[80%] h-full mx-auto flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">CodeName-A</h1>
                </div>
                <div>
                    <ul className="flex gap-4">
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
