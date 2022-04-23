import React from "react";
import "../../Style/ActiveMembers.css";
const ActiveMembers = () => {
  return (
    <div className="member-main">
      <h3 className="member-title">Team Members</h3>
      <div className="members-containers">
        <div className="img-name-container">
          <div className="image">
            <img
              className="avatar"
              src="https://ipic2021.com/wp-content/uploads/2017/10/speaker3-min.jpg"
              alt=""
            />
          </div>
          <div className="members-content">
            <p>Johm Michale</p>
            <div className="active">
              <p className="active-dots"></p>
              <p>Active</p>
            </div>
          </div>
        </div>
        <div className="add-btn">
          <button className="see-all-btn">Add</button>
        </div>
      </div>
      {/*  */}
      <div className="members-containers">
        <div className="img-name-container">
          <div className="image">
            <img
              className="avatar"
              src="https://worldywcacouncil.org/wp-content/uploads/2015/04/speaker-1-v2.jpg"
              alt=""
            />
          </div>
          <div className="members-content">
            <p>Johm Michale</p>
            <div className="active">
              <p className="active-dots active-dots-2"></p>
              <p>In a meeting</p>
            </div>
          </div>
        </div>
        <div className="add-btn">
          <button className="see-all-btn">Add</button>
        </div>
      </div>
      {/*  */}
      <div className="members-containers">
        <div className="img-name-container">
          <div className="image">
            <img
              className="avatar"
              src="https://www.spacerocketadvertising.com/wp-content/uploads/2021/02/team-1.jpg"
              alt=""
            />
          </div>
          <div className="members-content">
            <p>Johm Michale</p>
            <div className="active">
              <p className="active-dots active-dots-3"></p>
              <p>Offline</p>
            </div>
          </div>
        </div>
        <div className="add-btn">
          <button className="see-all-btn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default ActiveMembers;
