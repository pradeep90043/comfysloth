import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart/Cart";
import classes from "./Navbar.module.css";
import LogInIcon from "../components/Cart/LogInIcon";

const Navbar = () => {
  console.log("hello");
  return (
    <nav className={classes.nav}>
      <div className={classes.main}>
        <div className={classes.logo}>
          <img
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
            alt="logo"
          />
        </div>
        <div className={classes.pageLinks}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </div>
        <div className={classes.cart}>
          <Link to="/cart">
            <Cart />
          </Link>
          <span>
            <span>Log In</span>
            <LogInIcon />
          </span>
        </div>
        <div className={classes.logIn}></div>
      </div>
    </nav>
  );
};

export default Navbar;
