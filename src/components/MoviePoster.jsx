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
      <div style={MoviePosterStyles}></div>
    </div>
  )
}


MoviePoster.propTypes = {
  posterUrl: PropTypes.string.isRequired,
};