import React, { useState } from "react";
import Welcome from "./Welcome";
import ListComponent from "./ListComponent";

const handleChange = (event)=> {
    const {value} = event.target;
  console.log(value);
  };
  const handleClick = () =>{
    console.log("클릭");
  };
  export default InputComponent;