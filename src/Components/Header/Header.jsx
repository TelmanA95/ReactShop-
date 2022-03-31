import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import "./Header.scss";
export default function Header() {
  const [isHeaderShow, setIsHeaderShow] = useState(false);

  const controlHeader = () => {
    if (window.scrollY > 100) {
      setIsHeaderShow(true);
    } else {
      setIsHeaderShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);

  return (
    <div className={`header ${isHeaderShow && "hideHeader"}`}>
      <nav className="nav">
        <ul>
          <li>
            <a>HOME</a>
          </li>
          <li>
            <NavLink className={"products"} to={"/products"}>All PRODUCTS</NavLink>
          </li>

          <li>
            <a>ABOUT</a>
          </li>

          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>BLOG</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </nav>
      <NavLink to={"/"}>
        
        <img 
          className="img"
          src="//cdn.shopify.com/s/files/1/2090/4191/files/morning_logo_wulkan_wider_500x.png?v=1628499327"
          alt=""
        />
      </NavLink>
      <nav className="nav2">
        <ul>
          <li>UNITED STATES (USD $)</li>
          <li>LOG IN</li>

          <li>CART</li>
          <li className="BsSearch"><SearchIcon /></li>
        </ul>
      </nav>
    </div>
  );
}