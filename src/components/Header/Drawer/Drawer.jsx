import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import "./Drawer.css";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="drawer__box"
    >
      <div className="header__sliderMenu">
        <ui className="header__sliderUl">
          <li className="header__sliderItems">
            <span className="header__navOptionRowOne">Hello Guest</span>
            <span className="header__navOptionRowTwo">Sign in</span>
          </li>
          <li className="header__sliderItems">
            <span className="header__navOptionRowOne">Returns</span>
            <span className="header__navOptionRowTwo">Orders &</span>
          </li>
          <li className="header__sliderItems">
            <span className="header__navOptionRowOne">Your</span>
            <span className="header__navOptionRowTwo">Prime</span>
          </li>
        </ui>
      </div>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <Button onClick={toggleDrawer("right", true)}>
          <MenuIcon className="header__burger" />
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          className="drawer__box"
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
