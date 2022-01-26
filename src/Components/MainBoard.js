import React from "react";
import Pin from "./Pin";
import "./MainBoard.css";

function MainBoard() {
  return (
    <div className="mainboard">
      <div className="mainboard__container">
        <Pin />
      </div>
    </div>
  );
}

export default MainBoard;
