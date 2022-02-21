import React from "react";
import { Rating } from "@mui/material";
import "./BasketItem.css";
const Basketitem = ({ id, title, image, price, rating }) => {
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
        <button className="basketItem__remove">Remove from basket</button>
      </div>
    </div>
  );
};

export default Basketitem;
