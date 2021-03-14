import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Redirect,Route, Link} from "react-router-dom";

import Auto from "./Auto/Auto";
import AddAuto from "./Auto/AddAuto";
import UpdateAuto from "./Auto/UpdateAuto";
import DeleteAuto from "./Auto/DeleteAuto";
import SearchAuto from "./Auto/SearchAuto";

import './style.css';

class AutoCatalog extends Component{

render(){
  return(
    <Router>
    <h1>Каталог авто</h1>
      <Header />
      <Main />
    </Router>
  )
}

}

export default AutoCatalog;

class Header extends React.Component {
  render() {
    return (
      <header>
        <ul >
          <li>
            <button><Link to="/all_auto">Просмотреть авто</Link></button>
          </li>
          <li>
            <Link to="/add_auto">Добавить авто</Link>
          </li>
          <li>
            <Link to="/update_auto">Редактировать авто</Link>
          </li>
          <li>
            <Link to="/delete_auto">Удалить авто</Link>
          </li>
          <li>
            <Link to="/search_auto">Найти авто</Link>
          </li>
        </ul>
        <Link to="/">На стартовую страницу</Link>
      </header>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route excat path="/all_auto" component={Auto} />
          <Route path="/add_auto" component={AddAuto} />
          <Route path="/update_auto" component={UpdateAuto} />
          <Route path="/delete_auto" component={DeleteAuto} />
          <Route path="/search_auto" component={SearchAuto} />
          <Redirect from ="/" to ="" />
        </Switch>
      </main>
    );
  }
}
