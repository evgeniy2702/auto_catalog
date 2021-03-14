import React from "react";
import "./../style.css";
import PropTypes from "prop-types";

function Input({ elem, change, onValid }){

  let type = "text";

  if(elem[1] === "password" || elem[1] === "passwordReg"){
    type = "password";
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
              style = {onValid(elem[0])}
            />
            <br />
            <br />
  
    </div>
  )
}

Input.propTypes = {
  elem: PropTypes.array.isRequired,
  change: PropTypes.func.isRequired,
  onValid: PropTypes.func.isRequired
}
export default Input;