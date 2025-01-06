/*import React from "react";

const Stomach = ({ need }) => {
  return (
    <div>
      <h5>Stomach Component</h5>
      <p>Received: {need}</p>
    </div>
  );
};

export default Stomach;*/
//now
/*import React,{useContext} from "react";
import {nameContext} from "./App"
const Stomach = () => {
    let dog=useContext(nameContext);
  return (
    <div>
      <h1>Stomach:{dog} </h1>     
    </div>
  );
};
export default Stomach;*/
import React, { useContext } from "react";
import { nameContext } from "./App";

const Stomach = () => {
  const { value, toggleBackground, isBlackBackground } = useContext(nameContext);

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: isBlackBackground ? "white" : "black",
    color: isBlackBackground ? "black" : "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <div>
      <h1>Stomach: {value}</h1>
      <button style={buttonStyle} onClick={toggleBackground}>
        Press Me
      </button>
    </div>
  );
};

export default Stomach;

