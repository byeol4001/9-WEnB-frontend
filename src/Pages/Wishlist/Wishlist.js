import React from 'react';
import './Wishlist.scss';
import styled from 'styled-components';

const  Wishlist =()=> {
  return (
    <main className='Wishlist'>
      <div className='wishlist-content'>
        <div className='saved-list'>
          <span>저장 목록</span>
          <button>목록 만들기</button>
        </div>
      </div>
    </main>
  );
}

export default Wishlist;


