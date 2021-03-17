import React from "react";
import "./../style.css";
import {NavLink} from "react-router-dom";

import Option from "./../Form/Option";
import Brends from "./../Const/Brends";


class DeleteAuto extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      brend:"",
      arrayModelsByBrend: [],
      deleteModel: "delete"
    };
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(dataId, dataInput){
    this.setState({[dataId] : dataInput});
  }

  handleChange(e){
    this.setState({brend: e.currentTarget.value });
   
  }

  onSubmit(e){
    e.preventDefault();
    if(this.state.brend !== "")
    this.setState({arrayModelsByBrend: Brends.filter(item => item.nameBrend === this.state.brend)[0].models.models});
    else this.setState ({arrayModelsByBrend:[]});
  }

  

  render() {
    const {brend, deleteModel, arrayModelsByBrend} = this.state;

    return (
      <div>
        <h1>Удаление модели бренда </h1>
        <form onSubmit={this.onSubmit}>
          <p>Выберите наименование бренда :</p>
          <div className = "divSelect">
          <span>Название бренда :</span>
          <select id="brend"  onChange = {this.handleChange}>
            <option />
            {Brends.map(item => item.nameBrend).map((item) =>{
                return <Option key={item.toString()} brend = {item}  change = {this.onChange} />
            })
            }
          </select>     
          </div>
          <br/>           
           <button>SEND</button>
        </form>
         
    <ul className = "updateLi">
    { 
        arrayModelsByBrend.map(item => {

          return <li key={item.id}>
              <span>- </span>
              {item.model}
              <NavLink  to={`/all_auto/${brend}/${item.id}/false/${deleteModel}`}>
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
export default DeleteAuto;