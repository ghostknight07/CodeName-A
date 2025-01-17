import style from "./MovieDetails.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import movieData from "../MovieData/movieData.json"; // Import your movie data

function MovieDetails() {
  const { id } = useParams(); // Get the movie ID from the URL

  // Find the movie based on the ID
  const movie = movieData.find((movie) => movie.id.toString() === id);

  if (!movie) {
    return <p>Movie not found!</p>; // Handle invalid or missing ID
  }

  return (
    <div className={style.MovieDetailsMainPage}>
      <div className={style.MovieDetailsFullpage}>
        <Navbar />
        <div className={style.MovieDetailsResorcesContainer}>
          <div className={style.MovieDetailsContainer}>
            <a href="/streaming">
            <h1>{movie.movieName}</h1>
            <img src={movie.posterUrl} alt={movie.movieName} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;