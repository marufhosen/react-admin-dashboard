import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import "../Style/MainLayout.css";
import AppBar from "./AppBar";

const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    localStorage.setItem("toggle", isOpen);
  }, [isOpen]);

  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "55px" }} className="side-nav">
        <SideNav />
      </div>
      <div className="main-content">
        {/* <div className="app-bar">
          <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
        </div> */}
        <AppBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
