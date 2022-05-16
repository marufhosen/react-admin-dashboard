import React, { useState } from "react";
import "../Style/Calender.css";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calender = () => {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  return (
    <div className="calender-container">
      <h2 className="calander-title">Calander</h2>
      <div>
        <Calendar className="cal" value={dateState} onChange={changeDate} />
      </div>
    </div>
  );
};

export default Calender;
