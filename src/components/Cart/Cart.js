import React from "react";
import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import CartIcon from "./CartIcon";


const Cart = () => {
  const totalQuantityProducts = useSelector((state)=> state.cartUpdate.totalQuantity)

  console.log(totalQuantityProducts);
  return (
    <>
      <div>
        <span className={classes.cart}>
          <span>Cart</span> <CartIcon />
          <span className={classes.cartAmount}>{totalQuantityProducts} </span>
        </span>
      </div>
    </>
  );
};

export default Cart;
