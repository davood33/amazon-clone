import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import { Badge } from "@mui/material";
import TemporaryDrawer from "./Drawer/Drawer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const basket = useSelector(state=>state.basket)
  return (
    <div className="header">
      <Link to={"/"}>
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="header__logo" />
      </Link>
      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search for your product ..."
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__navOptions">
          <span className="header__navOptionRowOne">Hello Guest</span>
          <span className="header__navOptionRowTwo">Sign in</span>
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
    </div>
  );
};

export default Header;
