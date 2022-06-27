import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/MovieAction";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  //   console.log("원조", item.genre_ids);

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const goToMovieDetail = () => {
    navigate(`/movies/${item.id}`);
    dispatch(movieAction.getDetailMovies(item.id));
  };
  return (
    <div
      onClick={goToMovieDetail}
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <h1>{item.title}</h1>
        <div>
          {item?.genre_ids.map((id, index) => (
            <Badge key={index} bg="danger">
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <div className="card-info">
          <span>{item.vote_average}</span>
          <span>{item.adult ? "청불" : "Under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
