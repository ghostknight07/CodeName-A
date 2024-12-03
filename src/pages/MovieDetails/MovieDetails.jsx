import { useLocation, Link } from "react-router-dom";
import Button from "../../components/Button/Button.jsx";

function MovieDetails() {
  const movie = useLocation().state; // Access the movie data passed via state

  if (!movie) {
    return <p>No movie selected!</p>; // Fallback if no data is available
  }

  return (
    <main className="movie-details">
      {/* Back to Home Button */}
      <nav>
        <Link to="/movies">
          <Button text="Back To Home" />
        </Link>
      </nav>

      {/* Movie Content */}
      <div className="movie-details-content">
        <img
          src={movie.posterUrl}
          alt={movie.movieName}
          className="movie-image"
        />
        <h1>{movie.movieName}</h1>
        <p>{movie.description}</p>

        {/* External Link to Google */}
        <a
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text="Watch Now" />
        </a>
      </div>
    </main>
  );
}

export default MovieDetails;
