import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeMobile,
  selectMobile,
} from "../../../Redux/mobileMenuSlice/mobileMenuSlice";
import "../BurgerMenu/BurgerMenu.scss";
export default function BurgerMenu() {
  const dispatch = useDispatch();
  const mobileStatus = useSelector(selectMobile);
  return (
    <div className="burgerBackgraund">
      <div className={mobileStatus ? "burgerMenu openMenu" : "burgerMenu"}>
        <span
          onClick={() => {
            dispatch(closeMobile());
          }}
        >
          x
        </span>
        <nav className="mobileNav">
          <ul>
            <li>All Products</li>
            <hr />
            <li>About</li>
            <hr />
            <li>FAQ</li>
            <hr />
            <li>Blog</li>
            <hr />
            <li>Contact</li>
            <hr />
            <li>Log in</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
