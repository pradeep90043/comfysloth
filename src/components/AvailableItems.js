import React, {  useState } from "react";
import classes from "./CartPage.module.css";
import { BsSquareFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AddToCart } from "../actions";
import { Remove } from "../actions";


const AvailableItems = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const totalPrice = item.price * quantity
  const dispatch = useDispatch()


  const increment = () => {
    setQuantity(quantity+1)
dispatch(AddToCart({...item, quantity:1}))

  }
  const decrement = () => {
    setQuantity(quantity-1)
dispatch(AddToCart({...item, quantity: -1}))

  }

  return (
    <>
      <div className={classes.items}>
        <div className={classes.item}>
          <img src={item.img} alt={item.name} />
          <div className={classes.nameColor}>
            <p>{item.name}</p>
            <p className={classes.color} >
              Color : <BsSquareFill style={{ color: item.color }} />{" "}
            </p>
          </div>
        </div>
        <div className={classes.price}>
          <p>{item.price}</p>
        </div>
        <div className={classes.quantity}>
          <span onClick={decrement}>-</span>
          <span>{quantity}</span>
          <span onClick={increment}>+</span>
        </div>
        <div className={classes.subtotal}>
          <p className="price">$ {totalPrice.toFixed(2)}</p>
        </div>
        <div className={classes.delete}>
          <MdDelete className={classes.deleteBtn}  onClick={()=>dispatch(Remove(item.id))} />
        </div>
      </div>
    </>
  );
};

export default AvailableItems;
