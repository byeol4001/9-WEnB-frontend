import React, { Component } from 'react';
import './FirstHeader.scss'
import LogoSVG from '../logoSVG/SVG';


class FirstHeader extends React.Component{
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
                    <a className="_each" data-no-client-routing="" href="https://www.airbnb.co.kr/host/homes" id="field-guide-toggle">
                      <div className="each-menu">숙소 호스트 되기</div>
                    </a>
                    <a className="_each" data-no-client-routing="" href="https://www.airbnb.co.kr/d/onlinehost" id="field-guide-toggle">
                      <div className="each-menu">체험 호스팅하기</div>
                    </a>
                    <a className="_each" data-no-client-routing="" href="https://www.airbnb.co.kr/help/home" id="field-guide-toggle">
                      <div className="each-menu-narrow">도움말</div>
                    </a>
                    <a className="_each" data-no-client-routing="" href="" id="field-guide-toggle">
                      <div className="each-menu-narrow">회원가입</div>
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

export default FirstHeader ;