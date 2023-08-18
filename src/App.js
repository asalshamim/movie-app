
import { useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div className="App">
    {movies.map((moviesReq)=><MovieBox/>)}
    </div>
  );
}

export default App;
