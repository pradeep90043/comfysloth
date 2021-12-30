import React, { useState, useEffect } from "react";
import  classes from "./Slider.module.css";

export default function App() {
  const [value, onChange] = useState(1);

  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });

  return (
    <div className={classes.sliderParent}>
        <div className={classes.buble}>$ {value}</div>
        <br/>
      <input
        type="range"
        min="1"
        max="3099.99"
        value={value}
        onChange={({ target: { value: radius } }) => {
          onChange(radius);
        }}
      />
    </div>
  );
}