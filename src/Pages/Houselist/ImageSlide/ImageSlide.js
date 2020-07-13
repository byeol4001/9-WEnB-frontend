import React from 'react';
import './ImageSlide.scss';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';

function ImageSlide(props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const filteredData = props.data.filter((obj, idx) => {return idx%3===0})
  return (
    <div className='ImageSlide'>
      <Slider {...settings}>
        {filteredData &&
          filteredData.map((obj) => {
            return (
              <div className='img-wrapper'>
                <img alt='photo' src={obj.house_images[0]} />
                <div className='house-ratings'>
                  <span>
                    <FaStar style={{ color: '#FF385C' }} />
                  </span>
                  <span>{obj.house_rating}</span>
                </div>
                <h3>{obj.house_type}</h3>
                <h3>{obj.house_name}</h3>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default ImageSlide;
