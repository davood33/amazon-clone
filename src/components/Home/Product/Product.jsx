import { Rating } from "@mui/material";
import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import addToBasket from "./../../../actions/addToBasket";
const Product = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();
  const AddToBasket = () => {
    dispatch(addToBasket(id, title, image, price, rating));
  };
  const image_height = title.length >= 100 ? "180px" : "200px";
  const margin_top = title.length >= 100 ? "40px" : "20px";
  return (
    <div className="product">
      <div className="product__info">
        <div className="product__title">{title}</div>
        <div className="product__priceText">
          $<span>{price}</span>
        </div>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
          className="product__rating"
        />
      </div>
      <img
        src={image}
        alt=""
        className="product__image"
        style={{ maxHeight: image_height, marginTop: margin_top }}
      />
      <button onClick={AddToBasket} className="product__addToBasket">
        Add to basket
      </button>
    </div>
  );
};

export default Product;
