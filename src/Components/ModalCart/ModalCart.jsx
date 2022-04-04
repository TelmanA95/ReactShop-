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
        
        </div>
        <div className="cartBody">
          <h5>Your cart is currently empty.</h5>
          <RemoveShoppingCartIcon className="icon"/>

          <button>Shop Now</button>
        </div>
        <span
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            X
          </span>
      </div>
    </div>
  );
}
