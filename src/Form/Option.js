import React from "react";
import "./../style.css";
import PropTypes from "prop-types";

function Option({ brend, change }){

  let type = "text";  
  
  return(
    <option 
    onChange= {(e)=> change(elem[1],e.target.value )} > 
    {brend}    
    </option>
  )
}

Option.propTypes = {
  brend: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired
}
export default Option;