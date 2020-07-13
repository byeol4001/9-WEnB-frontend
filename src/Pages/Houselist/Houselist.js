import React, { useState, useEffect } from 'react';
// import {useParams, useLocation, useHistory, useRouteMatch } from "react-router-dom";
import { useHistory } from 'react-router-dom';

// import axios from 'axios';
import Map from './Map/Map';
import ListofHouses from './ListofHouses';
import ImageSlide from './ImageSlide/ImageSlide';
import './Houselist.scss';
import Footer from "../../Components/Footer/Footer";
import "../../Components/Footer/Footer.scss";
import Header from"../../Components/Header/Header";

const Houselist = (props) => {
  const [data1, setData1] = useState([]);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [type, setType] = useState(false);
  const [isHouseTypeChecked, setIsHouseTypeChecked] = useState(false);
  const [houseType, setHouseType] = useState('');
  const [price, setPrice] = useState(false);
  const [lowPrice, setLowPrice] = useState('');
  const [highPrice, setHightPrice] = useState('');
const [query , setQuery] =useState({page:"",stayType:"",price:""})
const getQuery=()=>{
  return `page=${query.page}&&stay_type=${query.stayType}&&price=${query.price}`
}
  async function fetchData() {
    // const response = await fetch('http://10.58.1.222:8000/stay');
    const response = await fetch('http://localhost:3000/data1/response.json');
    const json = await response.json();
    setData1(json.stay_list);
  }

  useEffect(() => {
    fetchData();
  }, []);

  let history = useHistory();

  const clickHandler = (id, hoverState) => {
    if ( hoverState ) return;
    history.push(`/stay/${id}`);
  };

  const pageHandler = async (num) => {
    props.history.push(`/stay?page=${num}`);
    const nextResponse = await fetch(`http://10.58.1.222:8000/stay?${getQuery()}`);
    const nextJson = await nextResponse.json();
    setData1(nextJson.stay_list);
  };

  const mouseOverHandler = (id) => {
    setHoveredMarker(id);
  };

  const typeOpenHandler = () => {
    setType(!type);
  };

  const priceOpenHandler = () => {
    setPrice(!price);
  };

  const inputHandler = (e, set, val) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    set(value);
    setHouseType(val);
  };

  const typeSubmitHandler = async () => {
    props.history.push(`/stay?stay_type=${houseType}`);
    const nextResponse3 = await fetch(`http://10.58.1.222:8000/stay?stay_type=${houseType}`);
    const nextJson3 = await nextResponse3.json();
    setData1(nextJson3.stay_list);
    setType(!type);
  };

  const lowPriceInputHandler = (event) => {
    const lowPriceValue = event.target.value;
    setLowPrice(lowPriceValue);
  };

  const highPriceInputHandler = (event) => {
    const highPriceValue = event.target.value;
    setHightPrice(highPriceValue);
  };

  const priceFilterHandler = async () => {
    props.history.push(`/stay?price=${lowPrice}~${highPrice}`);
    const nextResponse2 = await fetch(`http://10.58.1.222:8000/stay?price=${lowPrice}~${highPrice}`);
    const nextJson2 = await nextResponse2.json();
    setData1(nextJson2.stay_list);
    setPrice(!price);
  };

  const totalPrice = data1.length > 0 && data1.reduce((a, b) => +a + +b.price, 0);
  const avePrice = parseInt(totalPrice / data1.length).toLocaleString();

  return (
    <>
    <Header />
    <div className='Houselist'>
      <div className='main-wo-footer'>
        <main className='main-left'>
          <div className='main-left-header'>
            <p>50개 이상의 숙소</p>
            <h1 className='house-in-jeju'>제주도의 숙소</h1>
            <div className='filter-buttons'>
              <button>유연한 환불 정책</button>
              <button onClick={typeOpenHandler}>숙소 유형</button>
              <div className={type ? 'show-houselist' : 'hide'}>
                <div className='type-wrapper'>
                  <div className='house-type'>
                    <span>
                      <label className={`checkbox-label${houseType === '전체' ? ' checked' : ''}`}>
                        <input
                          name='전체'
                          type='checkbox'
                          value='전체'
                          checked={isHouseTypeChecked}
                          onChange={(e) => inputHandler(e, setIsHouseTypeChecked, '전체')}
                        />
                        <span class='checkbox-custom'></span>
                      </label>
                    </span>
                    <span>
                      <div>집 전체</div>
                      <p>집 전체를 단독으로 사용합니다.</p>
                    </span>
                  </div>
                  <div className='house-type'>
                    <span>
                      <label className={`checkbox-label${houseType === '개인실' ? ' checked' : ''}`}>
                        <input
                          name='개인실'
                          value='개인실'
                          type='checkbox'
                          checked={isHouseTypeChecked}
                          onChange={(e) => inputHandler(e, setIsHouseTypeChecked, '개인실')}
                        />
                        <span class='checkbox-custom'></span>
                      </label>
                    </span>
                    <span>
                      <div>개인실</div>
                      <p>침실은 단독으로 쓰고, 이외의 공간은</p>
                      <p> 호스트나 다른 게스트와 함께 이용할 수도</p>
                      <p> 있습니다.</p>
                    </span>
                  </div>
                  <div className='house-type'>
                    <span>
                      <label className={`checkbox-label${houseType === '호텔객실' ? ' checked' : ''}`}>
                        <input
                          name='호텔객실'
                          value='호텔객실'
                          type='checkbox'
                          checked={isHouseTypeChecked}
                          onChange={(e) => inputHandler(e, setIsHouseTypeChecked, '호텔객실')}
                        />
                        <span class='checkbox-custom'></span>
                      </label>
                    </span>
                    <span>
                      <div>호텔 객실</div>
                      <p>부티크 호텔, 호스텔 등의 개인실이나</p>
                      <p>다인실을 이용합니다</p>
                    </span>
                  </div>
                  <div className='house-type'>
                    <span>
                      <label className={`checkbox-label${houseType === '다인실' ? ' checked' : ''}`}>
                        <input
                          name='다인실'
                          value='다인실'
                          type='checkbox'
                          checked={isHouseTypeChecked}
                          onChange={(e) => inputHandler(e, setIsHouseTypeChecked, '다인실')}
                        />
                        <span class='checkbox-custom'></span>
                      </label>
                    </span>
                    <span>
                      <div>다인실</div>
                      <p>사적 공간 없이, 침실이나 욕실 등을 </p>
                      <p>호스트나 다른 게스트와 함께 이용합니다</p>
                    </span>
                  </div>
                  <button onClick={typeSubmitHandler} className='save'>
                    저장
                  </button>
                </div>
              </div>
              <button onClick={priceOpenHandler}>요금</button>
              <div className={price ? 'show-price' : 'hide'}>
                <div className='price'>
                  <div className='house-type'>평균 1박 요금은 ₩{avePrice} 입니다.</div>
                  <section>
                    <div className='price-wrapper'>
                      <div className='price-range'>최저 요금</div>
                      <div className='price-input-wrapper'>
                        <span>₩</span>
                        <span>
                          <label>
                            <input name='' type='text' onChange={lowPriceInputHandler} />
                          </label>
                        </span>
                      </div>
                    </div>
                    <div className='dash'>_</div>
                    <div className='price-wrapper'>
                      <div className='price-range'>최고 요금</div>
                      <div className='price-input-wrapper'>
                        <span>₩</span>
                        <span>
                          <label>
                            <input name='' type='text' onChange={highPriceInputHandler} />
                          </label>
                        </span>
                      </div>
                    </div>
                  </section>
                  <button onClick={priceFilterHandler} className='save'>
                    저장
                  </button>
                </div>
              </div>
              <button>필터 추가하기</button>
            </div>
            <h2>여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다.</h2>
          </div>
          <div className='house-list-wrapper'>
            {data1.map((item, idx) => {
              return (
                <ListofHouses
                  onMouseOver={() => mouseOverHandler(item.house_id)}
                  onClick={(hoverState) => clickHandler(item.house_id, hoverState)}
                  key={idx}
                  id={item.house_id}
                  name={item.house_name}
                  images={item.house_images}
                  address={item.house_address}
                  type={item.house_type}
                  capacity={item.house_capacity}
                  bedroom={item.house_num_of_bedroom}
                  bathroom={item.house_num_of_bathroom}
                  bed={item.house_num_of_bed}
                  rating={item.house_rating}
                  price={item.price}
                  super={item.house_superhost}
                  lat={item.latitude}
                  lon={item.longitude}
                />
              );
            })}
          </div>
          <div className='buttons'>
            <button onClick={() => pageHandler(1)}>1</button>
            <button onClick={() => pageHandler(2)}>2</button>
            <button onClick={() => pageHandler(3)}>3</button>
            <button onClick={() => pageHandler(4)}>4</button>
          </div>
          <div className='house-recommanded'>
            <h1>최근 조회</h1>
            <h2>현재 검색 결과와 일치하도록 날짜와 가격이 업데이트되었습니다.</h2>
            <ImageSlide data={data1} />
          </div>
        </main>
        <div className='map-right'>
          <Map data={data1} hoveredMarker={hoveredMarker} />
        </div>
      </div>
 
   
    </div>
    <Footer />
    </>
  );
};

export default Houselist;
