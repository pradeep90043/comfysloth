import React from "react";
import classes from "./Cart.module.css";
import CartIcon from "./CartIcon";

const Cart = () => {
  return (
    <>
      <div>
        <span className={classes.cart}>
          <span>Cart</span> <CartIcon />
          <span className={classes.cartAmount}>1</span>
        </span>
      </div>
    </>
  );
};

export default Cart;
