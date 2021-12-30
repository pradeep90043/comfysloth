import React from "react";
import classes from "./InsidePage.module.css";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const InsidePage = () => {
  return (
    <div>
      <div className={classes.header}>
        <h2>
          Home / <span className={classes.headerProductName}>Products</span>
          <span className={classes.headerProductName}>/ Name</span>
        </h2>
      </div>
      <div className={classes.goBack}>
        <Link to="/products">
          <button className="actionBtn">BACK TO PRODUCTS</button>
        </Link>
      </div>
      <div className={classes.imgDescription}>
        <div className={classes.images}>
          <img
            src="https://dl.airtable.com/.attachments/7e3a7ce2ef8e11da40f1b6617e4885e3/565bf916/product-7.jpg"
            alt="name"
            className={classes.mainImg}
          />
          <div className={classes.smallImgs}>
            <img
              src="https://dl.airtable.com/.attachments/7e3a7ce2ef8e11da40f1b6617e4885e3/565bf916/product-7.jpg"
              alt="name"
            />
            <img
              src="	https://dl.airtable.com/.attachments/f15406a7d5734462ccbe033523ab44f2/36f645ba/extra-1.jpeg"
              alt="name"
            />
            <img
              src="https://dl.airtable.com/.attachments/7a2335390d5403fa6f30e5da7c529a1a/8074a08a/extra-2.jpeg"
              alt="name"
            />
            <img
              src="https://dl.airtable.com/.attachments/f026e088c27b48e3d0333c1bb2f89875/8323e097/extra-3.jpeg"
              alt="name"
            />
            <img
              src="	https://dl.airtable.com/.attachments/e789790777f02ec1068c6e12a31b9b8d/9f9968d0/extra-4.jpeg"
              alt="name"
            />
          </div>
        </div>
        <div className={classes.desceription}>
          <h2>Modern Bookshelf</h2>
          <p>
            <AiFillStar style={{ color: "#c1c11c" }} />
            <AiFillStar style={{ color: "#c1c11c" }} />
            <AiFillStar style={{ color: "#c1c11c" }} />
            <FaStarHalfAlt style={{ color: "#c1c11c" }} />
            <AiOutlineStar style={{ color: "#c1c11c" }} />{" "}
            <span>(100 customer reviews)</span>
          </p>
          <p>$30.99</p>
          <p>
            Cloud bread VHS hell of banjo bicycle rights jianbing umami
            mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
            waistcoat, authentic chillwave trust fund. Viral typewriter
            fingerstache pinterest pork belly narwhal. Schlitz venmo everyday
            carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag
            kinfolk microdosing gochujang live-edge
          </p>
          <div className={classes.separate}>
            <p>Available :</p>
            <p>In Stock</p>
          </div>
          <div className={classes.separate}>
            <p>SKU :</p>
            <p>RecQ0fMd8T0Vk211E</p>
          </div>
          <div className={classes.separate}>
            <p>Brand :</p>
            <p>Liddy</p>
          </div>
          <hr />
          <div className={classes.separate}>
            <p>Colors :</p>
            <p>
              <BsFillCircleFill />
            </p>
          </div>
          <div className={classes.addRemove} >
            <button className={classes.change}>-</button>
            <span className={classes.amount}>1</span>
            <button className={classes.change}>+</button>
          </div>
          <button className="actionBtn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default InsidePage;