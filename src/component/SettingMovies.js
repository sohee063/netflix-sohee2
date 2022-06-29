import React, { useEffect } from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { movieAction } from "../redux/actions/MovieAction";

const SettingMovies = ({ movie }) => {
  const { genreList } = useSelector((state) => state.movie);
  // console.log("옵션", movie);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  return (
    <Row>
      {movie.map((item) => (
        <Col className="relatedRow">
          <div
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
                <FontAwesomeIcon color="tomato" icon={faUsers} />{" "}
                {item?.popularity}{" "}
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
      ))}
    </Row>
  );
};

export default SettingMovies;
