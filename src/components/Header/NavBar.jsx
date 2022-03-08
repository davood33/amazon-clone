import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import TemporaryDrawer from "./Drawer/Drawer";
export function NavBar() {
  const basket = useSelector((state) => state.basket);
  return (
    <div className="header__nav">
      <div className="header__navOptions">
        <span className="header__navOptionRowOne">Hello Guest</span>
        <Link to={"/login"}>
          <span className="header__navOptionRowTwo">Sign in</span>
        </Link>
      </div>
      <div className="header__navOptions">
        <span className="header__navOptionRowOne">Returns</span>
        <span className="header__navOptionRowTwo">& Orders</span>
      </div>
      <div className="header__navOptions">
        <span className="header__navOptionRowOne">Your</span>
        <span className="header__navOptionRowTwo">Prime</span>
      </div>
      <div className="header__navBasket">
        <Badge showZero badgeContent={basket.length} color="primary">
          <Link to="/checkout">
            <ShoppingBasketIcon className="header__navBasketIcon" />
          </Link>
        </Badge>
      </div>
      <div className="header__navBurger">
        <TemporaryDrawer className={"header__burger"} color={"white"} />
      </div>
    </div>
  );
}
