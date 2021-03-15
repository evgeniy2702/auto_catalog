import React from "react";
import "./../style.css";

import Input from "./../Form/Input";
import Brends from "./../Const/Brends";
import Models from "./../Const/Models";

class AddBrend extends React.Component {

constructor(props){
    super(props);
    this.state = {
      id: Brends.length+1,
      label:"",
      nameBrend:"",
      style:{width:"", height:""},
      linkBySite:"",
      models: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }  

  onChange(idData,dataInput) {
    this.setState({[idData]: dataInput})
  }

 onSubmit(e){
    e.preventDefault();
    let models = {id: Models.length + 1, models:[]};
    console.log(models);
    Models.push(models);
    let brend={
      id:Brends.length + 1,
      label: this.state.label, 
      nameBrend: this.state.nameBrend,
      style: {width: this.state.width + "px", height: this.state.height + "px"},
      linkBySite: this.state.linkBySite,
      models: Models[Models.length-1]
      };
    Brends.push(brend);
    console.dir(brend.models);
    console.log(Brends)
 }  

  render() {
    const{label, nameBrend, width, height, linkBySite} = this.state;
    const data=[
      [label,"label", "Url на логотип "],
      [nameBrend,"nameBrend", "Название нового бренда "],
      [width,"width", "Размер логотипа по ширине, рх "],
      [height,"height", "Размер логотипа по высоте, рх "],
      [linkBySite,"linkBySite", "Ссылка на официальный сайт "]
    ]
    return (
      <div>
        <h1>Добавить новый бренд : </h1>
        <form onSubmit={this.onSubmit}>
        <p>Заполните все поля :</p>
          {data.map(item => {
          return (<div>
            <Input elem = {item} key = {item[1].toString()} change = {this.onChange} />
            </div>);
          })}
          <button>SEND</button>
        </form>
      </div>      
    );
  }
}

export default AddBrend;