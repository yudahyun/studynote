import React, { memo } from 'react';
import Table from "../components/Table";
import Spinner from "../components/Spinner";
import {useSelector,useDispatch} from "react-redux";
import {getMovieRank} from "../slice/MovieRankSlice";
import dayjs from "dayjs";
const MovieRank = memo(() => {
    
    const dispatch = useDispatch();
    const {data,loading,error} =useSelector(state=>state.movieRank);
    
    const [targetDt,setTargetDt] = React.useState(dayjs().add(-1,"d").format("YYYY-MM-DD"));
    
    React.useEffect(() =>{
        dispatch(getMovieRank({targetDt:targetDt.replaceAll("-","")}));
    },[dispatch,targetDt])
    const onDataChange = e=>{
        e.preventDefault();
        setTargetDt(e.target.value);
    }
    return (
        <div>
            <input type="date" value={targetDt}  onChange={onDataChange}/>
            <Spinner loading={loading}/>
            {
                error ? (
                    <p>
                        삑 에러 입니당
                    </p>
                ):(
                    <Table>
                    <thead>
                        <tr>
                          <th>순위</th>
                          <th>제목</th>
                          <th>관람객 수</th>
                          <th>매출액</th>
                          <th>누적 관람객 수</th>
                          <th>누적 매출액</th>
                        </tr>
                    </thead>
                    <tbody>
                      {data && data.boxOfficeResult.dailyBoxOfficeList.map((v,i)=>{
                        return(
                          <tr key ={i}>
                            <td>{v.rank}</td>
                            <td>{v.movieNm}</td>
                            <td>{Number(v.audiCnt).toLocaleString()}명</td>
                            <td>{Number(v.salesAmt).toLocaleString()}원</td>
                            <td>{Number(v.audiAcc).toLocaleString()}명</td>
                            <td>{Number(v.salesAcc).toLocaleString()}원</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                )
            }
        </div>
    );
});

export default MovieRank;