import React from "react";
import { Container, Row } from "react-bootstrap";

const MovieDetailReviews = ({ review }) => {
  console.log("알고싶은것", review);
  return (
    <Container className="relativeMovieBanner">
      <div className="review-box">
        {review?.map((item) => (
          <div className="one-review ">
            <div className="review-author">{item.author}</div>
            <div className="review-content">{item.content}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MovieDetailReviews;
