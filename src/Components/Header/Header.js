import React, { Component } from 'react';
import SecondHeader from'./SecondHeader/SecondHeader';
import FirstHeader from './FirstHeader/FirstHeader';
//import LoginHeader from './LoginHeader/LoginHeader';


class Header extends Component {
  state = {
    prevScrollpos: window.pageYOffset,
    visible: true
  }

  handleScroll = () => {
    const {prevScrollpos} = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    this.setState ({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }


  render() {
    return (
      <div className="Nav">
        {this.state.prevScrollpos > 0  ? <SecondHeader/> : <FirstHeader/>}
      </div>
  
    );

  }
}

export default Header;
