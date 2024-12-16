// i guess we need a proper rework on for the css of the poster

import './MoviePoster.css';
import PropTypes from "prop-types";
import { FaPlay } from "react-icons/fa";

export default function MoviePoster(props) {
  return (
    <div className='movie-poster'>

      <div id="movie-poster-img">
        {/* Movie poster image */}
        <img src={props.posterUrl} alt={`${props.movieName} poster`} />

        <p className='play-text'>
          {/* Icon with boxicons */}
          <FaPlay />
          {/*<i className='bx bx-lg bx-play'></i>*/}
        </p>
      </div>

      {/* Movie name */}
      <div><p>{props.movieName}</p></div>

    </div>
  );
}

MoviePoster.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired,
};
