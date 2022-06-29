import React from "react";
const MovieDetailPoster = ({ movie }) => {
  return (
    <div>
      <div
        className="detailMoviePoster"
        style={{
          backgroundImage:
            "url(" +
            `https://image.tmdb.org/t/p/original///${movie?.poster_path}` +
            ")",
        }}
      ></div>
    </div>
  );
};

export default MovieDetailPoster;
