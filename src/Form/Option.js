import React from "react";
import "./../style.css";
import PropTypes from "prop-types";

function Option({ brend, change, value}){

  let type = "text";  


  if(value === "" || value === undefined){
    
  return(
    <option 
    id = {brend}
    value = {brend}
    onChange= {(e)=> change(e.currentTarget.value )} > 
    {brend}    
    </option>
  )
  } else {
     return(
    <option 
    id = {brend}
    value = {value}
    onChange= {(e)=> change(e.currentTarget.value )} > 
    {value}    
    </option>
  )
  }
}

Option.propTypes = {
  brend: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
export default Option;