import React from "react";
import classes from "./FirstPage.module.css";

const FirstPage = () => {
  return (
    <>
      <section className={classes.sectionFirst}>
        <div className={classes.secFirstDesc}>
          <h2>Design Your Comfort Zone</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <button className={classes.actions}>SHOP NOW</button>
        </div>
        <div className={classes.secFirstImg}>
          <img
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg"
            alt="img1"
            className={classes.img1}
          />
          <img
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.78991864.jpeg"
            alt="img2"
            className={classes.img2}
          />
        </div>
      </section>
    </>
  );
};

export default FirstPage;
