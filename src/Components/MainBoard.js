import React from "react";
import Pin from "./Pin";
import "./MainBoard.css";

function MainBoard(props) {
  let { pins } = props;
  return (
    <div className="mainboard">
      <div className="mainboard__container">
        {pins.map((pin, index) => {
          let { urls } = pin;
         return <Pin key={index} urls={urls} />;
        })}
      </div>
    </div>
  );
}

export default MainBoard;
