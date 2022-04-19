import React from "react";
import "../Style/AppBar.css";
import { BiSearchAlt2 } from "react-icons/bi";

const AppBar = () => {
  return (
    <div className="app-bar">
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
      <div className="user">
        <p>U</p>
      </div>
    </div>
  );
};

export default AppBar;
