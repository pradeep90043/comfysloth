import React from "react";
import classes from "./FeaturedProducts.module.css";

import { SiTarget } from "react-icons/si";
import { GiDiamondHard } from "react-icons/gi";
import { RiFilePaper2Fill } from "react-icons/ri";

const dummy_data = [
  {
    id: "m1",
    icon: <SiTarget />,
    name: "Mission",
    describtion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: "m1",
    icon: <GiDiamondHard />,
    name: "Vision",
    describtion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: "m1",
    icon: <RiFilePaper2Fill />,
    name: "History",
    describtion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

const BuiltForYou = () => {
  return (
    <div className={classes.Built}>
      <div className={classes.describtions}>
        <h2>Custom Furniture Built Only For You</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </p>
      </div>
      <div className={classes.cards}>
        {dummy_data.map((data) => {
          return (
            <div className={classes.card}>
              <span className={classes.icons}>{data.icon}</span>
              <br />
              <h3>{data.name}</h3>
              <p>{data.describtion}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuiltForYou;
