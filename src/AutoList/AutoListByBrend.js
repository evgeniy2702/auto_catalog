import React, { Component } from "react";
import "./../style.css";
import { NavLink } from "react-router-dom";

import Brends from "./../Const/Brends";

class AutoListByBrend extends Component {
  
  render() {
    return (
      <div>
        <h1>Бренды АВТО:</h1>
        <ul>
          {Brends.map(item => (
            <li key={item.id}>
              <NavLink className = "listBrends" to={`/all_auto/${item.nameBrend}`}>
              <img style = {item.style} src={item.label} />
              <br/>
              <span>{item.nameBrend}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AutoListByBrend;
