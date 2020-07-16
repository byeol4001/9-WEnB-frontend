import React, { useState, useEffect, Component } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchBox.scss';
//import { DateRangePicker, DateRange } from "@matharumanpreet00/react-daterange-picker";
import { AiOutlineSearch } from 'react-icons/ai';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {DateRangePicker} from 'react-dates';
import styled from 'styled-components';
import {MdLocationOn} from 'react-icons/md'
//import Axios from 'axios';

function SearchBox (props) {

let list =  ["제주도","제주도 제주시","제주 서귀포시 성산읍", "제주도 애월읍", "제주 애월읍 곽지과물해변","제주도 서귀포"]
 //어디로여행
 const[whereto, setWhereto] = useState(""); //여기 0으로 두면 위치박스에0이라고 뜸. 빈칸주기

 //체크인, 체크아웃 from react-dates library
 const [startDate, setStartDate] = useState(null);
 const [endDate, setEndDate] = useState(null);
 const [focusedInput, setFocusInput] = useState(null);

 const onDatesChange = ({ startDate, endDate }) => {
  setStartDate(startDate);
  setEndDate(endDate);
};

 //게스트 인원 수 + -
 const [adults, setAdults] = useState(0);

 const onClickMinusHandler = (e) => {
   e.preventDefault();
   setAdults(adults - 1)
   console.log("minus")
 } //form 형태라서 e.prevent.default를 써줘야한다.

 const onClickPlusHandler = (e) => {
   e.preventDefault();
   setAdults(adults + 1)
   console.log("plus")
 }

 //인원박스 오픈
 const [open, setOpen] = useState(false);
 const OpenHandler = (e) => {
   e.preventDefault();
   setOpen (!open);
 };

 //게스트 인원체크
  let guestNum;
  if(adults === 0 ){
    guestNum = "게스트 추가"
  } else {
   guestNum = `게스트 ${adults} 명`;
 }

//  const [filterboxOpen, setFilterboxOpen]
//  const clickInputBox = (e) => {
//   e.preventDefault();
//   setFilterboxOpen (!filterboxOpen);
//  }


//  let checkin, checkout;
//  if (startDate !== null && endDate !==null) {
//    checkin = startDate.format("YYYY-MM-DD");
//    checkout = endDate.format("YYYY-MM-DD");
//  }
//  console.log("체크인날짜는:", checkin);
//  console.log("체크아웃날짜는:", checkout);
//  console.log(whereto, checkin, checkout, adults);

/*
 const goToList = (a,b) => {
   console.log (props)
   
  //  if (whereto !== null && adults !== null) {
     props.history.push ( `/stay?address=${a}&guests=${b}` 
     //`/stay?address=${whereto}&guests=${adults}` //api와 전혀 상관없음.
     // `/list?whereto=${whereto}&checkin=${checkin}&checkout=${checkout}&adults=${adults}`
     );
     //const nextResponse = await fetch(`http://10.58.7.113:8000/stay?address=${whereto}&guests=${adults}`);
     //const nextJson = await nextResponse.json();
  //  } else {
    //  alert ("날짜 / 위치를 입력하세요.")
   }
*/
/*
const [loading, setLoading] = userState(false);
const [search, setSearch] = useState('')

useEffect(() => {
  setLoading(true);
  Axios
  .get("")
  .then(res => {
    setLocation (res.data);
    setLoading (false);
  })
  .catch(err => {
    console.log(err);
  });
}, [] ); 

const filteredLocation = countries.filter(country => {
  return country.name.toLowerCase().includes(search.toLowerCase())
} )
*/

//위치 인풋 연관검색창 체크인박스 클릭하면 자동으로 닫히게 하기
const [popUp, setPopUp] = useState(false); 

//검색 넘겨주기
let history = useHistory();

  return (
    <div className = "search-box">
          <fieldset className ="categories">
            <button type="button" className = "nobutton">
              <span className = "category-box">숙소</span>
            </button>
            <button type="button" className = "nobutton">
              <span className = "category-box">장기숙박</span>
            </button>
            <button type="button" className = "nobutton">
              <span className = "category-box">체험</span>
            </button>
            <button type="button" className = "nobutton">
            <div className="category-box-online"><a href="" className = "go-online">온라인 체험
            <div className="new-shape"><div className="new">NEW</div></div>
            </a>
            </div>
            </button>
          </fieldset>
          <div className="schedule-search">
            <div className="schedule-input-box">
              <div className="place-box">
                <div className = "place">위치</div>
                <input className= "place-input"
                placeholder="어디로 여행가세요?"
                onChange = {(e) => setWhereto(e.target.value)}
                value = {whereto}
                //onClick={()=> setPopUp(false)} //고정값을 false로 
                >
                </input>
              </div>
              { whereto.length  !== 0 && popUp===false ?(
              <div className ="filter-location">
                     <div className="filter-box">
                       <ul>
                         {list.map((name) => {
                           if(whereto.length !==0){
                           if(name.toLowerCase().startsWith(whereto.toLowerCase())){
                             return <div className= "filtered-list"><span><MdLocationOn style={{color:"#212529"}}/><div className="filtered-list-box">{name}</div></span></div>
                           } else {
                             return false;
                           }
                         }
                          return <div className= "filtered-list"><span><MdLocationOn style={{color:"#212529"}}/><div className="filtered-list-box">{name}</div></span></div>
                          })}
                       </ul>
                     </div>
                   </div>  
              ) : false}
            </div>
            <div className= "checkin" onClick={()=> setPopUp(true)}>
            <div className="check-in-and-out">체크인 / 체크아웃</div>
            <DateRangePickerWrap>
            <DateRangePicker
              startDate= {startDate} //{this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={endDate}//{this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => onDatesChange({startDate, endDate})}//=> this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput= {focusedInput} // {this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={(focusedInput) => setFocusInput(focusedInput)} //{focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              showClearDates= {true}
              startDatePlaceholderText={"날짜 추가"}
              endDatePlaceholderText={"날짜 추가"}
              customArrowIcon={` `}
              />
              </DateRangePickerWrap>
              <button className = "checkin-button" ></button>
              <button className = "checkin-button"></button>
            </div>
            <div className= "capacity">
            <div className = "check-capacity">인원</div>
              <button className = "capacity-button" onClick={OpenHandler}>
                <div className="capacity-box">        
                  <div className= "add-guest">{adults > 0 ? `게스트 ${adults} 명` : "게스트 추가"}</div>
                </div>
              </button>

              {open ? (
              <div className = "the-number-add">
                <div className = "the-number-add-each-box">
                  <div>
                    <p>성인</p>
                    <p>만 13세 이상</p>
                  </div> 
                  <div className="adding-box" >
                    <button className="thenumber-btn"
                    style={
                      adults <= 0 ? 
                      {color: "rgb(235, 235, 235)", borderColor: "rgb(235, 235, 235)"} 
                       : undefined
                     }
                      onClick={onClickMinusHandler}        
                    >  
                    -  
                    </button>
                    <div>{adults < 0 ? 0 : adults}</div>
                    <button  className="thenumber-btn"
                     onClick = {onClickPlusHandler} 
                    >
                    +  
                    </button>
                  </div>
                </div> 
                <div className = "the-number-add-each-box">
                  <div>
                    <p>어린이</p>
                    <p>2~12세</p>
                  </div> 
                  <div  className="adding-box" >
                    <button className="thenumber-btn-color-light">-</button>
                    <div>0</div>
                    <button className="thenumber-btn">+</button>
                  </div>
                </div> 
                <div className = "the-number-add-each-box">
                  <div>
                    <p>유아</p>
                    <p>2세 미만</p>
                  </div> 
                  <div  className="adding-box" >
                    <button className="thenumber-btn-color-light">-</button>
                    <div>0</div>
                    <button className="thenumber-btn">+</button>
                  </div>
                </div> 
              </div>
              ) : false}
            </div>
            <div className="gumsaek">
              <button className="gumsaek-btn"
              onClick = {()=> history.push(`/stay?address=${whereto}&guests=${adults}`)}//goToList(whereto, adults)}
              >
                <div className="btnbtn">
                <span className="icon"> <AiOutlineSearch style={{color:"#fff"}}/></span>
                <span className="gumsaek-letter">
                검색</span>
                </div>
              </button>
            </div>
        </div>
    </div>
  );
};
export default SearchBox;


 const DateRangePickerWrap=styled.div`
 .DayPicker__withBorder {
  width: auto !important;
  padding: 20px;
}
.DateInput  {
  width: 146px;
}

.DateRangePickerInput_clearDates_svg {
  fill: #82888a;
  height: 12px;
  width: 15px;
  vertical-align: middle;
  margin-top: -2px;
}
.DateInput_input {
  padding: 16px 11px 16px;
}
.DateRangePickerInput__withBorder {
  border: none;
  margin-top: -8px;
  border: 1px solid #fff;
}
.DateRangePickerInput_clearDates {
  margin-top: -4px;
}
.CalendarMonth_table {
  border-collapse: initial;
}
.CalendarDay__default {
  border: none;
}
.DateInput_input__focused  {
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
 
 `


