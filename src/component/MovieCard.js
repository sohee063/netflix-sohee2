import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/MovieAction";
import {
  faStar,
  faUsers,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      // className="react-multi-carousel-item"
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w600_and_h900_bestv2///${item.poster_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <h1>{item.title}</h1>
        <div>
          {item?.genre_ids.map((id, index) => (
            <Badge className="detailInfoGenre" key={index} bg="danger">
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <div className="card-info">
          <span>
            <FontAwesomeIcon color="yellow" icon={faStar} /> {item.vote_average}
          </span>
          <span className="detailInfoAdult">
            {item?.adult ? "청불" : "Under 18"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
