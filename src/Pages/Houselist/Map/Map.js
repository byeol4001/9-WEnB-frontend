/*global kakao*/
import React from 'react';
import './Map.scss';
const {kakao} = window;

class Map extends React.Component {
  componentDidMount = () => {
    this.handleMap();
  };

  componentDidUpdate = (prevProps) => {
    this.handleMap();
  };

  handleMap = () => {
    const container = document.getElementById('myMap'),
      options = {
        center: new kakao.maps.LatLng(33.50972, 126.52194),
        level: 9,
        scrollwheel: false,
      };
    const map = new kakao.maps.Map(container, options);

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const imageSrc = 'https://img.icons8.com/office/50/000000/marker.png',
      imageSize = new kakao.maps.Size(40, 40),
      markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    const imageSrc2 = 'https://img.icons8.com/color/48/000000/cottage.png',
      imageSize2 = new kakao.maps.Size(40, 40),
      markerImage2 = new kakao.maps.MarkerImage(imageSrc2, imageSize2);

    this.props.data
      .filter((el, idx) => {
        return idx !== +this.props.hoveredMarker;
      })
      .forEach((el) => {
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(el.latitude, el.longitude),
          image: markerImage,
        });
      });

    this.props.data
      .filter((el, idx) => {
        return idx == +this.props.hoveredMarker;
      })
      .forEach((el) => {
        var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(el.latitude, el.longitude),
          image: markerImage2,
        });

        var content = `<div style="overflow:hidden;position:relative;width:274;height:300;background-color:white;border-radius:10px;" >
  <img style="z-index:-1;" src=${el.house_images[0]} width = 273px height=182.67px />
  <div style="padding:10px">        
  <img width = 14px src=${'https://img.icons8.com/fluent/48/000000/star.png'}/>
  <span style="font-size:14px;margin-botom:7px;padding-left:5px">${el.house_rating}</span>
  <div style="     white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;font-size:14px;margin-bottom:2px;margin-top:3px">${el.house_name}</div>
  </div>
  </div>`;

        var overlay = new kakao.maps.CustomOverlay({
          content: content,
          map: map,
          position: marker.getPosition(),
          xAnchor: 0.3,
          yAnchor: 1,
        });

        kakao.maps.event.addListener(marker, 'click', function () {
          overlay.setMap();
          marker.setImage(markerImage2);
        });
      });
  };

  render() {
    return (
      <div className='Map'>
        <div id='myMap' />
      </div>
    );
  }
}

export default Map;
