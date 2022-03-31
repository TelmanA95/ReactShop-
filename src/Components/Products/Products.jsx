import React, { useEffect } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useDispatch, useSelector } from "react-redux";
import {
  getProdAsync,
  selectProd,
} from "../../Redux/productSlice/productSlice";
import "../Products/Products.scss"
export default function Products() {
  const prods = useSelector(selectProd);
  const dispatch = useDispatch();
  console.log(prods);

  useEffect(() => {
    dispatch(getProdAsync());
  }, []);

  return (
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
            <div className="nameDiv">
              <h3>{item.title}</h3>
              <span>${item.price}</span>
            </div>
            
          </div>
        );
      })}
    </div>
  );
}
