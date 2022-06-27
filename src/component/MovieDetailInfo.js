import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const MovieDetailInfo = ({ movie }) => {
  const { genreList } = useSelector((state) => state.movie);
  console.log("genre", genreList);
  console.log("movie", movie.genres);

  return (
    <div className="movie-detail-info">
      <div className="movie-detail-info-title">{movie.title}</div>
      {/* <div>
        {movie.genres.map((id) => (
          <Badge bg="danger">{genreList.find((item) => item.id === id)}</Badge>
        ))}
      </div> */}
    </div>
  );
};

export default MovieDetailInfo;
