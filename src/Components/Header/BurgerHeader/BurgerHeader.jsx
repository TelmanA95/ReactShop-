import React from "react";
import "../BurgerHeader/BurgerHeader.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { openMobile } from "../../../Redux/mobileMenuSlice/mobileMenuSlice";
export default function BurgerHeader() {
  const dispatch = useDispatch();
  return (
    <div className="burgerHeader">
      <div className="burger">
        <MenuIcon
          className="burgerIcon"
          onClick={() => {
            dispatch(openMobile());
          }}
        />
      </div>
      <img
        className="img"
        src="//cdn.shopify.com/s/files/1/2090/4191/files/morning_logo_wulkan_wider_500x.png?v=1628499327"
        alt=""
      />
      <div className="burgerIcons">
        <SearchIcon />
        <ShoppingBagIcon />
      </div>
    </div>
  );
}
