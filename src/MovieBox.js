import React from 'react';
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({titel, poster_path, vote_average, release_sate, overview}) => {
  return (
    <div>
      <h1>{titel}</h1>
      <img src={API_IMG + poster_path} alt='poster'></img>
      <p>{overview}</p>
    </div>
  )
}

export default MovieBox;
