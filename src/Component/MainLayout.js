import React, { useContext } from "react";
import SideNav from "./SideNav";
import "../Style/MainLayout.css";
import AppBar from "./AppBar";
import { dashboardContext } from "../App";

const MainLayout = ({ children }) => {
  const [isToggle] = useContext(dashboardContext);
  return (
    <div className="container">
      <div style={{ width: isToggle ? "250px" : "55px" }} className="side-nav">
        <SideNav />
      </div>
      <div className="main-content">
        <AppBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
