import React from "react";
import "./Checkout.css";
import Basketitem from "./BasketItem/BasketItem";
import { useSelector } from "react-redux";
import Subtotal from './Subtotal/Subtotal';
const Checkout = () => {
  const basket = useSelector((state) => state.basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <h2 className="checkout__title">Your Shopping Basket</h2>
        {basket.length !== 0 ? (
          basket.map(item => {
            return (
              <Basketitem
              key={Math.floor(Math.random()*1000)}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            );
          })
        ) : (
          <h3>Nothing in your basket</h3>
        )}
      </div>
      <div className="checkout__right">
        <p>
          Subtotal ({basket.length} item) :{" "}
          <Subtotal/>
        </p>
        <p className="checkout__giftText">
          <input
            type="checkbox"
            name="contain-gift"
            id=""
            className="checkout__checkbox"
          />
          This order contains a gift
        </p>
        <button className="checkout__proceed">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
