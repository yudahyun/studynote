import React ,{useState} from "react";
import dayjs from "dayjs";

const DateRange1 = () => {
  const day = dayjs();
  const [날짜,날짜바꿈] = useState({
    start: day.format("YYYY-MM-DD"),
    end: day.format("YYYY-MM-DD"),
  });
  
  return (
    <div>
      <h2>날짜 만들기</h2>
      {날짜.start}~{날짜.end}<br/>

      <button type="button"
       onClick={()=>{
         날짜바꿈({
           ...날짜,start:day.add(-7,"d").format("YYYY-MM-DD")
         })
       }}>7일 전</button>
    </div>
  );
};

export default DateRange1;
