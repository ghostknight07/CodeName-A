// TODO: add responsive layout grid

import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import MoviePoster from "../components/MoviePoster.jsx";
//movieData.js is the files were we will put out movie info
import movieData from "./movieData.js";
import "./MoviePage.css";

function MoviePage() {
  // this state will help us show like 10 movies and then a 
  // button will help us "show more"
  const [visibleCount, setVisibleCount] = useState(10);

  const handleClick = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <main>

      <Navbar />

      <div className="poster-grid">
        {/* this snippet will take movie data from 'movieData.js' and put it on the page */}
        {movieData.slice(0, visibleCount).map((movie, index) => (
          <MoviePoster
            key={index}
            posterUrl={movie.posterUrl}
            movieName={movie.movieName}
          />
        ))}
      </div>

      {/* this is the button to show more movies */}
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
