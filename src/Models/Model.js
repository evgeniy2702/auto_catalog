import React, { Component } from "react";
import "./../style.css";
import {NavLink} from "react-router-dom";

import Brends from "../Const/Brends";
import Input from "./../Form/Input";

class Model extends Component{

constructor(props){
    super(props);
    this.state = {
      model:"",
      color:"",
      year:2000,
      vEng:"",
      price:0,
      desc:"",
      bg:""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }  


  onChange(idData,dataInput) {
      this.setState({[idData]: dataInput})
    }
  
  onImageChange(fileList){
    this.setState({bg: URL.createObjectURL(fileList[0])});
  }

  onSubmit(e){
    e.preventDefault();
    console.log("HI");
  }


  render(){
  const{model, color, year,vEng, price,desc, bg} = this.state;  
  const brend = this.props.match.params.brend;
  const id = this.props.match.params.id;
  const flag = this.props.match.params.flag;
  let item;

  for(let i=0; i< Brends.length; i++){
    if(Brends[i].nameBrend == brend){
      item = Brends[i].models;
      break;
      }
    }
  let modelThis = {id:0,model:"", color:"", year: 0, vEng: 0, price: 0, desc: "", bg:""};

  for(let j = 0; j< item.models.length; j++){
        if(id == item.models[j].id){
          modelThis = item.models[j];
          break;
        }
  }      
  if(item === undefined){
      return <h1>Модели с таким {id} не существует</h1>;
  }
  if(!flag || flag === undefined){
    console.log("if " + id + " " + brend + " " + flag);
      return <div className="model" style = {{
        backgroundImage: modelThis.bg}}>
        <p>Название модели : <i>{modelThis.model}</i></p>
        <p>Цвет модели : <i>{modelThis.color}</i> </p>
        <p>Год выпуска : <i> {modelThis.year} </i></p>
        <p>Объем двигателяб, л : <i>{modelThis.vEng}</i></p>
        <p>Цена, грн : <i>{modelThis.price} грн</i></p>
        <p>Технические характеристики : <i>{modelThis.desc}</i></p>

        <NavLink to={`/all_auto/${brend}`}>На предыдущую страницу </NavLink>
        </div>
    } else {
          const data=[
              [model,"model", "Название модели "],
              [color,"color", "Цвет модели "],
              [year,"year", "Год выпуска модели "],
              [vEng,"vEng", "Объем двигателя модели "],
              [price,"price", "Цена модели "],
              [desc,"desc", "Описание модели "],
              [bg,"bg","Добавьте ссылку на фото модели "]
          ]

          console.log("if " + id + " " + brend + " " + flag);
       return <form onSubmit = {this.onSubmit}>
          {data.map(item => {
            return <Input  key={item.id} elem = {[]}  change = {this.onChange} image = {this.onImageChange} /> 
          })}
          <button>SEND</button>
       </form>
    }   
  }
}

export default Model;