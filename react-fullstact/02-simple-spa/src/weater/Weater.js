import React from "react";
import {useLocation} from 'react-router-dom';


const Weater = ()=>{

    const location = useLocation();
    const {search} = location;
    const query = new URLSearchParams(search);

    console.debug(location);
    console.debug(query);

    const day = (query.get("id"));

    console.log(day);


    const weather = {
        "mon" : ["맑음","맑음"],
        "tue" : ["비","맑음"],
        "wed" : ["맑음","흐림"],
        "thu" : ["맑음","흐림"],
        "fri" : ["흐림","흐림"],
        "sat" : ["비","맑음"],
        "sun" : ["맑음","맑음"],
    };
    
    // const id = parseInt(query.get("id"));

    // console.clear();
    
    // let weatherItemAm = null;
    // let weatherItemPm = null;

//    for(const day in weather){
//     //    console.log(key);
//        for(const i of weather[day]){
//         //   console.log(i);
//           console.log(i);
//            weatherItemAm = i;
//         //    weatherItem2 = i[1];
           
//         //  console.log(weatherItem1);
//         }
//    }


    return (
        
        <div>
         
            <h2>오전</h2>
            <h4>
              {/* {weatherItemAm} */}
            </h4>
            <h2>오후</h2>
            <h4>
            {/* {weatherItemPm} */}
            </h4>
        </div>
    )
        

};

export default Weater;