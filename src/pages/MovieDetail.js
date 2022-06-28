import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import MovieDetailPoster from "../component/MovieDetailPoster";
import { useEffect } from "react";
import { movieAction } from "../redux/actions/MovieAction";
import { useParams } from "react-router-dom";
import MovieDetailInfo from "../component/MovieDetailInfo";
import { ThreeDots } from "react-loader-spinner";
import MovieDetailRelatedMovies from "../component/MovieDetailRelatedMovies";
import MovieDetailReviews from "../component/MovieDetailReviews";

const MovieDetail = () => {
  const { movieDetail, loading, relatedMovies, reviews } = useSelector(
    (state) => state.movie
  );
  const [select, setSelect] = useState(true);
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(movieAction.getDetailMovies(id));
    dispatch(movieAction.getReviews(id));
    dispatch(movieAction.getRelatedMovies(id));
  }, []);

  const showRelatedMovies = () => {
    console.log("관련", select);
    setSelect(false);
  };

  const showReviews = () => {
    console.log("리뷰", select);
    setSelect(true);
  };

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
        <Row>
          <div className="reviews-related-btn">
            <button className="reviews-btn" onClick={showReviews}>
              REVIEWS ({reviews.results?.length})
            </button>
            <button className="related-btn" onClick={showRelatedMovies}>
              RELATED MOVIES ({relatedMovies.results?.length})
            </button>
          </div>
          {select ? (
            <MovieDetailReviews review={reviews.results} />
          ) : (
            <MovieDetailRelatedMovies movie={relatedMovies.results} />
          )}
        </Row>
      </Container>
    );
  }
};

export default MovieDetail;
