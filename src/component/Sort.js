import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/MovieAction";

const Sort = ({ movie }) => {
  let dispatch = useDispatch();
  const [target, setTarget] = useState("");

  const sortMovieByOption = (event) => {
    console.log(event.target.text);
    switch (event.target.text) {
      case "Popularity ↑":
        setTarget(event.target.text);
        return dispatch(
          movieAction.getOptionMovie(
            movie.results.sort((a, b) => a.popularity - b.popularity)
          )
        );
      case "Popularity ↓":
        setTarget(event.target.text);
        return dispatch(
          movieAction.getOptionMovie(
            movie.results.sort((a, b) => b.popularity - a.popularity)
          )
        );
      case "Vote ↓":
        setTarget(event.target.text);
        return dispatch(
          movieAction.getOptionMovie(
            movie.results.sort((a, b) => a.vote_average - b.vote_average)
          )
        );
      case "Vote ↑":
        setTarget(event.target.text);
        return dispatch(
          movieAction.getOptionMovie(
            movie.results.sort((a, b) => b.vote_average - a.vote_average)
          )
        );
      case "Release Day ↓":
        setTarget(event.target.text);
        return dispatch(
          movieAction.getOptionMovie(
            movie.results.sort(
              (a, b) =>
                b.release_date.replace(/\-/g, "") -
                a.release_date.replace(/\-/g, "")
            )
          )
        );

      case "Release Day ↑":
        setTarget(event.target.text);
        return dispatch(
          movieAction.getOptionMovie(
            movie.results.sort(
              (a, b) =>
                a.release_date.replace(/\-/g, "") -
                b.release_date.replace(/\-/g, "")
            )
          )
        );
      default:
        return dispatch(movieAction.getOptionMovie(movie));
    }
  };

  return (
    <div>
      <NavDropdown
        id="nav-dropdown-dark-example"
        title="Sort"
        menuVariant="dark"
      >
        <NavDropdown.Item onClick={sortMovieByOption}>
          Popularity ↓
        </NavDropdown.Item>
        <NavDropdown.Item onClick={sortMovieByOption}>
          Popularity ↑
        </NavDropdown.Item>

        <NavDropdown.Item onClick={sortMovieByOption}>Vote ↓</NavDropdown.Item>
        <NavDropdown.Item onClick={sortMovieByOption}>Vote ↑</NavDropdown.Item>

        <NavDropdown.Item onClick={sortMovieByOption}>
          Release Day ↓
        </NavDropdown.Item>
        <NavDropdown.Item onClick={sortMovieByOption}>
          Release Day ↑
        </NavDropdown.Item>
      </NavDropdown>
      <h3 className="targetValue">{target}</h3>
    </div>
  );
};

export default Sort;
