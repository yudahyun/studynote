import React, { memo } from 'react';
import {getTraffic} from "../slice/CarSlice";
import Table from "../components/Table";
import Spinner from "../components/Spinner";

import {useSelector,useDispatch} from "react-redux";

const car = memo(() => {
    const {data,loading,error} = useSelector((state)=>state.car);
    
    const [targetDt,settargetDt] = React.useState("");
    const dispatch = useDispatch();
    
    React.useEffect(()=>{
        dispatch(getTraffic(targetDt?{params:{year:targetDt}}: null))
    },[dispatch,targetDt])

    const onSelectChange = React.useCallback((e)=>{
        e.preventDefault();
        settargetDt(parseInt(e.target.value));
        console.log(parseInt(e.target.value))
    },[]);
    return (
        <div>
            <Spinner loading={loading}/>
            <select onChange={onSelectChange}>
                <option>--년도선택</option>
                {[...new Array(2018 - 2005 + 1)].map((v,i) => {
                        return (<option key={i} value={2005 + i}>{2005 + i} 년도
                    </option>);
                })}
            </select>
            {error ? (
                <>
                    <p>에러입니다.</p>
                </>
            ):(
               <Table>
                   <thead>
                       <tr>
                            <th>번호</th>
                            <th>년도</th>
                            <th>월</th>
                            <th>교통사고 건수</th>
                            <th>사망자 수</th>
                            <th>부상자 수</th>
                        </tr>
                   </thead>
                   <tbody>
                       {
                           data&&data.map((v,i)=>{
                               return(
                    
                                   <tr key={i}>
                                       <td>{v.id}</td>
                                       <td>{v.year}</td>
                                       <td>{v.month}</td>
                                       <td>{v.accident.toLocaleString()}건</td>
                                       <td>{v.death.toLocaleString()}명</td>
                                       <td>{v.injury.toLocaleString()}명</td>
                                    
                                   </tr>
                               )
                           })
                       }
                       {/* <tr>
                           <th colSpan="3">
                                합계
                           </th>
                           <th>건</th>
                           <th>명</th>
                           <th>명</th>
                       </tr> */}
                   </tbody>
               </Table>
            )}
        </div>
    );
});

export default car;