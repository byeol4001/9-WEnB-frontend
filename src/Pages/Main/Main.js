import React, { Component } from 'react';
import './Main.scss';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SearchBox from '../SearchBox/SearchBox';
import Houselist from '../Houselist/Houselist';

class Main extends Component {
  state = {
    isActive: 0,
    mobileMenuActive: false,
    searchModal: true,
  };

  render() {
    return (
      <>
        <Header />
        <div className='main'>
          <form className='main-form'>
            <SearchBox />
            <section className='margin-controller'>
              <div className='letter-box'>
                <p className='letter-span'>
                  이제 가까운 곳에서 소중한 것들을 <br></br> 찾아보세요.
                </p>
              </div>
              <div className='three-options-box'>
                <div className='three-options-box-container'>
                  <ul className='three-options-wrapper'>
                    <li aria-hidden='false' className='three-options-wrapper-li'>
                      <a className='three-options-wrapper-a'>
                        <div className='boxbox'>
                          <a className='firstproductbox' href='https://www.airbnb.co.kr/s/experiences/online'>
                            <div className='innerbox-controll'>
                              <div className='innerbox-controll-inner'>
                                <div className='innerbox-controll-inner2'>
                                  <img
                                    className='product-img'
                                    src='https://a0.muscache.com/im/pictures/4127db13-fb7d-43e7-8dc2-619fa61524aa.jpg?im_w=720'
                                    alt='카드'
                                  />
                                </div>
                              </div>
                            </div>
                          </a>
                          <div className='online-experience-description-box'>
                            <div className='online-experience' title='온라인 체험'>
                              온라인 체험
                            </div>
                            <div className='online-experience-des' title='세계 각지의 호스트가 진행하고 모두 함께 즐기는 독특한 액티비티'>
                              세계 각지의 호스트가 진행하고 모두 함께 즐기는 독특한&nbsp;액티비티
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='three-options-box-container'>
                  <ul className='three-options-wrapper'>
                    <li aria-hidden='false' className='three-options-wrapper-li'>
                      <a className='three-options-wrapper-a'>
                        <div className='boxbox2'>
                          <a
                            className='secondproductbox'
                            href='https://www.airbnb.co.kr/s/all?refinement_paths%5B%5D=%2Fplaylists%2F40044&last_search_session_id=1026b7cc-4f54-4b92-a429-ca631280dde5&search_type=section_navigation'
                          >
                            <div className='innerbox-controll'>
                              <div className='innerbox-controll-inner'>
                                <div className='innerbox-controll-inner2'>
                                  <img
                                    className='product-img'
                                    src='https://a0.muscache.com/im/pictures/ef0ee86b-feba-47f8-8882-014b2a7b6926.jpg?im_w=720'
                                    alt='카드'
                                  />
                                </div>
                              </div>
                            </div>
                          </a>
                          <div className='online-experience-description-box'>
                            <div className='online-experience' title='온라인 체험'>
                              가까운 여행지
                            </div>
                            <div className='online-experience-des' title='세계 각지의 호스트가 진행하고 모두 함께 즐기는 독특한 액티비티'>
                              세계 각지의 호스트가 진행하고 모두 함께 즐기는 독특한&nbsp;액티비티
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='three-options-box-container'>
                  <ul className='three-options-wrapper'>
                    <li aria-hidden='false' className='three-options-wrapper-li'>
                      <a className='three-options-wrapper-a'>
                        <div className='boxbox3'>
                          <a className='thirdproductbox' href=''>
                            <div className='innerbox-controll'>
                              <div className='innerbox-controll-inner'>
                                <div className='innerbox-controll-inner2'>
                                  <img
                                    className='product-img'
                                    src='https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720'
                                    alt='카드'
                                  />
                                </div>
                              </div>
                            </div>
                          </a>
                          <div className='online-experience-description-box'>
                            <div className='online-experience' title='온라인 체험'>
                              집 전체
                            </div>
                            <div className='online-experience-des'>세계 각지의 호스트가 진행하고 모두 함께 즐기는 독특한&nbsp;액티비티</div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <div className='black-main'>
              <div className='black-container'>
                <div className='black-wrapper'>
                  <section>
                    <div className='online-experience-letter-box'>
                      <div className='online-box-hangler'>
                        <h1 className='bigone'>
                          <div className='big-letter'>최고의 셰프와 함께하는 온라인 체험</div>
                          <div className='small-letter'>
                            요리계의 전설과 함께하면서 요리에 숨겨진 뒷이야기를 들어보<br></br>세요. 개성 있는 호스트가 진행하는 특별한 활동에
                            참여하면서<br></br> 이제 집에서도 안전하게 체험을 즐기실 수 있습니다.
                          </div>
                        </h1>
                        <div className='modu-dullebogi'>
                          <a
                            href='https://www.airbnb.co.kr/s/experiences?click_referer=t%3ASEE_ALL%7Csid%3Ad3721805-fb81-4196-a262-1121b6b689ea%7Cst%3ADEFAULT_EARHART_INSERT_ITEM_SECTION&refinement_paths%5B%5D=%2Fexperiences%2FKG%2FTag%3A6951&last_search_session_id=d3721805-fb81-4196-a262-1121b6b689ea&search_type=unknown'
                            className='modu-dullebogi-button'
                          >
                            모두 둘러보기
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className='picture-box'>
                    <div className='big-pic-box'>
                      <img className='bigpic-img' src='https://a0.muscache.com/im/pictures/9fe6fb99-5062-4b10-9fcb-8403f8f299c4.jpg?im_w=720' />
                      <div className='cook-description-box'>
                        <div className='bigpic-des'>
                          유명 셰프 로제 트라오레와 함께 인기 만점의 여름 별미<br></br>만들어보기
                        </div>
                      </div>
                    </div>
                    <div className='right-box'>
                      <div className='right-small-box'>
                        <div className='first-small-box'>
                          <div className='small-pic-box'>
                            <a href='/experiences/1714042' className='smallpic-link'>
                              <div className='small-pic-wrapper'>
                                <img
                                  className='small-pic-img'
                                  src='https://a0.muscache.com/im/pictures/3a226e03-acf8-4003-a56d-28e4bd04de65.jpg?im_w=720'
                                  data-original-uri='https://a0.muscache.com/im/pictures/3a226e03-acf8-4003-a56d-28e4bd04de65.jpg?aki_policy=large'
                                />
                              </div>
                              <div className='cook-description-box-small'>
                                <div className='smallpic-des'>
                                  미슐랭 셰프 마크 파비에르와 함께하는<br></br>해산물 요리
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className='seconde-small-box'>
                          <div className='small-pic-box'>
                            <a target='_blank' href='/experiences/1714042' className='smallpic-link'>
                              <div className='small-pic-wrapper'>
                                <img
                                  className='small-pic-img'
                                  src='https://a0.muscache.com/im/pictures/7dbbb8d7-352c-4e62-9f6a-585d96886b4e.jpg?im_w=720'
                                />
                              </div>
                              <div className='cook-description-box-small'>
                                <div className='smallpic-des'>
                                  미슐랭 셰프 수 안과 함께하는 푸드 페어링과<br></br>플레이팅
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='middle-pic-box'>
                        <div className='middlepic-wrapper'>
                          <img
                            className='middlepic-img'
                            src='https://a0.muscache.com/im/pictures/71a6bab1-99df-4ffa-be53-73bbfe7fbc24.jpg?im_w=720'
                          />
                        </div>
                        <div className='cook-description-box-middle'>
                          <div className='bigpic-des-middle'>
                            런던의 스타 셰프 안테아 스티븐슨과 함께 제철 요리<br></br>만들기
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
