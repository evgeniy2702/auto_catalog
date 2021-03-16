import React from "react";
import "./../style.css";

import Input from "./../Form/Input";
import Option from "./../Form/Option";
import Brends from "./../Const/Brends";


class UpdateAuto extends React.Component {

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