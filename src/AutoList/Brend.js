import React, { Component } from "react";
import {Switch, Route} from "react-router-dom";
import "./../style.css";

import Models from "./../Models/Models";
import Model from "./../Models/Model";
import Brends  from "./../Const/Brends";
import AutoListByBrend from "./../AutoList/AutoListByBrend";


export default class Item extends Component{
  render(){
  const brend = this.props.match.params.brend;
  let item;
  for(let i=0; i< Brends.length; i++){
    if(Brends[i].nameBrend == brend){
      item = Brends[i];
      break;
    }
  }
  if(item === undefined){
      return <h1>Бренд {brend} отсутсвует</h1>;
    }
    else{
      return <Switch>
        <Route exact path="/all_auto/:brend" component={Models} />
        <Route path="/all_auto/:brend/:id" component={Model} />
      </Switch>
    }  
  }
}