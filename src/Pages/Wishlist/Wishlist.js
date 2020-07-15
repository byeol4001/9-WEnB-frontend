import React from 'react';
import WishItem from './WishItem';
import styled from 'styled-components';

const WishList = () => {
  return (
    <WishLists>
      <div className='wishlist-content'>
        <div className='saved-list'>
          <span>저장 목록</span>
          <button>목록 만들기</button>
        </div>
        <WishListWrap>
          <WishItem />
        </WishListWrap>
      </div>
    </WishLists>
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
const WishListWrap = styled.div`
  display: flex;
  flex: flex-wrap;
`;

export default WishList;
