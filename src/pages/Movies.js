import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "../component/Filter";
import SettingMovies from "../component/SettingMovies";
import Sort from "../component/Sort";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/MovieAction";
const Movies = () => {
  const { popularMovies, optionMovies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <div>
      <Row>
        <Col lg={3} sm={12}>
          <div className="sortFilterBox">
            <Row>
              <Sort movie={popularMovies} />
              <Filter movie={popularMovies.results} />
            </Row>
          </div>
        </Col>
        <Col lg={9} sm={12}>
          <SettingMovies movie={optionMovies} />
        </Col>
      </Row>
    </div>
  );
};

export default Movies;
