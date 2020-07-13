import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import { FiShare, FiHeart, FiX } from "react-icons/fi";
import "./DetailPageSlide.scss";

class DetailPageSlide extends Component {
  render() {
    const { slideShowToggle, house_images } = this.props;
    return (
      <div className="DetailPageSlide">
        <div className="datailslide-botton">
          <div
            className="datailslide-botton--left"
            onClick={() => slideShowToggle(false)}
          >
            <h4>
              <FiX />
              닫기
            </h4>
          </div>
          <div className="datailslide-botton--right">
            <div>
              <FiShare />
            </div>
            <div>
              <FiHeart />
            </div>
          </div>
        </div>
        <AwesomeSlider cssModule={AwesomeSliderStyles}>
          {house_images &&
            house_images.map((img) => {
              return <div data-src={img} />;
            })}
        </AwesomeSlider>
      </div>
    );
  }
}

export default DetailPageSlide;
