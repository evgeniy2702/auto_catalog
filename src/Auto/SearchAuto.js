import React from "react";
import "./../style.css";
import {NavLink} from "react-router-dom";

import Option from "./../Form/Option";
import Input from "./../Form/Input";
import Models from "./../Const/Models";
import Brends from "./../Const/Brends";


class SearchAuto extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      brend:"",
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
    
  }

  handleChange(e){
    let index = document.getElementById(e.target.id).selectedIndex ;
    this.state.nameParams = document.getElementsByTagName("option")[index].id;
  }

  onSubmit(e){
    e.preventDefault();
    let arrayModels = Brends.map(item => item.models);
    let array = arrayModels.map(item => item.models);
    let arr = [];
    for(let i=0; i< array.length; i++) {
      for(let j=0; j< array[i].length; j++){
        
        for( let s = 0; s < Object.values(array[i][j]).length ; s++){
          
          if(Object.values(array[i][j])[s] === this.state.item){            
            let str = Brends.filter(item => item.id === Object.values(array[i][j])[0])[0].nameBrend;
            console.log(str);
            this.setState({brend: str});
            const obj = array[i][j];
            arr = [...arr, obj];
            
            break;
          }
               
        }
      }
    }
   
    this.setState({arrayParams: arr});
    
  }

  

  render() {
    const { arrayParams, brend } = this.state;
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
              <NavLink  to={`/all_auto/${brend}/${item.id}`}>
              перейти к просмотру 
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