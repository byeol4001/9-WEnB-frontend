import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const DatailViewmore = (props) => {
  const propsbox = props.more_stays;
  return (
    <ViewmoreBoxWrap>
      {propsbox &&
        propsbox.map((box) => (
          <ViewmoreBox>
            <Link to="/">
              <img src={box.house_images[0]} alt="집이미지" />
              <ViewmoreTextbox>
                <span className="text-wrap">
                  {!box.house_superhost ? (
                    ""
                  ) : (
                    <Superhost>슈퍼호스트</Superhost>
                  )}
                  <span>{box.house_name}</span>
                </span>
              </ViewmoreTextbox>
              <span className="price">
                {parseInt(box.price).toLocaleString()}
              </span>
            </Link>
          </ViewmoreBox>
        ))}
    </ViewmoreBoxWrap>
  );
};
const ViewmoreBoxWrap = styled.div`
  display: flex;
`;

const ViewmoreBox = styled.div`
  width: 32%;
  margin-right: 4%;
  margin-top: 20px;
  &:last-child {
    margin-right: 0;
  }
  a {
    color: #222;
  }
  img {
    overflow: hidden;
    width: 100%;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
  }
  .price {
    font-size: 20px;
    font-weight: 900;
    ::after {
      content: " 원";
    }
  }
`;
const ViewmoreTextbox = styled.div`
  .text-wrap {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    span {
      overflow: hidden;
      display: inline-block;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;
const Superhost = styled.span`
  padding: 1px 5px;
  margin-right: 5px;
  border: 1px solid;
  background-color: #fff;
  font-size: 11px !important;
  font-weight: 900;
  border-radius: 5px;
`;
export default DatailViewmore;
