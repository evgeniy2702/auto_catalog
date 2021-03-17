import React from "react";
import "./../style.css";
import {NavLink} from "react-router-dom";

import Option from "./../Form/Option";
import Brends from "./../Const/Brends";


class SearchAuto extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      nameParams:"aa",
      arrayParams: []
    };
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(dataId, dataInput){
    this.setState({[dataId] : dataInput});
  }

  handleChange(e){
    this.setState({nameParams: e.currentTarget.value });
   console.log(e.currentTarget.value + " " + this.state.nameParams);
  }

  onSubmit(e){
    e.preventDefault();
    if(this.state.brend !== "")
    this.setState({arrayModelsByBrend: Brends.filter(item => item.nameBrend === this.state.brend)[0].models.models});
    else this.setState ({arrayModelsByBrend:[]});
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