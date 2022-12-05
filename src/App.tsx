import { useEffect, useState } from 'react';
import style from './App.module.scss';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import MovieDetails from './features/movies/components/MovieDetails/MovieDetails';
import MovieList from './features/movies/components/MovieList/MovieList';
import { Movie } from './features/movies/models/Movie'
import { apiMovieMap, urlApiMovies } from './conf/api.movies'

function App() {
  const movieVide: Movie = 
  {
    "_id": "",
    "title": "",
    "img": "",
    "details": "",
    "desc": ""
  }
  
  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedMovie, setSelectedMovie] = useState<Movie>(movieVide)

  function getData() {
    urlApiMovies.get('/discover/movie')
      .then(res => res.data?.results)
      .catch(console.error)
      .then(moviesFromAPI => {
        if (!moviesFromAPI) throw new Error("Pas de fims !")
        const movies = apiMovieMap(moviesFromAPI);
        setMovies(movies)
      })
  }

  useEffect(getData, []);

  function updateSelectedMovie(movie: Movie) {
    setSelectedMovie(movie)
  }

  return (
    <div className="app">
      <Header />
      {movies.length ?
        <>
          <MovieList movies={movies} updateSelectedMovie={updateSelectedMovie} />
          <MovieDetails selectedMovie={selectedMovie} />
        </>
        :
        <Loading />
      }
    </div>
  )
}

export default App;
