import React, { Component } from 'react';
import './SecondHeader.scss'
import {FiSearch} from  'react-icons/fi';
import SearchBox from '../../../Pages/SearchBox/SearchBox'
import LogoSVG from '../logoSVG/SVG';

class SecondHeader extends React.Component{
  constructor() {
    super();
    this.state = {
      isSearchBoxOpen: false, 
    };
  };

  OpenSearchHandler=()=>{
    this.setState({isSearchBoxOpen: !this.state.isSearchBoxOpen})
  }
 
  CloseSearchHandler=()=>{
     this.setState({isSearchBoxOpen:  false})
 }
 
  render () {
    console.log(this.state)
    return(
      <div className="Second-Nav">
        <div className="btn-click-open-search" style={this.state.isSearchBoxOpen === false ? {display: 'none'} : {} }>
          <button className="close-btn" onClick={this.CloseSearchHandler} >x</button> 
        <SearchBox />      
        </div>
        <header className="Second-header" style={this.state.isSearchBoxOpen === false ? {} : {display: 'none'}}>
          <nav className="header-wrapper-main">
            <div className="header-wrapper-logo">
             <LogoSVG/>
            </div>  
            <div className="location-wrapper">
                  <div className="add-location">
                    <button className="location-btn"
                    onClick={this.OpenSearchHandler}
                    >
                      <span className="magnifying-glass"><FiSearch style={{color:"#ff385c"}} /></span>
                      <span className="letter-location">     위치 추가</span>
                    </button>
                  </div>
                </div>    
              <div className="right-wrapper-guide" aria-label="메인">
                <div className ="desktopMenuList">         
                  <li>
                    <a className="_each" data-no-client-routing="" href="https://www.airbnb.co.kr/help/home" id="field-guide-toggle">
                      <div className="each-menu-narrow">도움말</div>
                    </a>
                  </li>         
                  <div className="login">
                    <a className="a-login" data-no-client-routing="" data-testid="cypress-headernav-login" href="/login">
                      <div className="login-letter">로그인</div>
                    </a>
                  </div>
                </div>
              </div>   
          </nav>
        </header>
      </div>
    )
  }
}

export default SecondHeader;