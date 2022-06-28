import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const MovieDetailRelatedMovies = ({ movie }) => {
  //   let { poster_path, id, title } = movie.results;
  return (
    <Container className="relativeMovieBanner">
      <Row mt={50}>
        {movie.map((item) => (
          <Col className="relatedRow" xl={6} lg={4}>
            <div
              className="relatedMovies"
              style={{
                backgroundImage:
                  "url(" +
                  `https://www.themoviedb.org/t/p/w600_and_h900_bestv2//${item?.poster_path}` +
                  ")",
              }}
            ></div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieDetailRelatedMovies;
