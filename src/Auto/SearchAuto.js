import React from "react";
import "./../style.css";
import {NavLink} from "react-router-dom";

import Option from "./../Form/Option";
import Input from "./../Form/Input";
import Models from "./../Const/Models";


class SearchAuto extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      nameParams:"",
      item:"",
      arrayParams: []
    };
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(dataId, dataInput){
    this.setState({[dataId] : dataInput});
    this.state.item = dataInput;
    console.log([dataId] + "/ " + dataInput + "/" + this.state.item);
  }

  handleChange(e){
    let index = document.getElementById(e.target.id).selectedIndex ;
    this.state.nameParams = document.getElementsByTagName("option")[index].id;
  }

  onSubmit(e){
    e.preventDefault();
    let array = Models.map(item => item.models);
    console.dir(array);

    for(let i=0; i< array.length; i++) {
      for(let j=0; j < array[i].length; i++){
        for(var key in array[i][j]){
          console.log(this.state.nameParams + "/ " + this.state.item + " /" + array[i][j][key])
          if(this.state.item === array[i][j][key]){
            console.log(key + " " + array[i][j][key] + this.state.nameParams);

          }
      }
      }
    }
    console.log(this.state.arrayParams);
  }

  

  render() {
    const { arrayParams } = this.state;
    const data=[
              ["model", "По названию модели"], ["color", "По цвету"], ["year", "По году выпуска"], ["vEng", "По объему дивгателя"], ["price", "По цене"]
          ]
    return (
      <div>
        <h1>Поиск : </h1>
        <form onSubmit={this.onSubmit}>
          <p>Выберите параметр поиска :</p>
          <div className = "divSelect">
          <span>Название параметра :</span>
            <select id="nameParams"  onChange = {this.handleChange}>
            <option />
            {data.map((item) =>{
                return <Option key={item.toString()} brend = {item[0]} value = {item[1]}  change = {this.onChange} />
            })
            }
            </select>
            <Input  key={1} elem = {[this.item, "parametr", "Введите параметр : "]}  change = {this.onChange} /> 
          </div>
          <br/>           
           <button>SEND</button>
        </form>
         
    <ul className = "updateLi">
    { 
        arrayParams.map(item => {

          return <li key={item.id}>
              <span>- </span>
              {item.model}
              <NavLink  to={`/all_auto/${brend}/${item.id}/false`}>
              удалить модель 
              </NavLink>
            </li>
           
          })}
    </ul>   
    <NavLink style={{textDecoration:"underline"}} to="/all_auto" >Перейти в каталог брендов</NavLink>    
     </div>  
   );
}
}
export default SearchAuto;