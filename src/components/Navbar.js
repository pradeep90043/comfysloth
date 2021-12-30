import React from "react";
import { Link, NavLink } from "react-router-dom";
import Cart from "./Cart/Cart";
import classes from "./Navbar.module.css";
import LogInIcon from "../components/Cart/LogInIcon";

const Navbar = () => {
  console.log("hello");
  return (
    <nav className={classes.nav}>
      <div className={classes.main}>
        <NavLink to="/" className={classes.logo}>
          <img
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
            alt="logo"
          />
        </NavLink>
        <div className={classes.pageLinks}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </div>
        <div className={classes.cart}>
          <Link to="/cart">
            <Cart />
          </Link>
          <Link to="/name" className={classes.logIn} >
            <span>Log In</span>
            <LogInIcon />
          </Link>
        </div>
        <div className={classes.logIn}></div>
      </div>
    </nav>
  );
};

export default Navbar;
