import Navbar from "../components/Navbar.jsx";
import MoviePoster from '../components/MoviePoster.jsx';

function MoviePage() {
  return (<main>
    <Navbar />
    <MoviePoster
      posterUrl='https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg'
      movieName='Deadpool & The Wolverine'
    />
  </main>)
}

export default MoviePage;
