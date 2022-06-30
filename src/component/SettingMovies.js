import React, { useEffect } from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/MovieAction";
import { useNavigate } from "react-router-dom";
import SettingMovieCard from "./SettingMovieCard";
import Movies from "../pages/Movies";

const SettingMovies = ({ movie }) => {
  // console.log("data", movie);
  // useEffect(() => {
  //   dispatch(movieAction.getMovies());
  // }, []);
  return (
    <Row>
      {movie.map((item, index) => (
        <SettingMovieCard item={item} key={index} />
      ))}
    </Row>
  );
};

export default SettingMovies;
