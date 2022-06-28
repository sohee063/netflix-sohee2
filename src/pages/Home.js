import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/MovieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../component/Banner";
import MovieSlide from "../component/MovieSlide";
import { ThreeDots } from "react-loader-spinner";
import { Container } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);
  let bannerImg = Math.floor(Math.random() * 20);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  // loading이 true이면 로딩스피너를 보여주고
  // Loading이 false면 데이터를 보여준다.

  // true : 데이터 도착 전
  // false : 데이터 도착 후, 에러 발생 시
  if (loading) {
    return (
      <div className="spinner">
        <ThreeDots color="grey" height={80} width={80} />
      </div>
    );
  } else {
    return (
      <div className="main">
        <Banner movie={popularMovies?.results[bannerImg]} />
        <div className="movieslide">
          <div>
            <h1 className="movieslide-title">Popular Movies</h1>
            <MovieSlide movies={popularMovies} />
          </div>
          <div>
            <h1 className="movieslide-title">Top rated Movies</h1>
            <MovieSlide movies={topRatedMovies} />
          </div>
          <div>
            <h1 className="movieslide-title">upcoming Movies</h1>
            <MovieSlide movies={upcomingMovies} />
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
