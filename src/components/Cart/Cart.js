import React from "react";
import classes from "./Cart.module.css";
import CartIcon from "./CartIcon";

const Cart = () => {
  return (
    <>
      <div className={classes.cartIcon}>
        <span>
          <span>Your cart</span> <CartIcon />
        </span>
      </div>
    </>
  );
};

export default Cart;
