import React from "react";
import {Redirect} from "react-router-dom";
import "./../style.css";

import Input from "./../Form/Input";
import Option from "./../Form/Option";
import Brends from "./../Const/Brends";

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
      bg:"",
      logo: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }  

  onChange(idData,dataInput) {
    this.setState({[idData]: dataInput})
  }
  
  onImageChange(fileList){
    this.setState({bg: URL.createObjectURL(fileList[0])});
  }
   
  handleChange(e){
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

      let array = Brends.map(item => item.nameBrend).filter(item => item === this.state.brend); 

      if(array.length === 1){
        let idModel = Brends.filter(item => item.nameBrend === this.state.brend)[0].models.models.length + 1;       
        model.id = idModel;
        Brends.filter(item => item.nameBrend === this.state.brend)[0].models.models.push(model) 
        }

      this.setState({logo: true});  
 }  

  render() {
    let brendsList = Brends.map(item=>item.nameBrend);
    const{brend, model, color, year,vEng, price,desc, bg, logo} = this.state;
    const data=[
      [model,"model", "Название модели "],
      [color,"color", "Цвет модели "],
      [year,"year", "Год выпуска модели "],
      [vEng,"vEng", "Объем двигателя модели "],
      [price,"price", "Цена модели "],
      [desc,"desc", "Описание модели "],
      [bg,"bg","Добавьте ссылку на фото модели "]
    ]

    if(!logo){
    return (
      <div>
        <h1>Добавить модель авто </h1>
        <form onSubmit={this.onSubmit}>
        <p>Заполните все поля :</p>
        <div className = "divSelect">
        <span>Выберите название бренда :</span>
        <select id="brend"  onChange = {this.handleChange}>
        <option />
        {brendsList.map((item) =>{
            return <Option key={item.toString()} brend = {item}  change = {this.onChange} />
        })
        }
        </select>
        </div>
        <br/>
          {data.map( (item, index) => {
          return (<div>
          <Input  key={item[1]} elem = {item}  change = {this.onChange} image = {this.onImageChange} />
          </div>)
          })}
          <button>SEND</button>
        </form>
      </div>      
    );
    } else {
      return <Redirect from="/add_auto" to={`/all_auto/${brend}`}  brends = {Brends} />
    }
  }
}

export default AddAuto;