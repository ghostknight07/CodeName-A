import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import MoviePoster from "../../components/MoviePoster/MoviePoster";
// movieData.js is the file where we will put out movie info
import movieData from "../MovieData/movieData.json";
import "./MoviePage.css";

function MoviePage() {
  // this state will help us show like 10 movies and then a
  // button will help us "show more"
  let howManyPostersShouldBeSeen = 12; // Movies per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(movieData.length / howManyPostersShouldBeSeen);

  // Calculate the movies to display for the current page
  const indexOfLastMovie = currentPage * howManyPostersShouldBeSeen;
  const indexOfFirstMovie = indexOfLastMovie - howManyPostersShouldBeSeen;
  const currentMovies = movieData.slice(indexOfFirstMovie, indexOfLastMovie);

  // Function to handle page change
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
        <Navbar />

        <div className="poster-grid">
          {/* this snippet will take movie data from 'movieData.js' and put it on the page */}
          {currentMovies.map((movie, index) => (
            <Link
              to={`/movies/${movie.id}`} // movie's unique id routing
              key={index}
              state={movie} // pass movie data using react states
            >
              <MoviePoster
                posterUrl={movie.posterUrl}
                movieName={movie.movieName}
              />
            </Link>
          ))}
        </div>

        {/* Pagination buttons */}
        <div className="pagination-container">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`pagination-button ${
                index + 1 === currentPage ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoviePage;

