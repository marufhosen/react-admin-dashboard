import React, { useContext } from "react";
import "../Style/AppBar.css";
import { BiSearchAlt2, BiMenu, BiBell, BiX } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
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
        <BiBell className="noti-icon" />
        <CgMenuGridR className="list-icon" />
        <img
          class="avatar"
          src="https://ipic2021.com/wp-content/uploads/2017/10/speaker3-min.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AppBar;
