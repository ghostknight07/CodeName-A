import style from "./MovieDetails.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import movieData from "../MovieData/movieData.json"; // Import your movie data
import { FaImdb } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { DiCelluloid } from "react-icons/di";

// Styles for icons

function MovieDetails() {
  const { id } = useParams(); // Get the movie ID from the URL

  // Find the movie based on the ID
  const movie = movieData.find((movie) => movie.id.toString() === id);

  if (!movie) {
    return <p>Movie not found!</p>; // Handle invalid or missing ID
  }

  return (
    <div className={style.MovieDetailsMainPage}>
          <img
              className={style.GamesPageBackground}
              src={movie.movieBackground}
              alt="Background"
            />
      <div className={style.MovieDetailsFullpage}>
        <Navbar />
        <div className={style.MovieDetailsResorcesContainer}>
          <div className={style.MovieDetailsContainer}>
          

            <div className={style.MovieDetailsImageContainer}>
            <img src={movie.posterUrl} alt={movie.movieName} />
           </div>
           
          
           <div className={style.MovieDetailsMovieName} >
            <h1>{movie.movieName}</h1>
           </div>
           
           <div className={style.MovieDetailsDRT}>
            <p className={style.MovieDetailsDRT}>{movie.movieDRT}</p>
           </div>
            
           <div classname={style.MovieDetailsRatingContainer}>
           <div className={style.MovieDetailsRatingIcon}>
            <FaImdb/>
            <FaStar />
            </div>
            <div className={style.MovieDetailsRating}>
             <p className={style.MovieDetailsRating}>{movie.movieRating}</p>
             </div>
            </div>

            <div className={style.MovieDetailsDescriptionContainer}>
            <p className={style.MovieDetailsDescription}>{movie.movieDescription}</p>
            </div>

            <div className={style.MovieDetailsGenreContainer}>
            <p className={style.MovieDetailsGenre}>{movie.movieGenre}</p>
            </div>

            <div className={style.MovieDetailsWatchContainer}>
              <a href={movie.movieLink} target="_blank" rel="noopener noreferrer">
              <button className={style.MovieDetailsWatchButton}>Watch Now</button> 
              </a>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;