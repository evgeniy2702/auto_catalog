import React from "react";
import "./../style.css";
import PropTypes from "prop-types";

function Input({ elem, change, image }){

  let type = "text"; 
  let accept = ""; 
  
  if(elem[1] === "width" || elem[1] === "height" || elem[1] === "year" || elem[1] === "price"){
    type = "number";
  }
  if(elem[1] === "bg" || elem[1] === "label"){
    type = "file";
    accept = "image/*";
  
  }

  if(type !== "file"){
    console.log("Input " + elem[0]);
  return(
    <div>
      <label>{elem[2]} :</label>
            <input
              id = {elem[1]}
              value = {elem[0]}
              type= {type}
              accept = {accept}
              placeholder={"Enter your " + elem[1]} 
              onChange= {(e)=> change(elem[1],e.currentTarget.value )}
            />
            <br />
            <br />
  
    </div>
  )
  } else {
    return (
      <div>
      <label>{elem[2]} :</label>
            <input
              id = {elem[1]}
              type= {type}
              accept = {accept}
              placeholder={"Enter your " + elem[1]}
              onChange= {(e)=>image(e.target.files)}
            />
            <br />
            <br />
  
    </div>
    )
  }
}

Input.propTypes = {
  elem: PropTypes.array.isRequired,
  change: PropTypes.func.isRequired,
  image: PropTypes.func.isRequired
}
export default Input;