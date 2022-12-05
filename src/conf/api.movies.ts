import axios from "axios"

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDBkNGFkOGY3YWUxZWE5NmY1NmIyNTJiOTYzZGM1YyIsInN1YiI6IjYzOGRiMGI0MTUzNzZjM2RhYWY5OTNlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.om3dVGuXoX1i-i9W0st0IJwgb98gf75PKvIeCZ22jjI'

export const urlApiMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/4',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  timeout: 4000
});

urlApiMovies.interceptors.request.use((req: any) => {
  req.headers['Authorization'] = "Bearer " + API_TOKEN;
  return req;
})