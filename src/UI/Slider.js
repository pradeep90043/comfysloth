import classes from "./Slider.module.css";

export default function App({ FilterPrice, price }) {
  return (
    <div className={classes.sliderParent}>
      <div className={classes.buble}>$ {price}</div>
      <br />
      <input
        id="slider"
        type="range"
        min="1"
        max="3099.99"
        value={price}
        onChange={({ target: { value: radius } }) => {
          FilterPrice(radius);
        }}
      />
    </div>
  );
}
