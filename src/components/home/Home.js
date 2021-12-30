import React from "react";
import BuiltForYou from "./BuiltForYou";
import FeaturedProducts from "./FeaturedProducts";
import FirstPage from "./FirstPage";
import classes from "./Home.module.css";
import JoinNow from "./JoinNow";

const Home = () => {
  return (
    <div className={classes.home}>
      <FirstPage />
      <FeaturedProducts />
      <BuiltForYou />
      <JoinNow />
    </div>
  );
};

export default Home;
