import React, { Component } from "react";
import DetailPageSlide from "./DetailPageSlide";
import DatailSticky from "./DatailSticky";
import MapMarker from "./MapMarker";
import StickyBox from "react-sticky-box";
import DatailViewmore from "./DatailViewmore";
import { Line } from "rc-progress";
import { Link } from "react-router-dom";

import {
  AiFillStar,
  AiFillFire,
  AiOutlineWifi,
  AiFillIdcard,
} from "react-icons/ai";
import {
  IoIosRestaurant,
  IoIosBed,
  IoIosCar,
  IoIosTv,
  IoIosLaptop,
  IoIosShirt,
  IoIosSnow,
} from "react-icons/io";
import { GiSofa } from "react-icons/gi";
import { FiShare, FiHeart } from "react-icons/fi";
import "./DatailPage.scss";

class DatailPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      detailslideShow: false,
    };
  }

  componentDidMount = () => {
    //fetch("http://10.58.2.246:8000/stay/11") 리스트랑 호환
    fetch("./data/data_detail.json")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.data[0] }));
  };

  slideShowToggle = () => {
    const { detailslideShow } = this.state;
    this.setState({
      detailslideShow: !detailslideShow ? true : false,
    });
  };

  host_created = (date) => {
    date = String(date).split("-");
    let result = `${date[0]}년 ${date[1]}월`;
    return result;
  };

  render() {
    const { data } = this.state;
    const filterImg =
      data.house_images &&
      data.house_images.filter((img, index) => {
        return index !== 0;
      });
    return (
      <div className="DatailPage">
        <div className="productdetail-title">
          <h2>{data.house_name}</h2>
          <div className="productdetail-title-description">
            <div className="productdetail-title-description-left">
              <AiFillStar />
              <span className="starrating">
                {data.house_rating}
                <span className="starrating-count">({data.house_reviews})</span>
              </span>
              <span
                className="superhost"
                style={{
                  display: !data.house_superhost ? "none" : "inline-block",
                }}
              >
                <AiFillIdcard />
                슈퍼호스트
              </span>
              <span className="house-address">
                <Link to="">{data.house_address}</Link>
              </span>
            </div>
            <div className="productdetail-title-description-right">
              <span>
                <FiShare />
                공유하기
              </span>
              <span>
                <FiHeart />
                저장
              </span>
            </div>
          </div>

          <div className="detailimage">
            <div className="detailimage-left">
              {data.house_images ? (
                <img src={data.house_images[0]} alt="" />
              ) : (
                ""
              )}
            </div>
            <div className="detailimage-right">
              {filterImg &&
                filterImg.map((img) => {
                  return (
                    <div>
                      <img src={img} alt="" />
                    </div>
                  );
                })}
            </div>

            <span
              className="view-allimage"
              onClick={() => this.setState({ detailslideShow: true })}
            >
              사진 모두 보기
            </span>
          </div>
        </div>
        <div
          className={
            !this.state.detailslideShow
              ? "detailslide-hide"
              : "detailslide-show"
          }
        >
          <DetailPageSlide
            slideShowToggle={this.slideShowToggle}
            house_images={data.house_images}
          />
        </div>

        <div className="detail-description-wrap">
          <div className="detail-description">
            <div className="description-title">
              <h3>{data.description_title}</h3>
              <span>
                인원 {data.house_capacity}명 · 침실 {data.house_num_of_bedroom}
                개 · 침대 {data.house_num_of_bed}개 · 욕실
                {data.house_num_of_bathroom}개
              </span>
            </div>
            <hr className="line" />
            <div className="description-explanation">
              {data.description_explanation &&
                data.description_explanation.map((dex, idx) => {
                  return (
                    <div>
                      <h4>{dex}</h4>
                      <span>{data.description_explanation_detail[idx]}</span>
                    </div>
                  );
                })}

              <hr className="line" />
              <span className="description-text">
                성산 일출봉 근처 드라마 공항가는 길의 촬영지였던 오조리 마을
                안에 하우스가 있습니다 마을 안에는 호수와 바다를 품고 있는 이쁜
                산책로가 있고 철새 도래지와 배우 이상윤의 작업실의 무대가 있는
                곳 이기도 합니다. 제주도 독채 펜션이라고 해서 왜 비싸야 할까요?
                두근두근 하우스는 합리적 가격과 최적의 가성비 갑의 쾌적한 환경을
                품고 있는 독채 펜션으로 그 어느 곳에서도 느낄 수 없는 즐겁고
                편안하게 묵으실 수 있는 보금자리입니다! 다른 곳들과 충분히
                비교해 보시고 두근두근 하우스로 놀러 오세요~ 절대 후회 없는
                제주도 여행의 일부분이 될 것입니다~^^
                <br />
                <br />
                <strong>숙소</strong> <br />
                <br />
                구옥을 리모델링한 제주에서 보기 드문 방 2개, 거실 1개 <br />
                <br />
                가성비 갑의 독채 펜션 렌탈 하우스!
              </span>
              <hr className="line" />
              <div className="explanation-bedtype">
                <h5>침대/침구 유형</h5>
                <div className="bedtype-box-wrap">
                  {data.description_explanation_bedtype &&
                    data.description_explanation_bedtype.map((el) => {
                      return (
                        <div className="bedtype-box">
                          {el.type === "공용 공간" ? <GiSofa /> : <IoIosBed />}
                          <span>{el.type}</span>
                          {el.queen && (
                            <span>
                              퀸사이즈 침대 <span>{el.queen}개</span>
                            </span>
                          )}
                          {el.single && (
                            <span>
                              싱글 침대 <span>{el.single}개</span>
                            </span>
                          )}
                          {el.mattress && (
                            <span>
                              에어 매트리스 <span>{el.mattress}개</span>
                            </span>
                          )}
                          {el.double && (
                            <span>
                              더블 침대 <span>{el.double}개</span>
                            </span>
                          )}
                          {el.supersingle && (
                            <span>
                              슈퍼 싱글 <span>{el.supersingle}개</span>
                            </span>
                          )}
                          {el.king && (
                            <span>
                              킹사이즈 침대 <span>{el.king}개</span>
                            </span>
                          )}
                          {el.sofa && (
                            <span>
                              소파 <span>{el.sofa}개</span>
                            </span>
                          )}
                          {el.blanket && (
                            <span>
                              요와 이불 <span>{el.blanket}개</span>
                            </span>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
              <hr className="line" />
              <div className="explanation-option">
                <h5>편의시설</h5>
                <ul>
                  <li>
                    <IoIosRestaurant />
                    주방
                  </li>
                  <li>
                    <AiOutlineWifi />
                    무선 인터넷
                  </li>
                  <li>
                    <IoIosCar />
                    건물 내 무료 주차
                  </li>
                  <li>
                    <IoIosTv />
                    케이블 TV
                  </li>
                  <li>
                    <IoIosLaptop />
                    노트북 작업 공간
                  </li>
                  <li>
                    <IoIosShirt />
                    옷걸이
                  </li>
                  <li>
                    <IoIosSnow />
                    에어컨
                  </li>
                  <li>
                    <AiFillFire />
                    난방
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sticky-wrap">
            <StickyBox>
              <DatailSticky
                price={data.price}
                house_rating={data.house_rating}
                house_reviews={data.house_reviews}
                house_capacity={data.house_capacity}
                id={data.id}
              />
            </StickyBox>
          </div>
        </div>
        <hr className="line" />
        <div className="detail-information">
          <div className="information-rating">
            <h5>
              <AiFillStar />
              {data.house_rating}점(후기 {data.house_reviews}개)
            </h5>
            <div className="information-rating-wrap">
              <div className="information-rating-box">
                청결도
                <div>
                  <Line
                    percent="88"
                    strokeWidth="3"
                    strokeColor="#222"
                    width="130px"
                  />
                  <span>4.4</span>
                </div>
              </div>
              <div className="information-rating-box">
                정확성
                <div>
                  <Line
                    percent="90"
                    strokeWidth="3"
                    strokeColor="#222"
                    width="130px"
                  />
                  <span>4.5</span>
                </div>
              </div>
              <div className="information-rating-box">
                의사소통
                <div>
                  <Line
                    percent="98"
                    strokeWidth="3"
                    strokeColor="#222"
                    width="130px"
                  />
                  <span>4.9</span>
                </div>
              </div>
              <div className="information-review-box">
                위치
                <div>
                  <Line
                    percent="100"
                    strokeWidth="3"
                    strokeColor="#222"
                    width="130px"
                  />
                  <span>5.0</span>
                </div>
              </div>
              <div className="information-rating-box">
                체크인
                <div>
                  <Line
                    percent="90"
                    strokeWidth="3"
                    strokeColor="#222"
                    width="130px"
                  />
                  <span>4.5</span>
                </div>
              </div>
              <div className="information-rating-box">
                가격 대비 만족도
                <div>
                  <Line
                    percent="90"
                    strokeWidth="3"
                    strokeColor="#222"
                    width="130px"
                  />
                  <span>4.5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="information-review">
            <div className="information-review-box">
              <div className="information-review-box-namedate">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPM2Yoox_vvsCL5FkmzQmq-WyjBLXyauquxQ&usqp=CAU"
                  alt=""
                />
                <ul>
                  <li>형준</li>
                  <li>2020년 7월</li>
                </ul>
              </div>
              <p>
                조용한 제주도 마을을 경험해보기 좋은 숙소입니다.시설과
                인테리어도 깔끔하며, 현무암으로 둘어쌓인 작은 마당 또한 제주도를
                느끼기에 너무 좋습니다.
              </p>
            </div>
            <div className="information-review-box">
              <div className="information-review-box-namedate">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPM2Yoox_vvsCL5FkmzQmq-WyjBLXyauquxQ&usqp=CAU"
                  alt=""
                />
                <ul>
                  <li>형준</li>
                  <li>2020년 7월</li>
                </ul>
              </div>
              <p>
                조용한 제주도 마을을 경험해보기 좋은 숙소입니다.시설과
                인테리어도 깔끔하며, 현무암으로 둘어쌓인 작은 마당 또한 제주도를
                느끼기에 너무 좋습니다.
              </p>
            </div>
            <div className="information-review-box">
              <div className="information-review-box-namedate">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPM2Yoox_vvsCL5FkmzQmq-WyjBLXyauquxQ&usqp=CAU"
                  alt=""
                />
                <ul>
                  <li>형준</li>
                  <li>2020년 7월</li>
                </ul>
              </div>
              <p>
                조용한 제주도 마을을 경험해보기 좋은 숙소입니다.시설과
                인테리어도 깔끔하며, 현무암으로 둘어쌓인 작은 마당 또한 제주도를
                느끼기에 너무 좋습니다.
              </p>
            </div>
            <div className="information-review-box">
              <div className="information-review-box-namedate">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPM2Yoox_vvsCL5FkmzQmq-WyjBLXyauquxQ&usqp=CAU"
                  alt=""
                />
                <ul>
                  <li>형준</li>
                  <li>2020년 7월</li>
                </ul>
              </div>
              <p>
                조용한 제주도 마을을 경험해보기 좋은 숙소입니다.시설과
                인테리어도 깔끔하며, 현무암으로 둘어쌓인 작은 마당 또한 제주도를
                느끼기에 너무 좋습니다.
              </p>
            </div>
            <div className="information-review-box">
              <div className="information-review-box-namedate">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPM2Yoox_vvsCL5FkmzQmq-WyjBLXyauquxQ&usqp=CAU"
                  alt=""
                />
                <ul>
                  <li>형준</li>
                  <li>2020년 7월</li>
                </ul>
              </div>
              <p>
                조용한 제주도 마을을 경험해보기 좋은 숙소입니다.시설과
                인테리어도 깔끔하며, 현무암으로 둘어쌓인 작은 마당 또한 제주도를
                느끼기에 너무 좋습니다.
              </p>
            </div>
          </div>
          <hr className="line" />
          <div className="information-location">
            <h5>위치</h5>
            <h6>{data.house_address}</h6>
            <MapMarker latitude={data.latitude} longitude={data.longitude} />
          </div>
          <hr className="line" />
          <div className="information-host">
            <h5>호스트: {data.host_name}님</h5>
            <h6>회원 가입일: {this.host_created(data.host_created_at)}</h6>
            <ul className="host-description">
              <li>
                <AiFillStar />
                후기 {data.house_reviews}개
              </li>
              <li
                style={
                  !data.house_superhost
                    ? { display: "none" }
                    : { display: "inline-block" }
                }
              >
                <AiFillIdcard />
                슈퍼호스트
              </li>
            </ul>
            <span>
              안녕하세요 여운 301,302호 두곳을 운영하고 있습니다 :)
              <br /> <br />
              여운을 찾아오시는 분들께 늘 만족스러운 곳이 될 수 있도록 최선을 다
              하겠습니다 <br />
              <br />
              숙박 중 게스트와의 교류
              <br /> - 체크인 당일날 이용사항 메시지와 함께 저희와 연락가능한
              전화번호를 안내해드리고 있습니다!
              <br /> - 문의사항은 프라이버시를 위해 최대한 메시지와 통화로 답변
              해드립니다 <br />- 위급상황시 호스트와 만나실수 있습니다 <br />
              <br />
              {data.host_name}님은 슈퍼호스트입니다. <br />
              슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서
              편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
            </span>
          </div>
          <hr className="line" />
          <div className="information-caution">
            <h5>알아두어야 할 사항</h5>
            <div className="caution-wrap">
              <ul>
                <li>숙소 이용규칙</li>
                <li>체크인 시간: 오후 3:00 - 오전 12:00</li>
                <li>체크아웃 시간: 오전 11:00</li>
                <li>흡연 금지</li>
                <li>반려동물 동반 불가</li>
                <li>파티나 이벤트 금지</li>
              </ul>
              <ul>
                <li>안전 및 숙소 정보</li>
                <li>일산화탄소 경보기</li>
                <li>화재 경보기</li>
              </ul>
              <ul>
                <li>환불 정책</li>
                <li>체크인 5일 전까지 수수료 없이 취소 가능</li>
                <li>
                  그 이후로는 체크인 전에 취소하면 첫 1박 요금과 서비스 수수료를
                  제외하고 50%가 환불됩니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="viewmore-house">
          <div className="viewmore-house-wrap">
            <h5>숙소 더 보기</h5>
            <DatailViewmore more_stays={data.more_stays} />
          </div>
        </div>
      </div>
    );
  }
}

export default DatailPage;
