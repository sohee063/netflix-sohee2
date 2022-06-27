import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/MovieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../component/Banner";
import MovieSlide from "../component/MovieSlide";
import { ThreeDots } from "react-loader-spinner";

const Home = () => {
  const dispatch = useDispatch();
  const {
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    loading,
    moviesDetail,
  } = useSelector((state) => state.movie);
  console.log("popular", moviesDetail);
  let bannerImg = Math.floor(Math.random() * 20);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  // loading이 true이면 로딩스피너를 보여주고
  // Loading이 false면 데이터를 보여준다.

  // true : 데이터 도착 전
  // false : 데이터 도착 후, 에러 발생 시
  if (loading) {
    return <ThreeDots color="#00BFFF" height={80} width={80} />;
  } else {
    return (
      <div className="main">
        <Banner movie={upcomingMovies.results[bannerImg]} />
        <h1>Popular Movie</h1>
        <MovieSlide movies={popularMovies} />
        <h1>Top rated Movie</h1>
        <MovieSlide movies={topRatedMovies} />
        <h1>upcoming Movie</h1>
        <MovieSlide movies={upcomingMovies} />
      </div>
    );
  }
};

export default Home;
