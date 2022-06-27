import React from "react";
import { Badge } from "react-bootstrap";

const MovieDetailInfo = ({ movie }) => {
  console.log("movie", movie);
  return (
    <div className="movie-detail-info">
      <div className="movie-detail-info-title">{movie?.title}</div>
      <h2>{movie?.tagline}</h2>
      <div>
        {movie?.genres.map((el, index) => (
          <Badge key={index} bg="danger">
            {el.name}
          </Badge>
        ))}
      </div>
      <span>{movie?.vote_average} </span>
      <span>{movie?.popularity} </span>
      <span>{movie?.adult ? "청불" : "Under 18"}</span>
      <div>{movie?.overview}</div>
      <div>{movie?.release_date}</div>
      <div>{movie?.runtime} Minutes</div>
    </div>
  );
};

export default MovieDetailInfo;
