import React, { Component } from "react";
import "./../style.css";

import Brends from "../Const/Brends";

class Model extends Component{
  render(){
  const brend = this.props.match.params.brend;
  const id = this.props.match.params.id;
  let item;

  for(let i=0; i< Brends.length; i++){
    if(Brends[i].nameBrend == brend){
      for(let i = 0; j< Brends.models.models.length; j++){
        if(Brends.models.models[j].id === id){
          item = Brends.models.models[j];
          break;
        }
      }
    }
  }
  if(item === undefined){
      return <h1>Модели с таким {id} не существует</h1>;
    }
    else{
      return <div>
        <p>Название модели : <i>{item.model}</i></p>
        <p>Цвет модели : <i>{item.color}</i></p>
        <p>Год выпуска : <img src = {item.year} /></p>
        <p>Объем двигателяб м.куб : <i>{item.vEng}</i></p>
        <p>Цена, грн : <i>{item.price}</i></p>
        <p>Технические характеристики : <i>{item.desc}</i></p>
        </div>
    }  
  }
}

export default Model;