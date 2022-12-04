import style from './App.module.scss';
import Header from './components/Header/Header';
import MovieList from './features/movies/components/MovieList/MovieList';
import data from './utils/data.json'

function App() {
  return (
    <div className="app">
      <Header />
      <MovieList movies = {data.movies}/>
    </div>
  )
}

export default App;
