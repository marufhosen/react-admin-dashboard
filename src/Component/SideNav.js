import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style/SideNav.css";
import logo from "../Assets/full-logo.png";

import {
  FcDataSheet,
  FcPackage,
  FcBusinessman,
  FcLeave,
  FcPositiveDynamic,
} from "react-icons/fc";

const SideNav = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    setToggle(localStorage.getItem("toggle"));
    console.log(localStorage.getItem("toggle"));
  }, []);

  // console.log(toggle);

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
      icon: <FcDataSheet />,
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
        {/* <img src={logo} alt="logo" /> */}
        <h2>INTRANET IT</h2>
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
            <div className="link-text">{item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
