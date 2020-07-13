import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FaAirbnb,
  FaChild,
  FaDog,
  FaBirthdayCake,
  FaSmokingBan,
} from "react-icons/fa";

import {
  AiFillSound,
  AiFillStar,
  AiOutlineUsergroupAdd,
  AiOutlineCalendar,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FcKey } from "react-icons/fc";

const Reservation = () => {
  const [data, setData] = useState("");

  const countCheckIn = () => {
    let date = data.check_in;
    let dateconvert = date.split("-");
    let year = dateconvert[0];
    let month = dateconvert[1];
    let day = dateconvert[2];
    let result = new Date(year, month - 1, day);
    return result;
  };

  const countCheckOut = () => {
    let date = data.check_out;
    let dateconvert = date.split("-");
    let year = dateconvert[0];
    let month = dateconvert[1];
    let day = dateconvert[2];
    let result = new Date(year, month - 1, day);
    return result;
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        // `http://10.58.7.55:8000/reservation?reservation_id=${data.reservation_id}`,
        `./data/data_reservation.json`,
        {
          method: "GET",
          headers: {
            Authorization:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0fQ.nmQnq_9lCt-v4h4n0_ts9XdwVQ0WXvkzqyV2K1TZHH8",
          },
        }
      );
      res.json().then((res) => setData(res));
    }
    data.check_in && fetchData();
  }, []);

  let ReserveConfirm = () => {
    useEffect(() => {
      async function fetchId() {
        let response = await fetch(
          //`http://10.58.7.55:8000/reservation?reservation_id=${data.reservation_id}`,
          `./data/data_reservation.json`,
          {
            method: "PATCH",
            headers: {
              Authorization:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0fQ.nmQnq_9lCt-v4h4n0_ts9XdwVQ0WXvkzqyV2K1TZHH8",
            },
          }
        );
      }
      fetchId();
    }, []);
  };

  let stayDateCount = () => {
    let result =
      Math.abs((countCheckIn() - countCheckOut()) / 1000 / 60 / 60 / 24) - 1;
    return result;
  };

  return (
    <>
      <ReserveTop>
        <FaAirbnb />
        <ul>
          <li className="focus">1. 숙소 이용규칙 확인</li>
          <li>2. 게스트 정보 입력</li>
          <li>3. 확인 및 결제</li>
        </ul>
      </ReserveTop>
      <ReserveWrap>
        <ReserveLeft>
          <h2>숙소 이용규칙 확인하기</h2>
          <h3>
            {data && data.stay_location} {data && stayDateCount()}
          </h3>
          <ReserveDateTime>
            <div>
              <div className="reserve-date-box">
                <span>{data && data.check_in.substr(5, 2)}월</span>
                <span>{data && data.check_in.substr(8, 2)}</span>
              </div>
              <div className="reserve-time">
                <span>체크인</span>
                <span>오후 3:00</span>
              </div>
            </div>
            <div>
              <div className="reserve-date-box">
                <span>{data && data.check_out.substr(5, 2)}월</span>
                <span>{data && data.check_out.substr(8, 2)}</span>
              </div>
              <div className="reserve-time">
                <span>체크아웃</span>
                <span>오전 11:00</span>
              </div>
            </div>
          </ReserveDateTime>
          <h4>
            <FcKey />
            키패드(으)로 셀프 체크인
          </h4>
          <Line />
          <h5>주의할 사항</h5>

          <ul>
            <li>
              <FaChild />
              어린이와 유아에게 적합함
            </li>
            <li>
              <FaDog />
              반려동물 동반 불가
            </li>
            <li>
              <FaBirthdayCake />
              파티나 이벤트 금지
            </li>
            <li>
              <FaSmokingBan />
              흡연 금지
            </li>
            <li>
              <AiFillSound />
              소음이 발생할 수 있음
            </li>
          </ul>
          <Button onClick={ReserveConfirm}>동의 및 계속하기</Button>
        </ReserveLeft>

        <ReserveRight>
          <ReservePriceWrap>
            <dlv class="reserve-right-title">
              <span>{data.stay_title}</span>
              <span>{data.stay_sub_title}</span>
              <span>
                <AiFillStar />
                {Number(data.review_average_score).toFixed(1)}
                <p>({data.review_count})</p>
              </span>
            </dlv>
            <Line inner />
            <div class="reserve-right-datecheck">
              <div>
                <AiOutlineUsergroupAdd />
                <span>게스트 {data.geust}명</span>
              </div>
              <div>
                <AiOutlineCalendar />
                <span>
                  {data.check_in}
                  <AiOutlineArrowRight className="arrow" />
                  {data.check_out}
                </span>
              </div>
            </div>
            <Line inner />
            <div className="price-box">
              <span>
                ₩{parseInt(data.one_night_price).toLocaleString()} X{" "}
                {data && stayDateCount()}박
              </span>
              <p>
                ₩
                {parseInt(
                  data.one_night_price * Number(data && stayDateCount())
                ).toLocaleString()}
              </p>
            </div>
            <div className="price-box">
              <span>서비스 수수료</span>
              <p>₩{parseInt(data.service_fee).toLocaleString()}</p>
            </div>
            <div className="price-box">
              <span>숙박세와 수수료</span>
              <p>₩{parseInt(data.occupancy_taxes).toLocaleString()}</p>
            </div>
            <Line inner />
            <div className="price-box totalprice-box">
              <span>총 합계 (KRW)</span>
              <p>{parseInt(data.total_price).toLocaleString()}</p>
            </div>
          </ReservePriceWrap>
        </ReserveRight>
      </ReserveWrap>
      <ReserveBottom>
        <Line />
        <div>
          <FaAirbnb />
          <span>© Airbnb, Inc.</span>
        </div>
      </ReserveBottom>
    </>
  );
};
const ReserveWrap = styled.div`
  display: flex;
  position: relative;
  width: 1120px;
  margin: 0 auto;
  padding: 30px 0;
  color: #484848;
`;
const ReserveTop = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  svg {
    color: #ff385c;
    font-size: 30px;
    margin-right: 30px;
  }
  ul {
    display: flex;
    color: #717171;
    font-size: 13px;
    li:nth-child(1),
    li:nth-child(2) {
      margin-right: 13px;
      &:after {
        content: ">";
        margin-left: 13px;
        color: #717171 !important;
        font-weight: 400 !important;
      }
    }
    .focus {
      color: #484848;
      font-weight: 900;
    }
  }
`;
const ReserveLeft = styled.div`
  width: 60%;
  h2 {
    font-size: 30px;
    font-weight: 900;
  }
  h3 {
    display: block;
    margin: 50px 0 15px;
    font-size: 18px;
    font-weight: 900;
    &::after {
      content: "박";
    }
  }
  div {
    display: flex;
    width: 80%;
    padding: 10px 0;
  }
  h4 {
    display: flex;
    margin: 15px 0 10px;
    font-size: 15px;
    align-content: center;
    svg {
      margin: 0 20px;
      font-size: 18px;
    }
  }
  h5 {
    display: block;
    margin: 30px 0 25px;
    font-size: 18px;
    font-weight: 900;
  }
  ul {
    li {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      :first-child svg,
      :last-child svg {
        color: #484848 !important;
      }
      svg {
        width: 50px;
        height: 50px;
        padding: 16px;
        margin-right: 15px;
        border: 1px solid #ebebeb;
        border-radius: 4px;
        color: #d93a01;
      }
    }
  }
`;
const ReserveDateTime = styled.div`
  .reserve-date-box,
  .reserve-time {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .reserve-date-box {
    display: flex;
    justify-content: center;
    font-weight: 900;
    font-size: 10px;

    width: 75px;
    height: 57px;
    margin-right: 10px;
    text-align: center;
    background-color: rgb(242, 242, 242) !important;
    border-radius: 7px;
    span:nth-child(2) {
      font-size: 17px;
      margin-top: 3px;
    }
  }

  .reserve-time {
    span:nth-child(1) {
      font-size: 13px;
      font-weight: 100;
    }
    span:nth-child(2) {
      font-size: 15px;
      margin-top: 7px;
    }
  }
`;
const Button = styled.button`
  display: block;
  width: 170px;
  padding: 13px 0;
  margin: 50px 0;
  color: #fff;
  border: none;
  font-weight: 900;
  font-size: 15px;
  border-radius: 7px;
  text-align: center;
  background: linear-gradient(
    153deg,
    rgba(255, 55, 92, 1) 0%,
    rgba(241, 43, 85, 1) 57%,
    rgba(212, 0, 101, 1) 100%
  );
`;
const ReserveRight = styled.div`
  width: 35%;
  margin: 0 0 80px 5%;
  .reserve-right-title {
    span:nth-child(1) {
      font-size: 18px;
      font-weight: 700;
    }
    span:nth-child(2) {
      margin: 15px 0 10px;
      font-size: 13px;
    }
    span:nth-child(3) {
      display: flex;
      margin-top: 5px;
      font-size: 14px;
      font-weight: 900;
      svg {
        color: #ff385c;
        margin-right: 5px;
      }
      p {
        font-weight: 500;
        color: #717171;
        margin-left: 5px;
      }
    }
  }
  .reserve-right-datecheck {
    div {
      display: flex;
      align-items: center;
      margin: 10px 0;
      span {
        font-size: 15px;
      }
      svg {
        margin-right: 8px;
        font-size: 20px;
      }
      .arrow {
        margin: 0 10px;
        font-size: 11px;
      }
    }
  }
  .price-box {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
  .totalprice-box {
    font-weight: 900;
    font-size: 17px;
    margin: 20px 0 0;
  }
`;
const ReservePriceWrap = styled.div`
  padding: 40px;
  border: 1px solid #e4e4e4;
  span {
    display: block;
  }
`;

const ReserveBottom = styled.div`
  width: 1120px;
  padding: 0 0 50px;
  margin: 0 auto;
  color: #484848;
  div {
    display: flex;
    font-size: 14px;
    align-items: center;
    svg {
      font-size: 23px !important;
      margin-right: 15px;
    }
  }
`;
const Line = styled.hr`
  border: 0px;
  height: 1px;
  background-color: #ddd;
  margin: 27px 0;
`;
export default Reservation;
