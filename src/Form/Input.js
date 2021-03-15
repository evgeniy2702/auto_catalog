import React from "react";
import "./../style.css";
import PropTypes from "prop-types";

function Input({ elem, change }){

  let type = "text";  
  if(elem[1] === "width" || elem[1] === "height" || elem[1] === "year" || elem[1] === "price"){
    type = "number";
  }
  
  return(
    <div>
      <label>{elem[2]} :</label>
            <input
              id = {elem[1]}
              type= {type}
              placeholder={"Enter your " + elem[1]}
              value = {elem[0]}
              onChange= {(e)=> change(elem[1],e.target.value )}
            />
            <br />
            <br />
  
    </div>
  )
}

Input.propTypes = {
  elem: PropTypes.array.isRequired,
  change: PropTypes.func.isRequired
}
export default Input;