import React from "react";
import "./../style.css";

import Input from "./../Form/Input";
import Option from "./../Form/Option";
import Brends from "./../Const/Brends";

const brendsList = Brends.map(item=>item.nameBrend);

class AddAuto extends React.Component {

constructor(props){
    super(props);
    this.state = {
      brend:"",
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
    this.handleChange = this.handleChange.bind(this);
  }  

  onChange(idData,dataInput) {
    console.log(idData);
    this.setState({[idData]: dataInput})
  }

  handleChange(e){
    console.log("select " + e.currentTarget.value);
    this.setState({brend: e.currentTarget.value });
  }

 onSubmit(e){
    e.preventDefault();
    let model={
      id:0,
      model: this.state.model, 
      color: this.state.color,
      year: this.state.year,
      vEng: this.state.vEng,
      price: this.state.price,
      desc: this.state.desc,
      bg:"url(" + this.state.bg + ")"}

      let array = brendsList.filter(item => item === this.state.brend);
      if(array.length === 1){
        let idModel = Brends.filter(item => item.nameBrend === this.state.brend)[0].models.models.length + 1;       
        model.id = idModel;
        Brends.filter(item => item.nameBrend === this.state.brend)[0].models.models.push(model)  
        }
 }  

  render() {
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
    return (
      <div>
        <h1>Добавить модель авто </h1>
        <form onSubmit={this.onSubmit}>
        <p>Заполните все поля :</p>
        <div className = "divSelect">
        <span>Выберите название бренда :</span>
        <select id="brend"  onChange = {this.handleChange}>
        <option />
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
          <button>SEND</button>
        </form>
      </div>      
    );
  }
}

export default AddAuto;