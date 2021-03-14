import React, { Component } from "react";
import "./../style.css";
import {NavLink} from "react-router-dom";

import Brends from "../Const/Brends";

class Model extends Component{
  render(){
  const brend = this.props.match.params.brend;
  const id = this.props.match.params.id;
  let item;

  for(let i=0; i< Brends.length; i++){
    if(Brends[i].nameBrend == brend){
      item = Brends[i].models;
      }
    }
  let model = {id:0,model:"", color:"", year: 0, vEng: 0, price: 0, desc: ""};

  for(let j = 0; j< item.models.length; j++){
        if(id == item.models[j].id){
          model = item.models[j];
          break;
        }
  }      
  if(item === undefined){
      return <h1>Модели с таким {id} не существует</h1>;
    }
    else{
      return <div className="model">
        <p>Название модели : <i>{model.model}</i></p>
        <p>Цвет модели : <i>{model.color}</i></p>
        <p>Год выпуска : <i> {model.year} </i></p>
        <p>Объем двигателяб м.куб : <i>{model.vEng}</i></p>
        <p>Цена, грн : <i>{model.price}</i></p>
        <p>Технические характеристики : <i>{model.desc}</i></p>
        <NavLink to={`/all_auto/${brend}`}>На предыдущую страницу </NavLink>
        </div>
    }  
  }
}

export default Model;