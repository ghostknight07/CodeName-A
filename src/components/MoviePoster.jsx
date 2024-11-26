// instruction
// you must read the docs of boxicons in
// case you want to add more icons

import 'boxicons/css/boxicons.min.css';

import './MoviePoster.css';

import PropTypes from "prop-types";

// h- 250px
// w- 150px

export default function MoviePoster(props) {
  const MoviePosterStyles = {
    height: '250px',
    width: '166px',
    backgroundImage: `url(${props.posterUrl})`,
    borderRadius: '16px', // Test with a solid color
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    backgroundPosition: 'center', // Centers the image in the div
    cursor: 'pointer',
  };

  return (
    <div className='movie-poster'>

      <div id="movie-poster-img" style={MoviePosterStyles}>

        <p className='play-text'>
          {/* an icon with boxicons */}
          <i className='bx bx-lg bx-play'></i>
        </p>

      </div>

      {/* movie name */}
      <div><p>{props.movieName}</p></div>

    </div>
  )
}


MoviePoster.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired,
};
