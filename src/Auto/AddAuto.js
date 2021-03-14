import React from "react";
import "./../style.css";


class AddAuto extends React.Component {
  render() {
    return (
      <div>
        <h1>Добавить модель авто </h1>
        <form onChange={this.onChange}>
          <label></label><br/>
          <input />
        </form>
      </div>      
    );
  }
}

export default AddAuto;