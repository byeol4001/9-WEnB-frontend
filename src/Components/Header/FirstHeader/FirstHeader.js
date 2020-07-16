import React, { Component } from 'react';
import './FirstHeader.scss'
import Login from '../../Login/Login';
import LogoSVG from '../logoSVG/SVG';

class FirstHeader extends React.Component{
    constructor() {
      super();
    this.state = {
      isLoginOpen: false,
    };
  }

  loginOpenHandler = () => {
    this.setState({ isLoginOpen: true });
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
                    <div className="_each" data-no-client-routing="" href="" id="field-guide-toggle">
                      <div className="each-menu">숙소 호스트 되기</div>
                    </div>
                    <div className="_each" data-no-client-routing="" href="" id="field-guide-toggle">
                      <div className="each-menu">체험 호스팅하기</div>
                    </div>
                    <div className="_each" data-no-client-routing="" href="" id="field-guide-toggle">
                      <div className="each-menu-narrow">도움말</div>
                    </div>
                    <div className="_each" data-no-client-routing="" href="" id="field-guide-toggle">
                      <div className="each-menu-narrow">회원가입</div>
                    </div>
                  </li>                   
                  <div className='login' onClick={this.loginOpenHandler}>
                  <div className='a-login' data-no-client-routing='' data-testid='cypress-headernav-login'>
                    <div className='login-letter'>로그인</div>
                    </div>
                  </div>
                </div> 
              </div>
          </nav>
          {this.state.isLoginOpen && <Login/>}
        </header>
      </div>
    )
  }
}

export default FirstHeader ;