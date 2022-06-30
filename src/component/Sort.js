import React, { useState, useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/MovieAction";

const Sort = ({ movie }) => {
  let dispatch = useDispatch();

  const sortMovieByOption = (event) => {
    console.log(event.target.text);
    switch (event.target.text) {
      case "Popularity ↑":
        return dispatch(
          movieAction.getOptionMovie(
            movie.results.sort((a, b) => a.popularity - b.popularity)
          )
        );
      case "Popularity ↓":
        return dispatch(
          movieAction.getOptionMovie(
            movie.results.sort((a, b) => b.popularity - a.popularity)
          )
        );
      case "Vote ↓":
        return dispatch(
          movieAction.getOptionMovie(
            movie.results.sort((a, b) => a.vote_average - b.vote_average)
          )
        );
      case "Vote ↑":
        return dispatch(
          movieAction.getOptionMovie(
            movie.results.sort((a, b) => b.vote_average - a.vote_average)
          )
        );
      case "Release Day ↓":
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
  // console.log("정렬됐어", sortMovies);

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
    </div>
  );
};

export default Sort;
