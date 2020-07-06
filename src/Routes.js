import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../src/Components/Header/Header"



class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Header}/>
          </Switch>
      </Router>
    );
  }
}

export default Routes;
