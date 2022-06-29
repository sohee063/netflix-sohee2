import React from "react";
import TooltipSlider from "rc-slider";
import "rc-slider/assets/index.css";

const Filter = () => {
  return (
    <TooltipSlider
      range
      min={0}
      max={20}
      defaultValue={[3, 10]}
      tipFormatter={(value) => `${value}!`}
      pushable={true}
    />
  );
};

export default Filter;
