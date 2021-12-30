import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <h2>
          Home / <span className={classes.about}>About</span>
        </h2>
      </div>
      <div className={classes.imgDesc}>
        <img
          src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg"
          alt=""
        />
        <div className={classes.description}>
          <h1>Our Story</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
