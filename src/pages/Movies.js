import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "../component/Filter";
import SettingMovies from "../component/SettingMovies";
import Sort from "../component/Sort";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/MovieAction";
import GenreFilter from "../component/GenreFilter";
const Movies = () => {
  const { popularMovies, optionMovies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <Row className="moviesPage">
      <Col lg={4} md={6} sm={12}>
        <div className="sortfilterBox">
          <div className="sortBox">
            <Sort movie={popularMovies} />
          </div>
          <div className="filterBox">
            <Filter movie={popularMovies.results} />
          </div>
          <div className="genrefilter">
            {/* {optionMovies.map((item, index) => (
              <GenreFilter movie={item} key={index} />
            ))} */}
            <GenreFilter movie={optionMovies} />
          </div>
        </div>
      </Col>
      <Col lg={8} md={6} sm={12}>
        <SettingMovies movie={optionMovies} />
      </Col>
    </Row>
  );
};

export default Movies;
