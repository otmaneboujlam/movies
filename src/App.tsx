import { useEffect, useState } from 'react';
import style from './App.module.scss';
import Header from './components/Header/Header';
import { Movie } from './features/movies/models/Movie'
import { apiMovieMap, urlApiMovies } from './conf/api.movies'
import Movies from './features/movies/components/Movies/Movies';

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

  function updateSetMovies(movies : Movie[]) {
    setMovies(movies)
  }

  function updateSelectedMovie(movie: Movie) {
    setSelectedMovie(movie)
  }

  return (
    <div className="app">
      <Header />
      <Movies 
      movies = {movies}
      updateSetMovies = {updateSetMovies}
      updateSelectedMovie = {updateSelectedMovie}
      selectedMovie = {selectedMovie}
      />
    </div>
  )
}

export default App;
