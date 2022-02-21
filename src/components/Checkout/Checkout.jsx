import React from "react";
import "./Checkout.css";
import Basketitem from "./BasketItem/BasketItem";
const Checkout = () => {
  const totalPrice = 26567.23;
  const number = 9;
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <h2 className="checkout__title">Your Shopping Basket</h2>
        <Basketitem
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="checkout__right">
        <p>
          Subtotal ({number} item) :{" "}
          <strong style={{ marginLeft: "5px" }}>${totalPrice}</strong>
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
