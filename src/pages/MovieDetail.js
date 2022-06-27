import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import MovieDetailPoster from "../component/MovieDetailPoster";
import { useEffect } from "react";
import { movieAction } from "../redux/actions/MovieAction";
import { useParams } from "react-router-dom";
import MovieDetailInfo from "../component/MovieDetailInfo";
import { ThreeDots } from "react-loader-spinner";

const MovieDetail = () => {
  const { movieDetail, loading } = useSelector((state) => state.movie);
  // console.log(movieDetail);
  const dispatch = useDispatch();
  let { id } = useParams();
  console.log("params", id);

  useEffect(() => {
    dispatch(movieAction.getDetailMovies(id));
  }, []);

  if (loading) {
    return (
      <div className="spinner">
        <ThreeDots color="grey" height={80} width={80} />
      </div>
    );
  } else {
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
  }
};

export default MovieDetail;
