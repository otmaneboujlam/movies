import MovieItem from '../MovieItem/MovieItem'
import style from './MovieList.module.scss'

function MovieList({movies}:any) {
    return <div className="movie-list d-flex flex-wrap justify-content-center">
        {movies.map( (movie : any) => <MovieItem key={movie._id} movie = {movie}/>)}
    </div>
}

export default MovieList