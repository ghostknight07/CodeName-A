import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import MoviePoster from "../../components/MoviePoster/MoviePoster";
import movieData from "../MovieData/movieData.json";
import "./MoviePage.css";

function MoviePage() {
  let howManyPostersShouldBeSeen = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  // Function to toggle search visibility
  const toggleSearch = () => {
    setIsOpen(true);
  };

  // Close search when clicking outside
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

  // Filter movies first before paginating
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
    <div className="moviePage-main">
      <img
        className="movie-page-background"
        src="https://wallpapercave.com/wp/wp2196807.jpg"
      />

      <div className="moviepage-container">
        <Navbar seachfunction={toggleSearch} />

        {/* Search Bar */}
        {isOpen && (
          <div ref={searchRef} className="search-bar-container">
            <input
              className="search-bar"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page when searching
              }}
            />
          </div>
        )}

        <div className="moviepageResources-Container">
          <div className="poster-grid">
            {currentMovies.map((movie) => (
              <Link to={`/movies/${movie.id}`} key={movie.id} state={movie}>
                <MoviePoster posterUrl={movie.posterUrl} movieName={movie.movieName} />
              </Link>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination-container">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`pagination-button ${index + 1 === currentPage ? "active" : ""}`}
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

export default MoviePage;