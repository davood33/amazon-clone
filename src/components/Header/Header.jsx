import { NavBar } from "./NavBar";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search for your product ..."
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
