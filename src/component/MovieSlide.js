import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";
// import { Carousel } from "react-bootstrap";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },

  tablet1: {
    breakpoint: { max: 2024, min: 464 },
    items: 5,
  },
  tablet2: {
    breakpoint: { max: 1524, min: 464 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const MovieSlide = ({ movies }) => {
  return (
    <Carousel responsive={responsive} centerMode={true}>
      {movies.results.map((item, index) => (
        <MovieCard item={item} key={index} />
      ))}
    </Carousel>

    // <Carousel responsive={responsive} indicators={false}>
    //   {movies.results.map((item, index) => (
    //     <Carousel.Item>
    //       <div className="each-slider">
    //         <MovieCard item={item} key={index} />;
    //       </div>
    //     </Carousel.Item>
    //   ))}
    //   ;
    // </Carousel>
  );
};

export default MovieSlide;

{
  /* <Carousel responsive={responsive}>
  {topMovie.map((array) => {
    return (
      <Carousel.Item>
        <div className="each-slider">
          {array.map((movie) => {
            return <SingleCardSlider movie={movie}></SingleCardSlider>;
          })}
        </div>
      </Carousel.Item>
    );
  })}
</Carousel>; */
}
