import React from "react";
import "./../style.css";
import PropTypes from "prop-types";

function Option({ brendsList, change }){

  let type = "text";  
  
  return(
    <select>
           return <option
              id = {elem[1]}
              type= {type}
              placeholder={"Enter your " + elem[1]}
              value = {elem[0]}
              onChange= {(e)=> change(elem[1],e.target.value )}
            >{brendsList}</option>
            <br />
            <br />
    </select>
  )
}

Option.propTypes = {
  brendsList: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired
}
export default Option;