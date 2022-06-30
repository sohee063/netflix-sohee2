import React, { useEffect } from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { movieAction } from "../redux/actions/MovieAction";

const SettingMovieCard = ({ item }) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { genreList } = useSelector((state) => state.movie);

  console.log("dksshd", item);

  const moveToMovieDetail = () => {
    // console.log("data", item);
    navigate(`/movies/${item.id}`);
    dispatch(movieAction.getDetailMovies(item.id));
  };
  return (
    <Col className="relatedRow">
      <div
        onClick={moveToMovieDetail}
        className="sortedMovies"
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w600_and_h900_bestv2//${item?.poster_path}` +
            ")",
        }}
      >
        <div className="sortedInfo">
          <h1 className="sortedtitle-1">{item?.title}</h1>
          <div>
            {item?.genre_ids.map((ids, index) => (
              <Badge className="detailInfoGenre" key={index} bg="danger">
                {genreList.find((item) => item.id === ids).name}
              </Badge>
            ))}
          </div>
          <p>{item?.overview}</p>
          <span>
            <FontAwesomeIcon color="yellow" icon={faStar} />{" "}
            {item?.vote_average}{" "}
          </span>
          <span>
            <FontAwesomeIcon color="tomato" icon={faUsers} /> {item?.popularity}{" "}
          </span>
          <span className="detailInfoAdult">
            {item?.adult ? "청불" : "Under 18"}
          </span>
          <span>
            <FontAwesomeIcon color="tomato" icon={faUsers} />{" "}
            {item?.release_date}{" "}
          </span>
        </div>
      </div>
    </Col>
  );
};

export default SettingMovieCard;
