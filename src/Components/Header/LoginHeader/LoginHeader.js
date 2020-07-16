import React, { Component } from 'react';
import './LoginHeader.scss'
import LogoSVG from '../logoSVG/SVG';
import {GiHamburgerMenu} from 'react-icons/gi'

class LoginHeader extends React.Component{
  render () {
    return(
      <div className="Nav">
        <header className="header">
          <nav className="header-wrapper-main">
            <div className="header-wrapper-logo">
             <LogoSVG/>
            </div>
              <div className="right-wrapper-guide" aria-label="메인">
                <div className ="desktopMenuList">
                  <li>
                    <div className="_each" data-no-client-routing="" href="" id="field-guide-toggle">
                      <div className="each-menu">호스트 모드로 전환</div>
                    </div>
                    <div className="_each" data-no-client-routing="" href="" id="field-guide-toggle">
                      <div className="each-menu-narrow">체험 호스팅하기</div>
                    </div>
                    <div className="_each" data-no-client-routing="" href="" id="field-guide-toggle">
                      <div className="each-menu-narrow">도움말</div>
                    </div>
                  </li>                   
                  <div className="login">
                    <div className="a-login" data-no-client-routing="" data-testid="cypress-headernav-login" href="/login">
                      <div className="login-letter">    
                        <GiHamburgerMenu style={{color:"#222"}} className="hamberger-menu"/>
                        <img className="login-logo" src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"/></div>
                    </div>
                  </div>
                </div> 
              </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default LoginHeader ;