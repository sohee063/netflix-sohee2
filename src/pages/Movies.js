import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "../component/Filter";
import SettingMovies from "../component/SettingMovies";
import Sort from "../component/Sort";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/MovieAction";
const Movies = () => {
  const { popularMovies } = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <Container>
      <Row lg={3}>
        <Col>
          <Filter />
        </Col>

        <Col>
          <Sort />
        </Col>
      </Row>
      <Row lg={9}>
        <SettingMovies movie={popularMovies.results} />
      </Row>
    </Container>
  );
};

export default Movies;
