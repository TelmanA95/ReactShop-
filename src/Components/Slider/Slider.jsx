import React, { useState } from "react";
import "../Slider/Slider.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { sliderData } from "./SliderData";
export default function Slider() {
  const [currentData, setCurrentData] = useState(0);


  return (
    <div className="mainContainer">
      <div
        className="left"
        onClick={() => {
          currentData > 0 && setCurrentData(currentData - 1);
        }}
      >
        <ChevronLeftIcon />
      </div>
      <div className="slideContiner">
        <div className="jimmy">
          <span className="instIcon">
            {sliderData[currentData].icon}
          </span>
          <div className="text">
            <p>"{sliderData[currentData].text}"</p>
          </div>
          <div className="jimmyTitle">
            <h3> {sliderData[currentData].title}</h3>
          </div>
          <div className="instaTitle">
            <p> {sliderData[currentData].instTitle}</p>
          </div>
        </div>
      </div>
      <div
        className="right"
        onClick={() => {
          currentData < sliderData.length - 1 &&
            setCurrentData(currentData + 1);
        }}
      >
        <KeyboardArrowRightIcon />
      </div>
    </div>
  );
}
