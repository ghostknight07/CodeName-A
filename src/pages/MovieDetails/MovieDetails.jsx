import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MovieDetails() {
  const location = useLocation();
  const movie = location.state; // Access the movie data passed via state
  const navigate = useNavigate();

  if (!movie) {
    return <p>No movie selected!</p>; // Fallback if no data is available
  }

  return (
    <main className="movie-details">
      <button onClick={() => navigate(-1)} className="back-button">Go Back</button>

      <div className="movie-details-content">
        <img src={movie.posterUrl} alt={movie.movieName} className="movie-image" />
        <h1>{movie.movieName}</h1>
        <p>{movie.description}</p>
        <button className="watch-button">Watch Movie</button>
      </div>
    </main>
  );
}

export default MovieDetails;

