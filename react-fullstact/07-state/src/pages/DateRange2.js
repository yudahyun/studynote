import React from 'react';
import dayjs from "dayjs";

const 날짜바꾸기 = (state,action)=>{
    const day = dayjs();
    let sdate =null;

    switch (action){
        case "DAY7":
            sdate.day.add(-7,'d').format("YYYY-MM-DD");
        default:
            sdate = day.format("YYYY-MM-DD");
            break;
    }
    return {...state, star:sdate};
}

const DateRange2 = () => {
    const dayjs = dayjs();
    const [날짜,날짜바꿈] = React.useReducer(날짜바꾸기,{
        start:day.format("YYYY-MM-DD"),
        end:day.format("YYYY-MM-DD")
    })
    return (
        <div>
            <p>
            {start}~{end} 
            </p>
            <p>
                <button type="button" onClick={
                    (e)=>{
                        날짜바꿈("DAY7")
                    }
                }>7일</button>
            </p>
        </div>
    );
};

export default DateRange2;