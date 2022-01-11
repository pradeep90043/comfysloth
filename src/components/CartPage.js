import React from "react";
import classes from "./CartPage.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AvailableItems from "./AvailableItems";
import { Clear } from "../actions/index";
import { useAuth0 } from "@auth0/auth0-react";

const CartPage = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartUpdate.cartItems);
  console.log(cartState);
  const subOrderTotal = useSelector((state) => state.cartUpdate.totalPrice);
  const orderTotal = 5.35 + subOrderTotal;
  return (
    <div>
      <div className={classes.header}>
        <h2>
          Home / <span className={classes.headerProducts}>Cart</span>
        </h2>
      </div>
      <div className={classes.cartItems}>
        <div className={classes.titles}>
          <p>item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        <hr />
      </div>
      {cartState.map((item) => {
        return <AvailableItems item={item} key={item.id} />;
      })}
      <hr />
      <div className={classes.actions}>
        <Link to="/products">
          <button className="actionBtn">Continue Shopping</button>
        </Link>
        <button
          className="actionBtn"
          style={{ background: "black" }}
          onClick={() => dispatch(Clear())}
        >
          Clear Cart
        </button>
      </div>

      {/* total box     */}

      <div className={classes.loginTotal}>
        <div className={classes.total}>
          <div className={classes.carttotal}>
            <p>Subtotal : </p>
            <p className="price">$ {subOrderTotal.toFixed(2)}</p>
          </div>
          <div className={classes.carttotal}>
            <p>Shipping Fee : </p>
            <p className="price">$5.34</p>
          </div>
          <hr />
          <div className={classes.carttotal}>
            <p>Order Total :</p>
            <p className="price">$ {orderTotal.toFixed(2)} </p>
          </div>
        </div>
        {!isAuthenticated ? (
          <button
            className={classes.action}
            onClick={() => loginWithRedirect()}
          >
            LOGIN
          </button>
        ) : (
          <Link to="/checkout" style={{textAlign:"center"}} className={classes.action}>
            proceed to checkout
          </Link>
        )}
      </div>
    </div>
  );
};

export default CartPage;
