import { useState } from 'react';
import style from './App.module.scss';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import MovieDetails from './features/movies/components/MovieDetails/MovieDetails';
import MovieList from './features/movies/components/MovieList/MovieList';
import data from './utils/data.json'

function App() {
  const [selectedMovie, SetSelectedMovie] = useState<any>(data.movies[0])

  function updateSelectedMovie(id : any) {
    SetSelectedMovie(
      data.movies.find(movie => movie._id === id)
    )
  }

  return (
    <div className="app">
      <Header />
      { data.movies.length ? 
      <>
      <MovieList movies = {data.movies} updateSelectedMovie = {updateSelectedMovie}/>
      <MovieDetails selectedMovie = {selectedMovie} />
      </> 
      : 
      <Loading />
      }
    </div>
  )
}

export default App;
