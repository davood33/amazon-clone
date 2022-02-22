import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
const Subtotal = () => {
  const basket = useSelector((state) => state.basket);
  const getBasketTotal = (basket) => {
    let sum = 0;
    basket.forEach(item=>{
        sum = sum + item.price
    })
    return sum;
  };
  return (
    <div style={{display:"inline-block"}}>
      <CurrencyFormat
        renderText={(value) => <strong>{value}</strong>}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Subtotal;
