// implement the button component
import './MovieDetails.css';

import { useParams, } from "react-router-dom";
import movieData from "../MovieData/movieData.json"; // Import your movie data

function MovieDetails() {
  const { id } = useParams(); // Get the movie ID from the URL

  // Find the movie based on the ID
  const movie = movieData.find((movie) => movie.id.toString() === id);

  if (!movie) {
    return <p>Movie not found!</p>; // Handle invalid or missing ID
  }

  return (
    <div className="movie-details"> 
      <div className='movie-details-container'>
        <a href='/movies'>
          <button id="button-component">go back</button>
        </a>
      </div>
    </div>
  );
}

export default MovieDetails;

