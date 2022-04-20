import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style/SideNav.css";
import logo from "../Assets/intranet (1).png";

import {
  FcDataSheet,
  FcPackage,
  FcBusinessman,
  FcLeave,
  FcPositiveDynamic,
  FcFile,
} from "react-icons/fc";
import { dashboardContext } from "../App";

const SideNav = () => {
  const [isToggle, setToggle] = useContext(dashboardContext);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FcDataSheet />,
    },
    {
      path: "/products",
      name: "Product",
      icon: <FcPackage />,
    },
    {
      path: "/customers",
      name: "Customer",
      icon: <FcBusinessman />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FcPositiveDynamic />,
    },
    {
      path: "/form",
      name: "Form",
      icon: <FcFile />,
    },
    {
      path: "/calender",
      name: "Calender",
      icon: <FcLeave />,
    },
  ];

  return (
    <div className="side-nav-container">
      <div className="brand-logo">
        <img src={logo} alt="logo" />
        <h2
          style={{
            display: isToggle ? "block" : "none",
          }}
        >
          INTRANET
        </h2>
      </div>
      <div className="menu-item">
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="link-icon">{item.icon}</div>
            <div
              className="link-text"
              style={{
                display: isToggle ? "block" : "none",
              }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
