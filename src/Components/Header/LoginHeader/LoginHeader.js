import React, { Component } from 'react';
import './LoginHeader.scss'
import LogoSVG from '../logoSVG/SVG';
import Login from '../../Login/Login';


class LoginHeader extends React.Component{
  constructor() {
    super();
    this.state = {
      isLoginOpen: false,
    };
  }
  loginOpenHandler = () => {
    this.setState({ isLoginOpen: true });
  };

  loginCloseHandler = () => {
    this.setState({ isLoginOpen: false });
  };
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
                    <a className="_each" data-no-client-routing="" href="https://www.airbnb.co.kr/d/onlinehost" id="field-guide-toggle">
                      <div className="each-menu">호스트 모드로 전환</div>
                    </a>
                    <a className="_each" data-no-client-routing="" href="https://www.airbnb.co.kr/help/home" id="field-guide-toggle">
                      <div className="each-menu-narrow">체험 호스팅하기</div>
                    </a>
                    <a className="_each" data-no-client-routing="" href="" id="field-guide-toggle">
                      <div className="each-menu-narrow">도움말</div>
                    </a>
                  </li>                   
                  <div className='login' onClick={this.loginOpenHandler}>
                  <a className='a-login' data-no-client-routing='' data-testid='cypress-headernav-login'>
                    <div className='login-letter'>로그인</div>
                    </a>
                  </div>
                </div> 
              </div>
           
          </nav>
          {this.state.isLoginOpen && <Login />}
        </header>
      </div>
    )
  }
}

export default LoginHeader ;