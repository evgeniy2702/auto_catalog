import React from "react";
import {Redirect} from "react-router-dom";
import "./../style.css";

import Input from "./../Form/Input";
import Brends from "./../Const/Brends";
import Models from "./../Const/Models";

class AddBrend extends React.Component {

constructor(props){
    super(props);
    this.state = {
      id: Brends.length+1,
      label:{},
      nameBrend:"",
      style:{width:"", height:""},
      linkBySite:"",
      models: {},
      redirect: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }  

  onChange(idData,dataInput) {
    this.setState({[idData]: dataInput})
    
  }

  onImageChange(fileList){
   this.setState({label: URL.createObjectURL(fileList[0])});
  }

 onSubmit(e){
    e.preventDefault();
    this.setState({redirect: true});
    let models = {id: Models.length + 1, models:[]};
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
 }  

  render() {
    const{label, nameBrend, width, height, linkBySite, redirect} = this.state;
    const data=[
      [label,"label", "Url на логотип "],
      [nameBrend,"nameBrend", "Название нового бренда "],
      [width,"width", "Размер логотипа по ширине, рх "],
      [height,"height", "Размер логотипа по высоте, рх "],
      [linkBySite,"linkBySite", "Ссылка на официальный сайт "]
    ]
    if(!redirect){
    return (
      <div>
        <h1>Добавить новый бренд : </h1>
        <form onSubmit={this.onSubmit}>
        <p>Заполните все поля :</p>
          {data.map(item => {
            
          return (<div>
            <Input  key = {item[1]} elem = {item} change = {this.onChange} image = {this.onImageChange}/>
            </div>);
          })}
          <button>SEND</button>
        </form>
      </div>      
    );} else {
      return <Redirect from="/add_brend" to="/all_auto"  brends={Brends}/>
    }
  }
}

export default AddBrend;