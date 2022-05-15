import React, { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calender = () => {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Calander</h2>
      <div style={{ textAlign: "center", width: "100%" }}>
        <Calendar className="cal" value={dateState} onChange={changeDate} />
      </div>
    </div>
  );
};

export default Calender;
