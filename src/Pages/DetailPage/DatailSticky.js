import React, { Component } from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { FiChevronDown, FiPlus, FiMinus } from 'react-icons/fi';
import { DateRangePicker } from 'react-dates';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { API_URL_HR } from '../../config';
import { withRouter } from 'react-router-dom';
import 'moment/locale/ko';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
class DatailSticky extends Component {
  constructor(props) {
    moment.locale('ko');
    super(props);
    this.state = {
      startDate: null,
      stayDate: null,
      endDate: null,
      guest: 0,
      guestModal: false,
      showPriceModal: false,
      reservationId: '',
    };
  }
  guestModalToggle = () => {
    const currentState = this.state.guestModal;
    this.setState({ guestModal: !currentState });
  };
  guestMinus = () => {
    const guests = this.state.guest;
    this.setState({
      geust: guests <= 0 ? 0 : guests - 1,
    });
  };
  guestPlus = () => {
    const guests = this.state.guest;
    const guestLimit = this.props.house_capacity;
    if (guests >= guestLimit) {
      alert(`머물수 있는 최대 게스트 수는 ${guestLimit}명 입니다.`);
      this.setState({ guest: guestLimit });
      return;
    } else {
      this.setState({ guest: guests + 1 });
    }
  };
  totalPriceCount = () => {
    const { showPriceModal, startDate, endDate } = this.state;
    const currentState = showPriceModal;
    let start = new Date(startDate && startDate._d);
    let end = new Date(endDate && endDate._d);
    let price = this.props.price;
    let stayDate = Math.abs((start - end) / 1000 / 60 / 60 / 24) - 1;
    let stayPrice = stayDate * price;
    let servicePrice = stayDate * price * 0.1;
    let commission = servicePrice * 0.1;
    let totalPrice = stayPrice + servicePrice + commission;
    this.setState({
      showPriceModal: !currentState,
      stayDate: stayDate,
      stayPrice: stayPrice,
      servicePrice: servicePrice,
      commission: commission,
      totalPrice: totalPrice,
    });
  };
  reserveButton = () => {
    let callbackId = () => {
      fetch(`${API_URL_HR}/reservations?reservation_id=${this.state.reservationId}`, {
        method: 'GET',
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then(this.props.history.push(`/reservations?reservation_id=${this.state.reservationId}`))
        .then((res) => res.json())
        .then((res) => console.log(res));
    };
    fetch(`${API_URL_HR}/reservations`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        stay_id: this.props.id,
        check_in: this.state.startDate,
        check_out: this.state.endDate,
        one_night_price: this.props.price,
        service_fee: this.state.servicePrice,
        occupancy_taxes: this.state.commission,
        total_price: this.state.totalPrice,
        guest: this.state.guest,
      }),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ reservationId: res.reservation_id }, callbackId));
  };
  render() {
    const { price, review_count, house_rating, house_capacity, id } = this.props;
    const {
      startDate,
      endDate,
      guest,
      guestModal,
      showPriceModal,
      stayDate,
      stayPrice,
      servicePrice,
      commission,
      totalPrice,
      focusedInput,
      reservationId,
    } = this.state;
    console.log('props>', this.state);
    console.log('reservation_id>', this.state.reservationId);
    return (
      <div className='DatailSticky'>
        <StickyWrap>
          <PriceWrap>
            <span className='price'>{price && parseInt(price).toLocaleString()}</span>
            <span className='rating'>
              <AiFillStar />
              {house_rating}
              <span className='starrating-count'>({review_count})</span>
            </span>
          </PriceWrap>
          <DatePickerWrap>
            <DateRangePicker
              startDate={startDate}
              startDatePlaceholderText={'날짜 추가'}
              endDatePlaceholderText={'날짜 추가'}
              startDateId='startInput'
              endDate={endDate}
              endDateId='endInput'
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={focusedInput}
              onFocusChange={(focusedInput) => this.setState({ focusedInput })}
            />
            <AddPerson onClick={this.guestModalToggle}>
              <div>
                <span>인원</span>
                <span>게스트 {guest}명 </span>
              </div>
              <FiChevronDown />
            </AddPerson>
            <AddPersonModal guestModals={guestModal}>
              <div className='picker-wrap'>
                <span>성인</span>
                <div className='count'>
                  <div className='guestminus' onClick={this.guestMinus}>
                    <FiMinus />
                  </div>
                  <span>{guest}</span>
                  <div className='guestplus' onClick={this.guestPlus}>
                    <FiPlus />
                  </div>
                </div>
              </div>
              <div className='picker-wrap'>
                <span>유아</span>
                <div className='count'>
                  <div className='guestminus'>
                    <FiMinus />
                  </div>
                  <span>0</span>
                  <div className='guestplus'>
                    <FiPlus />
                  </div>
                </div>
              </div>
              <p>최대 {house_capacity}명. 유아는 숙박인원에 포함되지 않습니다.</p>
              <CloseModal onClick={() => this.setState({ guestModal: false })}>닫기</CloseModal>
            </AddPersonModal>
          </DatePickerWrap>
          <Button showPriceModals={showPriceModal}>
            {!!startDate && !!endDate && guest > 0 ? (
              <span onClick={this.totalPriceCount}>예약 가능 여부 보기</span>
            ) : (
              <span onClick={() => alert('숙박 날짜와 인원수를 체크해 주세요😊😊')}>예약 하기</span>
            )}
          </Button>
          <ShowPrice showPriceModals={showPriceModal}>
            <p>예약 확정 전에는 요금이 청구되지 않습니다.</p>
            <div class='price-box'>
              <span>
                ₩{price && parseInt(price).toLocaleString()} X {stayDate}일
              </span>
              <span>₩{stayDate && stayPrice.toLocaleString()}</span>
            </div>
            <div class='price-box'>
              <span class='underline'>서비스 수수료</span>
              <span>₩{stayDate && servicePrice.toLocaleString()}</span>
            </div>
            <div class='price-box'>
              <span class='underline'>숙박세와 수수료</span>
              <span>₩{stayDate && commission.toLocaleString()}</span>
            </div>
            <Line></Line>
            <div class='price-box totalprice'>
              <span>총 합계</span>
              <span>₩{stayDate && totalPrice.toLocaleString()}</span>
            </div>
            <Button onClick={this.reserveButton}>
              <span>예약하기</span>
            </Button>
          </ShowPrice>
        </StickyWrap>
      </div>
    );
  }
}
const StickyWrap = styled.div`
  position: relative;
  top: 50px;
  width: 100%;
  padding: 30px 25px 5px;
  border-radius: 15px;
  border: 1px solid rgb(221, 221, 221);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 10px;
`;
const PriceWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  .price {
    &:before {
      content: '₩';
    }
    font-size: 20px;
    font-weight: 900;
    &:after {
      content: '  / 박';
      font-size: 14px;
      font-weight: 400;
    }
  }
  .rating {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 900;
  }
  svg {
    color: #ff385c;
  }
  .starrating-count {
    margin-left: 8px;
    color: #717171;
    font-weight: 500;
  }
`;
const DatePickerWrap = styled.div`
  margin-top: 20px;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  .DayPicker__withBorder {
    width: auto !important;
    padding: 20px;
  }

  .DateInput  {
    width: 146px;
  }
  .DateInput_input {
    padding: 0 14px 10px;
    font-weight: 500;
    font-size: 17px;
  }
  .DateInput_1:first-child {
    &::before {
      content: '체크인';
      display: block;
      padding: 14px 0 2px 14px;
      font-size: 10px;
      font-weight: 900;
    }
  }
  .DateInput_1:last-child {
    &::before {
      content: '체크아웃';
      display: block;
      padding: 14px 0 2px 14px;
      font-size: 10px;
      font-weight: 900;
    }
  }
  .DateRangePickerInput__withBorder {
    border: none;
  }
  .CalendarMonth_table {
    border-collapse: initial;
  }
  .CalendarDay__default {
    border: none;
  }
  .DateInput_input__focused  {
    border: none;
  }

  .DateRangePickerInput_arrow {
    padding: 10px;
  }
  .CalendarDay__selected {
    border-radius: 50%;
  }
  .CalendarDay__selected:active {
    border-radius: 50%;
  }
  .CalendarDay__selected:hover {
    border-radius: 50%;
    color: #000;
  }

  .CalendarDay__default:hover {
    background: #fff;
    border-radius: 50% !important;
    border: 2px solid #000;
    border-collapse: none;
  }

  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    background: #f7f7f7;
    border: none;
    color: #000;
    border-radius: 50%;
  }
  .CalendarDay__selected_span {
    border-radius: 50%;
    background: #f7f7f7;
    color: #000;
  }

  .CalendarDay {
    vertical-align: middle;
  }
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: #000;
    border: none;
    color: #fff;
    font-weight: 900;
  }
  .DayPickerKeyboardShortcuts_show__bottomRight::before {
    border-top: 26px solid transparent;
    border-right: 33px solid #fff;
  }
`;

const AddPerson = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 62px;
  border-top: 1px solid #dbdbdb;
  padding: 14px;
  cursor: pointer;
  span:first-child {
    display: block;
    font-size: 10px;
    font-weight: 900;
  }
  span:last-child {
    line-height: 18px;
  }
`;
const AddPersonModal = styled.div`
  display: ${(props) => (props.guestModals ? 'inline-block' : 'none')};
  position: absolute;
  width: 197px;
  left: 50%;
  width: 330px;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #fff;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
  border-radius: 4px;
  .picker-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    .count {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 35%;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border: 1px solid #e7e7e7;
        border-radius: 50%;
        font-weight: 900;
        cursor: pointer;
      }
    }
  }
  p {
    font-size: 12px;
    margin: 12px 0;
  }
`;
const CloseModal = styled.div`
  display: block;
  padding-right: 5px;
  cursor: pointer;
  text-align: right;
  font-size: 14px;
`;

const Button = styled.div`
  display: ${(props) => (props.showPriceModals ? 'none' : 'block')};
  width: 100%;
  margin: 20px 0;
  border-radius: 10px;
  background: rgb(255, 55, 92);
  background: linear-gradient(153deg, rgba(255, 55, 92, 1) 0%, rgba(241, 43, 85, 1) 57%, rgba(212, 0, 101, 1) 100%);
  span {
    display: block;
    padding: 20px 0;
    font-weight: 900;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
`;
const ShowPrice = styled.div`
  display: ${(props) => (props.showPriceModals ? 'block' : 'none')};
  p {
    display: block;
    text-align: center;
    margin: 30px 0 25px;
    font-size: 14px;
  }
  .price-box {
    display: flex;
    justify-content: space-between;
    padding: 7px 20px;
    color: #222;
    .underline {
      text-decoration: underline;
    }
    span {
      &:first-child {
      }
      &:last-child {
      }
    }
    :last-child {
      padding-bottom: 0;
    }
  }
  .totalprice {
    font-weight: 900;
    margin-bottom: 30px;
    span {
      font-size: 17px;
    }
  }
`;
const Line = styled.hr`
  border: 0px;
  height: 1px;
  background-color: #ddd;
  margin: 28px 0;
`;

export default withRouter(DatailSticky);
