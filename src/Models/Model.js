import React, { Component } from "react";
import "./../style.css";
import {NavLink} from "react-router-dom";

import Brends from "../Const/Brends";
import Input from "./../Form/Input";

class Model extends Component{

brend = this.props.match.params.brend;
id = this.props.match.params.id;
flag = this.props.match.params.flag;
item = creatModel(this.brend, this.id);

constructor(props){
    super(props);
    this.state = {
      model:this.item.model,
      color:this.item.color,
      year:this.item.year,
      vEng:this.item.vEng,
      price:this.item.price,
      desc:this.item.desc,
      bg:this.item.bg
    };
    this.updateState = this.updateState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }  

  updateState(item){
    this.setState({model: item.model});
    this.setState({color: item.model});
    this.setState({year: item.model});
    this.setState({vEng: item.model});
  }

  onChange(idData,dataInput) {
    
      console.log(dataInput);
      this.setState({[idData]: dataInput});
    
    }
  
  onImageChange(fileList){
    this.setState({bg: URL.createObjectURL(fileList[0])});
  }

  onSubmit(e){
    e.preventDefault();
    this.item.model = this.state.model;
    this.item.color = this.state.color;
    this.item.year = this.state.year;
    this.item.vEng = this.state.vEng;
    this.item.price = this.state.price;
    this.item.desc = this.state.desc;
    if(this.state.bg !== undefined ){
      this.item.bg = "url(" + this.state.bg + ")";  
    }
    
    Brends.filter(item => item.nameBrend === this.brend)[0].models.models.splice((this.id-1),1,this.item);
  }


  render(){ 
   
  if(this.item === undefined){
      return <h1>Модели с таким {this.id} не существует</h1>;
  }
  if(!this.flag || this.flag === undefined){
      console.dir(Brends);
      return <div className="model" style = {{
        backgroundImage: this.item.bg}}>
        <p>Название модели : <i>{this.item.model}</i></p>
        <p>Цвет модели : <i>{this.item.color}</i> </p>
        <p>Год выпуска : <i> {this.item.year} </i></p>
        <p>Объем двигателяб, л : <i>{this.item.vEng}</i></p>
        <p>Цена, грн : <i>{this.item.price} грн</i></p>
        <p>Технические характеристики : <i>{this.item.desc}</i></p>

        <NavLink to={`/all_auto/${this.brend}`}>На предыдущую страницу </NavLink>
        </div>
    } else {
          const{model, color, year,vEng, price,desc, bg} = this.state;          
          const data=[
              [model,"model", "Название модели "],
              [color,"color", "Цвет модели "],
              [year,"year", "Год выпуска модели "],
              [vEng,"vEng", "Объем двигателя модели "],
              [price,"price", "Цена модели "],
              [desc,"desc", "Описание модели "],
              [bg,"bg","Добавьте ссылку на фото модели "]
          ]

       return <form onSubmit = {this.onSubmit}>
          {data.map(item => {
            return <Input  key={item.id} elem = {item}  change = {this.onChange} image = {this.onImageChange} /> 
          })}
          <button>SEND</button>
       </form>
    }   
  }
}

export default Model;

function creatModel(brend, id){
    let item;

  for(let i=0; i< Brends.length; i++){
    if(Brends[i].nameBrend == brend){
      item = Brends[i].models;
      break;
      }
    }

 let modelThis=[];

  for(let j = 0; j< item.models.length; j++){
        if(id == item.models[j].id){
          modelThis = item.models[j];
          break;
        }
  }      
return modelThis;
}