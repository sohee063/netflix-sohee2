import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import MovieDetailPoster from "../component/MovieDetailPoster";
import { useEffect } from "react";
import { movieAction } from "../redux/actions/MovieAction";
import { useParams } from "react-router-dom";
import MovieDetailInfo from "../component/MovieDetailInfo";

const MovieDetail = () => {
  const { movieDetail } = useSelector((state) => state.movie);
  // console.log("detail", moviesDetail.id);
  // let movieId = moviesDetail.id;

  const dispatch = useDispatch();
  let { id } = useParams();
  console.log("params", id);

  useEffect(() => {
    dispatch(movieAction.getDetailMovies(id));
  }, [id]);

  return (
    <Container className="movieDetailpage">
      <Row>
        <Col>
          <MovieDetailPoster movie={movieDetail} />
        </Col>
        <Col>
          <MovieDetailInfo movie={movieDetail} />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;

// 쿼리 Params로 Get하기
