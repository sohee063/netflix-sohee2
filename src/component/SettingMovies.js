import React from "react";
import { Row } from "react-bootstrap";
import SettingMovieCard from "./SettingMovieCard";

const SettingMovies = ({ movie }) => {
  return (
    <Row>
      {movie.map((item, index) => (
        <SettingMovieCard item={item} key={index} />
      ))}
    </Row>
  );
};

export default SettingMovies;
