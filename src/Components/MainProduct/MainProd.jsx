import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMainProdAsync,
  selectProd,
} from "../../Redux/mainProductSlice/mainProductSlice";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function MainProd() {
  const prods = useSelector(selectProd);
  const newProd = prods?.slice(14,17);
  
  console.log(newProd);
  const dispatch = useDispatch();
  
console.log(prods);
  useEffect(() => {
    dispatch(getMainProdAsync());
  }, []);

 
  return (
    <div className="mainProd">
      {newProd?.map((item) => {
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
              <span>${item.price}</span>
            </div>
            
          </div>
        );
      })}
    </div>
  );
}
