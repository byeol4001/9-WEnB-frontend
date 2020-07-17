import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../src/Components/Header/Header';
import Houselist from './Pages/Houselist/Houselist';
import LoginHeader from './Components/Header/LoginHeader/LoginHeader';
import Login from './Components/Login/Login';
import Main from '../src/Pages/Main/Main';
import SearchBox from '../src/Pages/SearchBox/SearchBox';
import DatailPage from '../src/Pages/DetailPage/DatailPage';
import Reservation from '../src/Pages/Reservation/Reservation';
import Footer from '../src/Components/Footer/Footer';
import WishList from './Pages/WishList/WishList';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route exact path='/stay' component={Houselist} />
          <Route exact path='/loginheader' component={LoginHeader} />
          <Route exact path='/wishlist' component={WishList} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/main' component={Main} />
          <Route exact path='/search' component={SearchBox} />
          <Route exact path='/stay?location=:location&guests=:guest' component={Houselist} />
          <Route exact path='/stay/:id' component={DatailPage} />
          <Route exact path='/reservations' component={Reservation} />
          <Route exact path='/footer' component={Footer} />
          <Route exact path='/reservations?reservation_id:id' component={Reservation} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
