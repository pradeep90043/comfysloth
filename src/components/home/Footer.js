import React from "react";
import classes from "./JoinNow.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.footter}>
        <p>
          © 2022 <span className={classes.name}> ComfySloth </span> All rights
          reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
