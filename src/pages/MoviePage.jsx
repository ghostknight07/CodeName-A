import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import MoviePoster from "../components/MoviePoster.jsx";
import movieData from "./movieData.js";
import "./MoviePage.css";

function MoviePage() {
  const [visibleCount, setVisibleCount] = useState(10);

  const handleClick = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <main>
      <Navbar />
      <div className="poster-grid">
        {movieData.slice(0, visibleCount).map((movie, index) => (
          <MoviePoster
            key={index}
            posterUrl={movie.posterUrl}
            movieName={movie.movieName}
          />
        ))}
      </div>
      {visibleCount < movieData.length && (
        <div className="button-container">
          <button className="show-more-btn" onClick={handleClick}>
            Show More
          </button>
        </div>
      )}
    </main>
  );
}

export default MoviePage;
