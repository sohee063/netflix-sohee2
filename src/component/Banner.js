import React from "react";
import { useNavigate } from "react-router-dom";
import { movieAction } from "../redux/actions/MovieAction";
import { useDispatch } from "react-redux";

const Banner = ({ movie }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToMovieDetail = () => {
    navigate(`/movies/${movie.id}`);
    dispatch(movieAction.getDetailMovies(movie.id));
  };

  return (
    <div
      onClick={goToMovieDetail}
      className="banner"
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path})`,
      }}
    >
      <div className="banner-info">
        <h1>{movie?.title}</h1>
        <p>{movie?.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
