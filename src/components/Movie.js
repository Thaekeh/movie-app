import React from "react";
import "../Movie.css";


const PLACEHOLDER_IMAGE = 'https://elitescreens.com/images/product_album/no_image.png';

const Movie = ({ movie }) => {

    function sayHello() {
        window.open(`https://www.imdb.com/title/${movie.imdbID}`)
    }

  const poster =
    movie.Poster === "N/A" ? PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie" onClick={sayHello}>
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p className="movie-year">({movie.Year})</p>
    </div>
  );
};


export default Movie;