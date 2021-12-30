import React from "react";
import classes from "./JoinNow.module.css";

const JoinNow = () => {
  return (
    <>
      <div className={classes.mainJoin}>
        <h2>Join our newsletter and get 20% off</h2>
        <div className={classes.descriptionEmail}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <div className={classes.emailbtn}>
            <input type="email" placeholder="Enter Email" />
            <span>
              <button>Subscribe</button>
            </span>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default JoinNow;
