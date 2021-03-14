import React, { Component } from "react";
import "./../style.css";
import { BrowserRouter as Router, NavLink, Link, Redirect } from "react-router-dom";

import Brends from "../Const/Brends";

class Models extends Component {
  render() {
    const brend = this.props.match.params.brend;
    let dataBrend = {
      id:0,
      label:"",
      nameBrend:"",
      style:{},
      linkBySite:"",
      models:{}
      };
    for(let i=0; i< Brends.length; i++){
      if(Brends[i].nameBrend === brend){
        dataBrend = Brends[i];
        break;
      }
    }
    console.log(dataBrend)
    return (
      <div className = "modelsStyle">
      <img style = {dataBrend.style} src={dataBrend.label} />
        <h1>
        Список всех авто брерда {dataBrend.nameBrend}:</h1>
        <ol>
          {dataBrend.models.models.map(item => (
            <li key={item.id}> 
            <span>- </span>  
             {item.model}
              <NavLink 
               to={`/all_auto/${brend}/${item.id}`}> детальная информация о модели</NavLink>
            </li>
          ))}
        </ol>
        <NavLink to="/all_auto" >На предыдущую страницу </NavLink>
        <Router>
        <Link to = {dataBrend.linkBySite}>Перейти на официальный сайт бренда </Link>
        <Redirect path={dataBrend.linkBySite} />
        </Router>
      </div>
    );
  }
}

export default Models;