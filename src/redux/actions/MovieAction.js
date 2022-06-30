import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies(movieId) {
  console.log("ID?", movieId);

  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });

      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=${Math.floor(
          Math.random() * 20
        )}`
      );

      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${Math.floor(
          Math.random() * 20
        )}`
      );

      const upcomingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${Math.floor(
          Math.random() * 20
        )}`
      );

      const genreApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      const allMovieApi = api.get(
        `movie/now_playing?api_key=${API_KEY}&language=en-US`
      );
      let [
        popularMovies,
        topRatedMovies,
        upcomingMovies,
        genreList,
        allMovies,
      ] = await Promise.all([
        popularMovieApi,
        topRatedApi,
        upcomingApi,
        genreApi,
        allMovieApi,
      ]);
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
          genreList: genreList.data.genres,
          allMovies: allMovies.data,
        },
      });
    } catch (error) {
      //에러 핸들링 하는 곳
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

function getDetailMovies(movieId) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const movieDetailApi = api.get(
        `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      let movieDetail = await movieDetailApi;
      dispatch({
        type: "GET_MOVIES_DETAIL",
        payload: {
          movieDetail: movieDetail.data,
        },
      });
    } catch (error) {
      //에러 핸들링 하는 곳
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

function getRelatedMovies(movieId) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const relatedMoviesApi = api.get(
        `/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      );
      let relatedMovies = await relatedMoviesApi;
      dispatch({
        type: "GET_RELATED_MOVIES",
        payload: {
          relatedMovies: relatedMovies.data,
        },
      });
    } catch (error) {
      //에러 핸들링 하는 곳
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

function getReviews(movieId) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const reviewsApi = api.get(
        `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );
      let reviews = await reviewsApi;
      dispatch({
        type: "GET_REVIEWS",
        payload: {
          reviews: reviews.data,
        },
      });
    } catch (error) {
      //에러 핸들링 하는 곳
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}

function getOptionMovie(optionMovies) {
  return (dispatch) => {
    dispatch({ type: "GET_MOVIES_REQUEST" });
    dispatch({
      type: "GET_OPTION_MOVIES",
      payload: {
        optionMovies: optionMovies,
      },
    });
  };
}

export const movieAction = {
  getMovies,
  getDetailMovies,
  getRelatedMovies,
  getReviews,
  getOptionMovie,
};
