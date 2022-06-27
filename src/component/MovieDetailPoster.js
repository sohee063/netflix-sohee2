import React from "react";
const MovieDetailPoster = ({ movie }) => {
  console.log("movie", movie);
  return (
    <div
      className="detailMoviePoster"
      style={{
        backgroundImage:
          "url(" +
          ` https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.backdrop_path}` +
          ")",
      }}
    ></div>
  );
};

export default MovieDetailPoster;
