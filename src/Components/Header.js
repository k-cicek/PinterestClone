import React from "react";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import TextsmsIcon from "@material-ui/icons/Textsms";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <PinterestIcon />
      </div>
      <div className="header__homepage">
        <a href="/">HomePage</a>
      </div>
      <div className="header__search">
        <div className="header__searchbar">
          <SearchIcon />
          <form>
            <input type="text" />
            <button type="submit"></button>
          </form>
        </div>
      </div>
      <div className="header__icon">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
