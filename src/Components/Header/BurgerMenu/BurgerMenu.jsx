import { useDispatch, useSelector } from "react-redux";
import { SocialIcon } from "react-social-icons";

import {
  closeMobile,
  selectMobile,
} from "../../../Redux/mobileMenuSlice/mobileMenuSlice";
import "../BurgerMenu/BurgerMenu.scss";
export default function BurgerMenu() {
  const dispatch = useDispatch();
  const mobileStatus = useSelector(selectMobile);
  return (
    <div
      className="burgerBackgraund"
      onClick={() => {
        dispatch(closeMobile());
      }}
    >
      <div
        className="burgerMenu"
        onClick={(e) => e.stopPropagation()}
      >
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
        <div className="searchPanel">
          <input placeholder="Seacrh our store..." />
        </div>
        <div className="mobileFooter">
          <h4>Contact</h4>
          <p>(805)6430737</p>
          <p>store@email.com</p>
          <ul className="socialIcons">
            <SocialIcon url="https://twitter.com/safeasmilkco" />
            <SocialIcon url="https://www.pinterest.com/shopify/" />
            <SocialIcon url="https://www.instagram.com/shopify/" />
          </ul>
          <img
            className="mobileImg"
            src="https://cdn.shopify.com/s/files/1/2090/4191/files/mega-nav-image-morning_lighter_b0de0309-1dd4-4d33-bea1-9e14dd1a3944_900x.jpg?v=1517841336"
          />
        </div>
      </div>
    </div>
  );
}
