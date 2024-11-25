import Navbar from "../components/Navbar.jsx";
import MoviePoster from '../components/MoviePoster.jsx';

function MoviePage() {
  return (<main>
    <Navbar />
    <MoviePoster
      posterUrl='https://cdn.marvel.com/content/1x/dp3_1sht_digital_srgb_ka_finger_v3_resized.jpg'
    />
  </main>)
}

export default MoviePage;
