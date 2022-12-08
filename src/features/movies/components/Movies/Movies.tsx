import Loading from "../../../../components/Loading/Loading"
import { Movie } from "../../models/Movie"
import MovieDetails from "../MovieDetails/MovieDetails"
import MovieList from "../MovieList/MovieList"
import SearchBar from "../SearchBar/SearchBar"

interface MoviesProps {
    movies: Movie[],
    updateSetMovies: Function,
    updateSelectedMovie: Function,
    selectedMovie: Movie
}

function Movies({movies, updateSetMovies, updateSelectedMovie, selectedMovie} : MoviesProps) {
    return <>
        {movies.length ?
        <>
          <div className="d-flex justify-content-center p-4">
            <SearchBar updateSetMovies = {updateSetMovies}/>
          </div>
          <MovieList movies={movies} updateSelectedMovie={updateSelectedMovie} />
          <MovieDetails selectedMovie={selectedMovie} />
        </>
        :
        <Loading />
      }
    </>
}

export default Movies