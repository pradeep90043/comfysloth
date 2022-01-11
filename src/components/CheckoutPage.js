import React from "react";
import classes from "./CheckoutPage.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";





const CheckoutPage = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
const totalOrderPrice = useSelector((state) => state.cartUpdate.totalPrice)

  return (
    <div>
      <div className={classes.header}>
        <h2>
          Home / <span className={classes.headerProducts}>Checkout</span>
        </h2>
      </div>
      <div className={classes.details} >
        <h3>Hello, {isAuthenticated && user.name} </h3>
        <p >Your total is <span className="price"  > $ {totalOrderPrice.toFixed(2)}</span> </p>
        <p>Test Card Number: 4242 4242 4242 4242</p>
        <div className={classes.input_btn} >
          <input type="text" />
          <button className="btn btn-success" >pay</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
