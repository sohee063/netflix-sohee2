import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { movieAction } from "../redux/actions/MovieAction";
import { Col } from "react-bootstrap";

const MovieDetailRelatedMoviesCard = ({ item }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const moveToDetail = () => {
    navigate(`/movies/${item.id}`);
    dispatch(movieAction.getDetailMovies(item.id));
  };
  return (
    <Col className="relatedRow" xl={6} lg={4}>
      <div
        onClick={moveToDetail}
        className="relatedMovies"
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w600_and_h900_bestv2//${item?.poster_path}` +
            ")",
        }}
      ></div>
    </Col>
  );
};

export default MovieDetailRelatedMoviesCard;
