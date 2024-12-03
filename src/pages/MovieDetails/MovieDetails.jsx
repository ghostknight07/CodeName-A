// implement the button component

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import movieData from "../MovieData/movieData.js"; // Import your movie data


function MovieDetails() {
  const { id } = useParams(); // Get the movie ID from the URL
  const navigate = useNavigate();

  // Find the movie based on the ID
  const movie = movieData.find((movie) => movie.id.toString() === id);

  if (!movie) {
    return <p>Movie not found!</p>; // Handle invalid or missing ID
  }

  return (
    <main className="movie-details">
      <button onClick={() => navigate(-1)} className="back-button">
        Go Back
      </button>

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

