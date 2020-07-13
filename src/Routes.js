import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../src/Components/Header/Header';
import Houselist from './Pages/Houselist/Houselist';
import Wishlist from './Pages/Wishlist/Wishlist';
import Footer from "../src/Components/Footer/Footer"
import Main from "../src/Pages/Main/Main"
import SearchBox from "../src/Pages/SearchBox/SearchBox"
import LoginHeader from './Components/Header/LoginHeader/LoginHeader';


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route exact path='/' component={Header} />
          <Route exact path='/stay' component={Houselist} />
          <Route exact path='/wishlist' component={Wishlist} />
          <Route exact path='/login' component={Login} />
          <Route exact path="/loginheader" component={LoginHeader}/>
          <Route exact path="/footer" component={Footer}/>
          <Route exact path="/main" component={Main}/>
          <Route exact path="/search" component={SearchBox}/>
          <Route exact path="/stay?address=:address&guests=:guest" component={Houselist} />
          <Route exact path='/wishlist' component={Wishlist} />
        </Switch>

      </Router>
    );
  }
}

export default Routes;
