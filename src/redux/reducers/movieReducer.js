let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  allMovies: {},
  loading: true,
  genreList: [],
  movieDetail: {},
  relatedMovies: {},
  reviews: {},
  optionMovies: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upcomingMovies: payload.upcomingMovies,
        genreList: payload.genreList,
        loading: false,
        optionMovies: payload.popularMovies.results,
        allMovies: payload.allMovies,
      };
    case "GET_MOVIES_DETAIL":
      return {
        ...state,
        movieDetail: payload.movieDetail,
        loading: false,
      };
    case "GET_RELATED_MOVIES":
      return {
        ...state,
        relatedMovies: payload.relatedMovies,
        loading: false,
      };
    case "GET_REVIEWS":
      return {
        ...state,
        reviews: payload.reviews,
        loading: false,
      };
    case "GET_OPTION_MOVIES":
      return {
        ...state,
        optionMovies: payload.optionMovies,
        loading: false,
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
