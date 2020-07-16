import React, { Component } from 'react';
import './Footer.scss'
import {FaFacebookF, FaTwitter} from  'react-icons/fa';
import {TiSocialInstagram} from  'react-icons/ti';

class Footer extends Component {
  state = {
  }

  render() {
    return (
      <footer className="Footer">
        <div className = "footer-container">
            <section className="introduction-box">
              <h1 className="introduction">소개</h1>
              <ul className="introduction-ul" >
                <li className="introduction-li"><a className="introduction-a" href= "">에어비앤비 이용 방법</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">다양성 및 소속감</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">접근성</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">신뢰와 안전</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">Airbnb Citizen</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">올림픽</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">뉴스룸</a></li>
              </ul>
            </section>
            <section className="introduction-box">
              <h1 className="introduction">커뮤니티</h1>
              <ul className="introduction-ul" >
                <li className="introduction-li"><a className="introduction-a" href= "">에어비앤비 매거진</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">에어비앤비 어소시에이트</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">에어비앤비 비즈니스 프로그램</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">친구 초대하기</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">채용정보</a></li>
              </ul>
            </section>
            <section className="introduction-box">
              <h1 className="introduction">호스팅하기</h1>
              <ul className="introduction-ul" >
                <li className="introduction-li"><a className="introduction-a" href= "">온라인 체험 호스팅하기</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">브라이언 체스키 CEO의 메시지</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">책임감 있는 호스팅</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">Open Homes</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">자료 센터</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">커뮤니티 센터</a></li>
              </ul>
            </section>
            <section className="introduction-box">
              <h1 className="introduction">에어비앤비 지원</h1>
              <ul className="introduction-ul" >
                <li className="introduction-li"><a className="introduction-a" href= "">코로나19관련 업데이트</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">도움말 센터</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">예약 취소 옵션</a></li>
                <li className="introduction-li"><a className="introduction-a" href= "">에어비앤비 이웃 민원 지원 </a></li>
              </ul>
            </section>
          </div>
          <div className="under-footer">
            <div className="under-footer-whole">
            <div className = "left-wrapper">
                <div className="airbnbinc">© 2020 Airbnb, Inc. All rights reserved  </div>
                <div className="policy">
                  <span className="zzum">·</span>
                  <a href="">개인정보 처리방침</a>
                  <span className="zzum">·</span>
                  <a href="">이용약관</a>
                  <span className="zzum">·</span>
                  <a href="">사이트맵</a>
                  <span className="zzum">·</span>
                  <a href="">한국의 변경된 환불정책</a>
                </div>
              <div className="under-footer-right">
                <div className="language-currency-wrapper">
                  <a className="language" href=""> <span><img></img></span>
                  <span className="choose-language">"한국어 (KR)"</span> 
                  </a>
                </div>
                <div className="krw">
                  <a className="krw-a" href=""><span>₩</span><span>"KRW"</span></a>
                </div>
                <div className="social-media">
                  <ul className="social-media-ul">
                    <li><a className="social-media-a" href=""><FaFacebookF style={{color:"#222222"}} /></a></li>
                    <li><a className="social-media-a" href=""><FaTwitter style={{color:"#222222"}} /></a></li>
                    <li><a className="social-media-a" href=""><TiSocialInstagram style={{color:"#222222"}} /></a></li>
                    <li><a className="social-media-a" href=""></a></li>
                    <li><a className="social-media-a" href=""></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>     
    );
  }
}
export default Footer;