import "./Main.scss";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectImages } from "../../Redux/SliderSlice/sliderSlice";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
export default function Main() {
  const [current, setCurrent] = useState(0);
  const images = useSelector(selectImages);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <>
      <div className="bigDiv">
        <div className="leftArrow" onClick={prevSlide}>
          <ChevronLeftIcon className="left" />
        </div>
        <div className="rightArrow" onClick={nextSlide}>
          <KeyboardArrowRightIcon className="right" />
        </div>
        {images?.map((img, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={img} />}
            </div>
          );
        })}
        <div className="mainDiv">
          <h2>Less but better</h2>
          <p>
            Less but is one of our guiding principles. Focus on the most
            important elements of each garmend and let go of everthing
            superfluous.
          </p>
          <div>
            <button className="btn">
              <NavLink className={"shopBtn"} to={"/products"}>
                SHOP NOW
              </NavLink>
              <NavigateNextIcon className="icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
