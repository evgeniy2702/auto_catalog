import React from "react";
import "./../style.css";

import Input from "./../Form/Input";
import Option from "./../Form/Option";
import Brends from "./../Const/Brends";


class UpdateAuto extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      brend:""
    };
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(dataId, dataInput){
    this.setState({[dataId] : dataInput});
  }

  handleChange(e){
    console.log("handleChange " + e.currentTarget.value);
    this.setState({brend: e.currentTarget.value });
  }

  onSubmit(e){
    e.preventDefault();
    console.log("submit " + this.state.brend);
  }

  render() {
    return (
      <div>
        <h1>Редактировать модель авто </h1>
        <form onSubmit={this.onSubmit}>
          <p>Обновите поля, которые нуждаются в корректировке :</p>
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
        </form>
      </div>      
    );
  }
}

export default UpdateAuto;