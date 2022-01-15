import React from "react";
import { Link, } from "react-router-dom";
import Cart from "./Cart/Cart";
import classes from "./Navbar.module.css";
import LogInIcon from "../components/Cart/LogInIcon";
import { useAuth0 } from "@auth0/auth0-react";
import { RiLogoutBoxRFill } from "react-icons/ri";


const Navbar = () => {
  const { loginWithRedirect , isAuthenticated ,logout} = useAuth0();


  console.log("hello");
  return (
    <nav className={classes.nav}>
      <div className={classes.main}>
        <Link to="/" className={classes.logo}>
          <img
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg"
            alt="logo"
          />
        </Link>
        <div className={classes.pageLinks}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </div>
        <div className={classes.cart}>
          <Link to="/cart">
            <Cart />
          </Link>
         { ! isAuthenticated ? <div onClick={()=>loginWithRedirect()} className={classes.logIn} >
            <span>Log In</span>
            <LogInIcon />
          </div> : <div onClick={()=>logout()} className={classes.logIn} >
            <span>Log Out</span>
            <RiLogoutBoxRFill />
          </div> }
        </div>
        <div className={classes.logIn}></div>
      </div>
    </nav>
  );
};

export default Navbar;
