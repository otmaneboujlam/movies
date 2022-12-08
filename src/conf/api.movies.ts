import axios from "axios"
import { Movie } from "../features/movies/models/Movie";

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDBkNGFkOGY3YWUxZWE5NmY1NmIyNTJiOTYzZGM1YyIsInN1YiI6IjYzOGRiMGI0MTUzNzZjM2RhYWY5OTNlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.om3dVGuXoX1i-i9W0st0IJwgb98gf75PKvIeCZ22jjI'

export const urlApiMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/4',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  timeout: 4000
});

urlApiMovies.interceptors.request.use((req: any) => {
  req.headers['Authorization'] = "Bearer " + API_TOKEN
  return req
})

export const apiMovieMap = (moviesFromAPI: any[]) => moviesFromAPI.map((m: any) => new Movie(
    String(m.id),
    m.title,
    `${m.release_date} | ${m.vote_average} (${m.vote_count})`,
    m.overview,
    `https://image.tmdb.org/t/p/w500${m.poster_path}`
  ))

  