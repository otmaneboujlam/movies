import style from './App.module.scss';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import MovieList from './features/movies/components/MovieList/MovieList';
import data from './utils/data.json'

function App() {
  return (
    <div className="app">
      <Header />
      { data.movies.length ? 
      <MovieList movies = {data.movies}/> 
      : 
      <Loading />
      }
    </div>
  )
}

export default App;
