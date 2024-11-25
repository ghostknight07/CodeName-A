// h- 250px
// w- 150px

export default function MoviePoster() {
  const MoviePosterStyles = {
    height: '250px',
    width: '166px',
    backgroundImage: "url('https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_finger_v3_resized.jpg')",
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
