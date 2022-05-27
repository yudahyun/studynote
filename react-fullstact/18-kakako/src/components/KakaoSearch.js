import React, { memo } from 'react';
import { useQueryString } from "../hooks/useQueryString";
import { useParams} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import Spinner from "../components/Spinner";
import { getKakaoSearch } from '../slice/KakaoSlice';

const KakaoSearch = memo(() => {
    const dispatch = useDispatch();
    const {api} = useParams();

    const {query} = useQueryString();

    const {meta,documents,loading,error} = useSelector((state)=>state.kakao);

    React.useEffect(()=>{
        dispatch(getKakaoSearch({
            api:api,
            query:query,
            page:1,
            size:20
        }))
    },[dispatch,api,query])

    return (
        <div>
            <Spinner loading={loading}/>
            {
                error  ?(
                    <>에러 페이지임</>
                ):(
                    <>
                        {JSON.stringify(meta)}
                        {JSON.stringify(documents)}
                    </>
                )
            }
        </div>
    );
});

export default KakaoSearch;