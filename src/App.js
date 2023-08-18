
import { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';


const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=04585c5f3f14630b5578d643f8d7d76f";



function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results);
      })
  }, [])
  
  return (
    <div >
      {movies.map((moviesReq) =>
        <MovieBox key={moviesReq.id} {...moviesReq} />)}
    </div>
  );
}

export default App;
