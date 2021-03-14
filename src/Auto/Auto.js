import React from "react";
import "./../style.css";
import { Switch, Route} from "react-router-dom";

import AutoListByBrend from "./../AutoList/AutoListByBrend";
import Brend from "./../AutoList/Brend";

class Auto extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/all_auto" component={AutoListByBrend} />
        <Route path="/all_auto/:brend" component={Brend} />
      </Switch>
    );
  }
}

export default Auto;