import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  faStar,
  faUsers,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SettingMovies = ({ movie }) => {
  const { genreList } = useSelector((state) => state.movie);
  console.log("장르", genreList);
  console.log("movie", movie);
  return (
    <Row mt={50}>
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
              <h1 className="sortedtitle">{item?.title}</h1>
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
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default SettingMovies;
