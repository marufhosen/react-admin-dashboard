import React from "react";
import "../../Style/TodoList.css";

const TodoList = () => {
  return (
    <div className="todo-container">
      <h3 className="todo-title">To do list</h3>
      <div className="list-container">
        <div className="todo-content content-1">
          <p className="todo-content-title todo-content-title-1">
            Call with Dave
          </p>
          <p className="todo-time">10:30 AM</p>
        </div>
        <div className="todo-check">
          <input type="checkbox" checked />
        </div>
      </div>
      {/*  */}
      <div className="list-container">
        <div className="todo-content content-2">
          <p className="todo-content-title">Call with Dave</p>
          <p className="todo-time">10:30 AM</p>
        </div>
        <div className="todo-check">
          <input type="checkbox" />
        </div>
      </div>
      {/*  */}
      <div className="list-container">
        <div className="todo-content content-3">
          <p className="todo-content-title">Call with Dave</p>
          <p className="todo-time">10:30 AM</p>
        </div>
        <div className="todo-check">
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
