import React from "react";
import classes from "./CartPage.module.css";
import { BsSquareFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const CartPage = () => {
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
      <div className={classes.items}>
        <div className={classes.item}>
          <img
            src="https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359"
            alt="g"
          />
          <div className={classes.nameColor}>
            <p>Moder Poster</p>
            <p>
              Color : <BsSquareFill style={{ color: "blue" }} />{" "}
            </p>
          </div>
        </div>
        <div className={classes.price}>
          <p>$30.99</p>
        </div>
        <div className={classes.quantity}>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <div className={classes.subtotal}>
          <p>$30.99</p>
        </div>
        <div className={classes.delete}>
          <MdDelete style={{ color: "white", background: "red" }} />
        </div>
      </div>
      <hr />
      <div className={classes.actions}>
        <button>Continue Shopping</button>
        <button>Clear Cart</button>
      </div>
      <div className={classes.loginTotal}>
        <div className={classes.total}>
          <div className={classes.carttotal}>
            <p>Subtotal : </p>
            <p>$156.98</p>
          </div>
          <div className={classes.carttotal}>
            <p>Shipping Fee : </p>
            <p>$5.34</p>
          </div>
          <hr />
          <div className={classes.carttotal}>
            <p>Order Total :</p>
            <p>$162.32</p>
          </div>
        </div>
        <button className={classes.action}>LOGIN</button>
      </div>
    </div>
  );
};

export default CartPage;
