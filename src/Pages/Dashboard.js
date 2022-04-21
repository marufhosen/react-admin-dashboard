import React from "react";
import "../Style/Dashboard.css";
import {
  BiLike,
  BiUserCheck,
  BiMoney,
  BiBarChartAlt,
  BiUpArrowAlt,
} from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="main-dashboard">
        <div className="dashboard-header"></div>
        <div className="dashboard-summary">
          {/* Traffic */}
          <div className="view view-traffic">
            <div className="grid">
              <div className="text-content">
                <p className="text">TOTAL TRAFFIC</p>
                <p className="number">350,897</p>
              </div>
              <div className="content-icon traffic-icon">
                <BiLike className="icon" />
              </div>
            </div>
            <div className="growth">
              <BiUpArrowAlt className="growth-ico" />
              <p className="growth-text">
                <span>3.48%</span>
                Since last month
              </p>
            </div>
          </div>
          {/* user */}
          <div className="view view-user">
            <div className="grid">
              <div className="text-content">
                <p className="text">NEW USER</p>
                <p className="number">350,897</p>
              </div>
              <div className="content-icon users-icon">
                <BiUserCheck className="icon" />
              </div>
            </div>
            <div className="growth">
              <BiUpArrowAlt className="growth-ico" />
              <p className="growth-text">
                <span>3.48%</span>
                Since last month
              </p>
            </div>
          </div>
          {/* sals */}
          <div className="view view-sales">
            <div className="grid">
              <div className="text-content">
                <p className="text">SALES</p>
                <p className="number">897</p>
              </div>
              <div className="content-icon sales-icon">
                <BiMoney className="icon" />
              </div>
            </div>
            <div className="growth">
              <BiUpArrowAlt className="growth-ico" />
              <p className="growth-text">
                <span>3.48%</span>
                Since last month
              </p>
            </div>
          </div>
          {/* performance */}
          <div className="view view-performance">
            <div className="grid">
              <div className="text-content">
                <p className="text">PERFORMANCE</p>
                <p className="number">350,897</p>
              </div>
              <div className="content-icon performance-icon">
                <BiBarChartAlt className="icon" />
              </div>
            </div>
            <div className="growth">
              <BiUpArrowAlt className="growth-ico" />
              <p className="growth-text">
                <span>3.48%</span>
                Since last month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
