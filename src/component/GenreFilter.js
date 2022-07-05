import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/MovieAction";
import { useSelector } from "react-redux";

const GenreFilter = ({ movie }) => {
  const { genreList } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  console.log("movie", movie);
  console.log("genreList", genreList);
  const [selected, setSelected] = useState();

  const genreSelect = (e) => {
    let filterGenre = genreList.filter((item) => e === item.name)[0].id;
    setSelected(filterGenre);
    console.log("selected", selected);
    let genreArr = movie.filter((el) => el.genre_ids.includes(filterGenre));
    console.log("genreArr", genreArr);
    dispatch(movieAction.getOptionMovie(genreArr));
  };

  return (
    <div>
      {genreList.map((ids, index) => (
        <button
          onClick={() => genreSelect(ids.name)}
          className="genreButton"
          key={index}
        >
          {ids.name}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
