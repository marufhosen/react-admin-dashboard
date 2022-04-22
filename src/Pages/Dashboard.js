import React from "react";
import "../Style/Dashboard.css";
import {
  BiLike,
  BiUserCheck,
  BiMoney,
  BiBarChartAlt,
  BiUpArrowAlt,
} from "react-icons/bi";
import VaiticalChart from "../Component/DashboardChart/VaiticalChart";
import LineCharts from "../Component/DashboardChart/LineCharts";
import PieCharts from "../Component/DashboardChart/PieCharts";

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
      <div className="visitor-container">
        <div className="visitors">
          <div className="table-main-title">
            <p>Page visits</p>
            <button className="see-all-btn">See All</button>
          </div>
          <table className="visitors-table">
            <tr>
              <th>Page Name</th>
              <th>Visitors</th>
              <th>Unique Visitors</th>
              <th>Bonous Rate</th>
            </tr>
            <tr>
              <td>Intranet/</td>
              <td>4023</td>
              <td>328</td>
              <td>45.04%</td>
            </tr>
            <tr>
              <td>Intranet/</td>
              <td>4023</td>
              <td>328</td>
              <td>45.04%</td>
            </tr>
            <tr>
              <td>Intranet/</td>
              <td>4023</td>
              <td>328</td>
              <td>45.04%</td>
            </tr>
            <tr>
              <td>Intranet/</td>
              <td>4023</td>
              <td>328</td>
              <td>45.04%</td>
            </tr>
            <tr>
              <td>Intranet/</td>
              <td>4023</td>
              <td>328</td>
              <td>45.04%</td>
            </tr>
            <tr>
              <td>Intranet/</td>
              <td>4023</td>
              <td>328</td>
              <td>45.04%</td>
            </tr>
            <tr>
              <td>Intranet/</td>
              <td>4023</td>
              <td>328</td>
              <td>45.04%</td>
            </tr>
          </table>
        </div>
        <div className="visitors">
          <div className="pie-chart">
            <p className="pie-charts-title">Growth Statistics</p>
            <PieCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
