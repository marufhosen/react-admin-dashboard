import React, { useContext } from "react";
import "../Style/AppBar.css";
import {
  BiSearchAlt2,
  BiMenu,
  BiGridAlt,
  BiNotification,
  BiUserCircle,
  BiX,
} from "react-icons/bi";
import { dashboardContext } from "../App";

const AppBar = () => {
  const [isToggle, setToggle] = useContext(dashboardContext);
  return (
    <div className="app-bar">
      <div className="menu-search">
        <div onClick={() => setToggle(!isToggle)}>
          {isToggle ? (
            <BiX className="menu-icon" />
          ) : (
            <BiMenu className="menu-icon" />
          )}
        </div>
        <form class="search" action="/action_page.php">
          <input
            className="text-input"
            type="text"
            placeholder="Search.."
            name="search"
          />
          <button className="search-btn" type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </div>
      <div className="appbar-right">
        <BiNotification className="noti-icon" />
        <BiGridAlt className="list-icon" />
        <BiUserCircle className="user-icon" />
      </div>
    </div>
  );
};

export default AppBar;
