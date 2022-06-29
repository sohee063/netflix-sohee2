import React from "react";
import { Badge } from "react-bootstrap";
import {
  faStar,
  faUsers,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieDetailInfo = ({ movie }) => {
  return (
    <div className="movie-detail-info">
      <div className="movie-detail-info-title">{movie?.title}</div>
      <h2>{movie?.tagline}</h2>
      <div>
        {movie?.genres.map((el, index) => (
          <Badge className="detailInfoGenre" key={index} bg="danger">
            {el?.name}
          </Badge>
        ))}
      </div>

      <span>
        <FontAwesomeIcon color="yellow" icon={faStar} /> {movie?.vote_average}{" "}
      </span>
      <span>
        <FontAwesomeIcon color="tomato" icon={faUsers} /> {movie?.popularity}{" "}
      </span>
      <span className="detailInfoAdult">
        {movie?.adult ? "청불" : "Under 18"}
      </span>
      <div className="detailInfoOverview">{movie?.overview}</div>
      <div>
        <FontAwesomeIcon icon={faCalendarDays} /> {movie?.release_date}
      </div>
      <div>
        <FontAwesomeIcon icon={faClock} /> {movie?.runtime} Minutes
      </div>
    </div>
  );
};

export default MovieDetailInfo;
