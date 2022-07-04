import React from "react";
import { Container, Row } from "react-bootstrap";
import MovieDetailRelatedMoviesCard from "./MovieDetailRelatedMoviesCard";

const MovieDetailRelatedMovies = ({ movie }) => {
  return (
    <Container className="relativeMovieBanner">
      <Row mt={50}>
        {movie.map((item, index) => (
          <MovieDetailRelatedMoviesCard item={item} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default MovieDetailRelatedMovies;
