import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";

import Auto from "./Auto/Auto";
import AddAuto from "./Auto/AddAuto";
import AddNewBrend from "./Auto/AddBrend";
import UpdateAuto from "./Auto/UpdateAuto";
import DeleteAuto from "./Auto/DeleteAuto";
import SearchAuto from "./Auto/SearchAuto";
import Brends from "./Const/Brends";
import Models from "./Const/Models";

import Brends from "./../Const/Brends";

import "./style.css";

class AutoCatalog extends Component {

constructor(props){
  super(props);
  this.state = {
    brends: Brends,
    models: Models
  }
}
  render() {
    const {brends, models} = this.state;
    
    
    return (
      <Router>
        <h1>Каталог авто</h1>
        <Header />
        <Main />
      </Router>
    );
  }
  componentDidUpdate(){
       this.setState({brends:Brends});
    console.log("App " + brends);
    this.setState({models: Models});
    console.log("App " + models);
     
    };
}

export default AutoCatalog;

class Header extends React.Component {
  render() {
    
    return (
      <header>
        <ul>
          <li>
            <button className="button">
              <Link to="/all_auto">Просмотреть авто</Link>
            </button>
          </li>
          <li>
            <button className="button">
              <Link to="/add_auto">Добавить авто</Link>
            </button>
          </li>
          <li>
            <button className="button">
              <Link to="/add_brend">Добавить новый Бренд</Link>
            </button>
          </li>
          <li>
            <button className="button">
              <Link to="/update_auto">Редактировать авто</Link>
            </button>
          </li>
          <li>
            <button className="button">
              <Link to="/delete_auto">Удалить авто</Link>
            </button>
          </li>
          <li>
            <button className="button">
              <Link to="/search_auto">Найти авто</Link>
            </button>
          </li>
          <li>
            <button className="button">
              <Link to="/">На стартовую страницу</Link>
            </button>
          </li>
        </ul>
      </header>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route excat path="/all_auto" component={Auto} brends = {Brends}/>
          <Route path="/add_auto" component={AddAuto} />
          <Route path="/add_brend" component={AddNewBrend} />
          <Route path="/update_auto" component={UpdateAuto} />
          <Route path="/delete_auto" component={DeleteAuto} />
          <Route path="/search_auto" component={SearchAuto} />
          <Redirect from="/" to="" />
        </Switch>
      </main>
    );
  }
}
