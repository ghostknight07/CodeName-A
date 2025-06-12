'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import movieData from "@/data/movieData.json"; // sample movie data json or js file

export default function MoviePage() {
  const howManyPostersShouldBeSeen = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setIsOpen(true);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredMovies = movieData.filter((movie) =>
    movie.movieName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMovies.length / howManyPostersShouldBeSeen);
  const indexOfLastMovie = currentPage * howManyPostersShouldBeSeen;
  const indexOfFirstMovie = indexOfLastMovie - howManyPostersShouldBeSeen;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="relative min-h-screen w-full">
            {/* <img
        src="https://wallpapercave.com/wp/wp2196807.jpg"
        alt="background"
        className="fixed top-0 left-0 w-full h-screen object-cover opacity-20 blur-md -z-10"
      /> */}

      <div className="w-[95%] mx-auto flex flex-col min-h-screen">
        {isOpen && (
          <div ref={searchRef} className="w-full flex justify-center items-center">
            <input
              type="text"
              className="bg-[#212121] text-white w-[350px] h-[40px] text-lg rounded px-4 mt-2"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        )}

        <div className="w-full p-4 grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] place-items-center">
          {currentMovies.map((movie) => (
            <Link href={`/movies/${movie.id}`} key={movie.id}>
                <div>
                    <img src={movie.posterUrl} alt={movie.movieName} />
                </div>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-auto py-5 gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-3 py-2 border rounded transition-colors ${
                  index + 1 === currentPage
                    ? "bg-blue-600 text-white border-blue-600 font-bold"
                    : "bg-transparent text-black dark:text-white border-gray-400 hover:bg-gray-200"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

