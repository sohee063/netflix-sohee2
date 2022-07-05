import React, { useEffect, useState } from "react";
import TooltipSlider from "rc-slider";
import "rc-slider/assets/index.css";
import { useDispatch } from "react-redux";
import { movieAction } from "../redux/actions/MovieAction";

const Filter = ({ movie }) => {
  let dispatch = useDispatch();

  // console.log("movie", movie);

  let newArr = movie
    .map((item) => item.release_date)
    .sort((a, b) => a.replace(/\-/g, "") - b.replace(/\-/g, ""));

  // .sort((a, b) => a - b);
  let filterRangeYear = newArr.map((item) => {
    return item.replace(/\-/g, "");
  });

  let indexArr = movie.map((item) => {
    // console.log("item Release", item.release_date);
    return newArr.indexOf(item.release_date);
  });
  // .forEach((el) => {
  //   return movie[el];
  // });

  //substring(0, 4)

  let resArr = [];
  for (let i = 0; i < indexArr.length; i++) {
    resArr[indexArr[i]] = movie[i];
  }
  const [first, setFirst] = useState(
    filterRangeYear[0]
      ? filterRangeYear[0].substring(0, 4)
      : filterRangeYear[1].substring(0, 4)
  );
  const [last, setLast] = useState(
    filterRangeYear[filterRangeYear.length - 1].substring(0, 4)
  );
  // console.log("newArr", newArr);
  // console.log("indexArr", indexArr);
  // console.log("resArr", resArr);

  // let resArr2 = resArr.map((item) => item.release_date);
  // console.log("resArr2", resArr2);

  // console.log("얻고싶은것", resArr.splice(1, 4));

  const filterPoint = (event) => {
    // console.log("event", event);
    setFirst(String(event[0]).substring(0, 4));
    setLast(String(event[1]).substring(0, 4));
    // dispatch(movieAction.getOptionMovie(resArr.splice(1, event[1] + 1)));
    let finalArr = resArr.filter((item) => {
      return (
        item.release_date.replace(/\-/g, "") >= event[0] &&
        item.release_date.replace(/\-/g, "") <= event[1]
      );
    });
    // console.log("최최최", finalArr);
    dispatch(movieAction.getOptionMovie(finalArr));
    // console.log("핳하ㅏ", first, last);
  };

  return (
    <div>
      <h3 className="filterMovies-title">YEAR Filter</h3>
      <TooltipSlider
        range
        min={Number(
          filterRangeYear[0] ? filterRangeYear[0] : filterRangeYear[1]
        )}
        max={Number(filterRangeYear[filterRangeYear.length - 1])}
        // min={1980}
        // max={2022}
        defaultValue={[
          // Number(filterRangeYear[0] ? filterRangeYear[0] : filterRangeYear[1]),
          // Number(filterRangeYear[filterRangeYear.length - 1]),
          // 1980,
          // 2022,
          filterRangeYear[0] ? filterRangeYear[0] : filterRangeYear[1],
          filterRangeYear[filterRangeYear.length - 1],
        ]}
        tipFormatter={(value) => `${value}!`}
        pushable={true}
        onChange={filterPoint}
      />

      <h4 className="filterMovies-range">
        {/* From{" "}
        {newArr[0] === ""
          ? newArr[1].substring(0, 4)
          : newArr[0].substring(0, 4)}{" "}
        ~ to {newArr[newArr.length - 1].substring(0, 4)} */}
        From {first} ~ to {last}
      </h4>
    </div>
  );
};

export default Filter;
