/*global kakao*/
import React, { Component } from "react";
import styled from "styled-components";

class MapMarker extends Component {
  componentDidUpdate = () => {
    this.mapScript();
  };

  mapScript = () => {
    let { latitude, longitude } = this.props;

    let container = document.getElementById("Mymap");
    let options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 3,
    };

    let imageSrc =
        "https://img.icons8.com/ios-glyphs/30/000000/order-delivered.png",
      imageSize = new kakao.maps.Size(40, 40),
      imageOption = { offset: new kakao.maps.Point(27, 69) };
    let markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      ),
      markerPosition = new kakao.maps.LatLng(latitude, longitude);

    let map = new kakao.maps.Map(container, options);

    let marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    marker.setMap(map);
  };
  render() {
    return <MapContents id="Mymap" />;
  }
}
const MapContents = styled.div`
  height: 400px;
`;

export default MapMarker;
