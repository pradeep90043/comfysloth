import React from "react";
import { Link } from "react-router-dom";
import classes from "./FeaturedProducts.module.css";

const dummy_data = [
  {
    id: "p1",
    img: "https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af",
    name: "Entertainment Center",
    price: "$599.99 ",
  },
  {
    id: "p2",
    img: "https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f",
    name: "High-Back Bench",
    price: "$399.99",
  },
  {
    id: "p3",
    img: "https://dl.airtable.com/.attachmentThumbnails/1e4a818f5184993e430420a152315b40/873c7094",
    name: "Modern Bookshelf",
    price: "$319.99",
  },
];

const FeaturedProducts = () => {
  return (
    <div className={classes.main}>
      <h2>Featured Products</h2>
      <div className={classes.featured}>
        {dummy_data.map((product) => {
          return (
            <div key={product.id} className={classes.products}>
              <img src={product.img} alt={product.id} className={classes.img} />
              <div className={classes.namePrice}>
                <p className={classes.productName}>{product.name}</p>
                <p className={classes.productPrice}>{product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/products">
        <button className="actionBtn">All Products</button>
      </Link>
    </div>
  );
};

export default FeaturedProducts;
