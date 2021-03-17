import React from "react";
import "./../style.css";
import {NavLink} from "react-router-dom";

import Option from "./../Form/Option";
import Brends from "./../Const/Brends";


class UpdateAuto extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      brend:"",
      arrayModelsByBrend: [],
      messege: "",
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
    this.setState({messege: "done"});
  }

  onSubmit(e){
    e.preventDefault();
    this.setState({arrayModelsByBrend: Brends.filter(item => item.nameBrend === this.state.brend)[0].models.models});
  }

  

  render() {
    const {brend, deleteModel, messege , arrayModelsByBrend} = this.state;
    console.dir(arrayModelsByBrend);
    console.dir(brend);
    console.dir(messege);
    return (
      <div>
        <h1>Удаление модели авто </h1>
        <form onSubmit={this.onSubmit}>
          <p>Выберите наименование бренда :</p>
          <div className = "divSelect">
          <span>Выберите название бренда :</span>
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
           {
             arrayLength(brend,arrayModelsByBrend)
          
           }
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
     </div>  
   );
  }
}

export default UpdateAuto;

function arrayLength(brend,messege){
  if(brend !== "" && messege !== "done" ){
      return  <div><br/><NavLink  to="/all_auto" style={{textDecoration: "underline"}}>
              У данного бренда не моделей авто. Вернуться на страницу просмотра брендов 
              </NavLink>
              </div>
             }
}