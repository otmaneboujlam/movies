import { Movie } from '../../models/Movie'
import MovieItem from '../MovieItem/MovieItem'
import style from './MovieList.module.scss'

interface MovieListProps {
    movies: Movie[]
    updateSelectedMovie: Function
}

function MovieList({movies, updateSelectedMovie}: MovieListProps ) {
    return <div className="movie-list d-flex flex-wrap justify-content-center">
        {movies.map( (movie : Movie) => <MovieItem key={movie._id} movie = {movie} updateSelectedMovie = {updateSelectedMovie} />)}
    </div>
}

export default MovieList