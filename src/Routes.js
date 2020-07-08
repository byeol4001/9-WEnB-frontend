import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../src/Components/Header/Header';
import Houselist from './Pages/Houselist/Houselist';
import Wishlist from './Pages/Wishlist/Wishlist';
import Login from './Components/Login/Login';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route exact path='/stay' component={Houselist} />
          <Route exact path='/wishlist' component={Wishlist} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
