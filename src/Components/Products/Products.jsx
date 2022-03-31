import React, { useEffect } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useDispatch, useSelector } from "react-redux";
import {
  getProdAsync,
  selectProd,
} from "../../Redux/productSlice/productSlice";
import "../Products/Products.scss";
export default function Products() {
  const prods = useSelector(selectProd);
  const dispatch = useDispatch();
  console.log(prods);

  useEffect(() => {
    dispatch(getProdAsync());
  }, []);

  return (
    <div className="prods">
<div className="titleStore">
        <h2>The Store</h2>
        <div className="line"></div>
        <div className="storeTxt">
          <span>
            Choose well and buy less. We believe in owning fewer, quality things
            and making them last a long time. That’s why if any of our product
            ever breaks down, you can send it back to us and we’ll repair it.
          </span>
      </div>

        </div>
        <div className="mainProd">
      
      {prods?.map((item) => {
        return (
          <div className="product">
            <div className="imgDiv">
              <img src={item.image}></img>
              <div className="option">
                <div className="optionDiv">
                  <p>SELECT OPTIONS </p>
                  <NavigateNextIcon />
                </div>
              </div>
            </div>
            <div className="nameDivs">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
    </div>
   
  );
}
