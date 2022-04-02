import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../Redux/CartModalSlice/cartModalSlice";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import "../ModalCart/ModalCart.scss";
export default function ModalCart() {
  const dispatch = useDispatch();

  return (
    <div className="modalBackgraund">
      <div className="modalContainer">
        <div className="cartTitle">
          <h2>Shopping Cart</h2>
          <span
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            X
          </span>
        </div>
        <div className="cartBody">
          <h3>Your cart is currently empty.</h3>
          <RemoveShoppingCartIcon/>

          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
}
