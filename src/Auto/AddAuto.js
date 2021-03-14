import React from "react";
import "./../style.css";

import Input from "./../Form/Input";
import Option from "./../Form/Option";
import Brends from "./../Const/Brends";


class AddAuto extends React.Component {

constructor(props){
    super(props);
    this.state = {
      id:0,
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
  }  

  onChange(idData,dataInput) {
    this.setState({[idData]: dataInput})
  }

 onSubmit(e){
    e.preventDefault();
    let model={
      id: 0,
      model: this.state.model, 
      color: this.state.color,
      year: this.state.year,
      vEng: this.state.vEng,
      price: this.state.price,
      desc: this.state.desc,
      bg:"url(" + this.state.bg + ")"}
 }  

  render() {
    const{id, model, color, year,vEng, price,desc, bg} = this.state;
    const brendsList = Brends.map(item=>item.nameBrend);
    const data=[
      [model,"model", "Название модели "],
      [color,"color", "Цвет модели "],
      [year,"year", "Год выпуска модели "],
      [vEng,"vEng", "Объем двигателя модели "],
      [price,"price", "Цена модели "],
      [desc,"desc", "Описание модели "],
      [bg,"bg","Добавьте ссылку на фото модели "]
    ]
    return (
      <div>
        <h1>Добавить модель авто </h1>
        <form onSubmit={this.onSubmit}>
        <p>Заполните все поля :</p>
        <div className = "divSelect">
        <span>Выберите название бренда :</span>
        <select>
        {brendsList.map((item, index) =>
          <Option brend = {item} key = {index} change = {this.onChange} />
        )
        }
        </select>
        </div>
        <br/>
          {data.map( (item, index) => {
          return (<div>
          <Input elem = {item} key = {index} change = {this.onChange} />
          </div>)
          })}
          <button >SEND</button>
        </form>
      </div>      
    );
  }
}

export default AddAuto;