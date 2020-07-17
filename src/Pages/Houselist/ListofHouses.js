import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import { FaStar } from 'react-icons/fa';
import { IoIosHeartEmpty } from 'react-icons/io';
import { API_URL_HR } from '../.././config';
import 'react-awesome-slider/dist/styles.css';
import './ListofHouses.scss';

function ListofHouses({ id, price, bedroom, name, images, address, type, capacity, bathroom, bed, rating, onClick, onMouseOver }) {
  const [hovered, setHovered] = useState(false);
  let history = useHistory();

  const heartClickHandler = () => {
    history.push('/wishlist');

    fetch(`${API_URL_HR}/user/wishlist`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        stay_id: id,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const mouseOvered = () => {
    setHovered(true);
  };

  return (
    <div className='ListofHouses' mouseOver={onMouseOver}>
      <div className='house-imgs'>
        <AwesomeSlider>
          {images.map((img) => {
            return <div data-src={img} />;
          })}
        </AwesomeSlider>
      </div>

      <section className='house-detail' onClick={() => onClick(hovered)}>
        <div className='house-main-contents'>
          <div className='house-header'>
            <div className='type-and-name'>
              <p>
                {address}의 {type}
              </p>
              <h1>{name}</h1>
            </div>
          </div>
          <h2>
            인원 {capacity}명 · 침실 {bedroom}개 · 침대 {bed}개 · 욕실 {bathroom}개{' '}
          </h2>
          <h2>에어컨 · 무료 주차 공간 · 주방 · 무선 인터넷</h2>
        </div>
        <div className='house-rating-with-star'>
          <div>
            <span>
              <FaStar style={{ color: '#FF385C' }} />
            </span>
            <h3>{rating}</h3>
          </div>
          <div className='price'>
            <span>₩{parseInt(price).toLocaleString()}</span>
            <span className='price-per-night'>/1박</span>
          </div>
        </div>
        <div onClick={heartClickHandler} onMouseOver={mouseOvered} className='heart-icon'>
          <IoIosHeartEmpty style={{ height: '26px', width: '26px' }} />
        </div>
      </section>
    </div>
  );
}

export default ListofHouses;
