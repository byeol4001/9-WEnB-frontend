import React, { useState, useEffect } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { API_URL_HR } from '../../config';
import styled from 'styled-components';

const WishList = () => {
  const [myWishList, setMyWishList] = useState([]);

  useEffect(() => {
    fetch(`${API_URL_HR}/user/wishlist`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then((res) => res.json())
      .then((res) => setMyWishList(res.wishlist));
  }, []);

  return (
    <>
      <Header />
      <WishLists>
        <div className='wishlist-content'>
          <div className='saved-list'>
            <span>저장 목록</span>
            <button>목록 만들기</button>
          </div>
          <WishlistWrap>
            {myWishList.map((list) => {
              return (
                <WishlistBox>
                  <div>
                    <img src={list.image} alt='img-example' />
                  </div>
                  <div>
                    <p>{list.title}</p>
                    <p>{list.address}</p>
                  </div>
                </WishlistBox>
              );
            })}
          </WishlistWrap>
        </div>
      </WishLists>
      <Footer />
    </>
  );
};

const WishLists = styled.main`
  padding: 0 80px;
  margin: 100px;
  .saved-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 36px;
    span {
      font-size: 32px;
      line-height: 36px;
      font-weight: 600;
    }
    button {
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
      border-radius: 8px;
      padding: 13px 23px;
      background-color: white;
      border: 1px solid black;

      &:hover {
        background-color: #f4f4f4;
      }
    }
  }
`;

const WishlistWrap = styled.div`
  overflow: hidden;
  clear: both;
  width: 100%;
`;

const WishlistBox = styled.div`
  overflow: hidden;
  float: left;
  width: 31%;
  margin: 2% 1.1%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px !important;
  border-radius: 17px;
  div:nth-child(1) {
    height: 15vw;
    overflow: hidden;
    img {
      width: 120%;
      object-fit: cover;
    }
  }
  div:nth-child(2) {
    height: 90px;
    padding: 20px;
    p:nth-child(1) {
      width: 100%;
      margin-bottom: 7px;
      font-size: 20px;
      font-weight: 900;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      /* //width: 350px; */
    }
    p:nth-child(2) {
      font-size: 15px;
      font-weight: 400;
      color: #909090;
    }
  }
`;

export default WishList;
