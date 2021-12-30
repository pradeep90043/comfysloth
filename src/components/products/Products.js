import React from "react";
import classes from "./Products.module.css";
import { GrAppsRounded } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSortDown } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";

import dummy_data from "../../APi";
import Slider from "../../UI/Slider";

const Products = () => {
  return (
    <div>
      <div className={classes.header}>
        <h2>
          Home / <span className={classes.headerProducts}>Products</span>
        </h2>
      </div>
      <div className={classes.filtersProducts}>
          
        {/* Filters*/}

        <div className={classes.filters}>
          <input type="text" placeholder="Search" />
          <div className={classes.category}>
            <h3>Category</h3>
            <p>All</p>
            <p>Office</p>
            <p>Living Room</p>
            <p>Litchen</p>
            <p>Bedroom</p>
            <p>Dinning</p>
            <p>Kids</p>
          </div>
          <div className={classes.company}>
            <button>
              all <FaSortDown />
            </button>
          </div>
          <div className={classes.colors}>
            All <BsFillCircleFill style={{ color: "blue" }} />{" "}
            <BsFillCircleFill style={{ color: "yellow" }} />{" "}
            <BsFillCircleFill style={{ color: "green" }} />{" "}
            <BsFillCircleFill style={{ color: "black" }} />{" "}
            <BsFillCircleFill style={{ color: "orange" }} />
          </div>
          <div className={classes.prices}>
            <Slider />
          </div>
          <p>
            Free Shipping{" "}
            <span>
              <input type="checkbox" />{" "}
            </span>{" "}
          </p>
          <button className={classes.clearbtn}>Clear Filters</button>
        </div>

        {/* header sortings */}

        <div className={classes.sortingProducts}>
          <div className={classes.sortingsDiv}>
            <span>
              <GrAppsRounded /> <GiHamburgerMenu />
            </span>
            <span>23 Products found</span>
            <span className={classes.line}></span>
            <span>
              sort price by{" "}
              <button>
                Price (Lowest)
                <FaSortDown />
              </button>
            </span>
          </div>

          {/* products */}
          <div className={classes.products}>
            {dummy_data.map((product) => {
              return (
                <div className={classes.cart} key={product.id}>
                  <img src={product.img} alt={product.name} />
                  <div className={classes.namePrice}>
                    <p>{product.name}</p>
                    <p className={classes.price}>{product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
