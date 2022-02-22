import React from "react";
import { Rating } from "@mui/material";
import "./BasketItem.css";
import { useDispatch , useSelector} from "react-redux";
import removeFromBasket from "../../../actions/removeFromBasket";
const Basketitem = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();
  const basket = useSelector(state=>state.basket)
  const removeItem = () => {
    console.log("basket length is : ", basket.length)
    console.log("item id is : "+id)
    dispatch(removeFromBasket(id));
    console.log("dispatch occured")
    console.log("basket length is : ", basket.length)
    console.log(basket)

  };
  return (
    <div className="basketItem">
      <img src={image} alt="" className="basketItem__image" />
      <div className="basketItem__info">
        <p className="basketItem__title">{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
          className="basketItem__rating"
        />
        <button onClick={removeItem} className="basketItem__remove">
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default Basketitem;
