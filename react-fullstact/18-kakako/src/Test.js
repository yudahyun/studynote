import React, { memo } from 'react';

import {useSelector,useDispatch} from "react-redux";
import { getKakaoSearch } from './slice/KakaoSlice';

const Test = memo(() => {
    const dispatch = useDispatch();
    const {meta,loading,documents,error} = useSelector((state)=>state.kakao);
    
    React.useEffect(() => {
        dispatch(getKakaoSearch({
            api:"blog",
            query:"프론트엔드",
            page:1,
            size:20
        }))
    },[dispatch])
    return (
        <div>
            {
                loading ? "...loading..." :(
                    error ? JSON.stringify(error) :(
                    <>
                    <h1>meta</h1>
                    {JSON.stringify(meta)}
                    <h1>documents</h1>
                    {JSON.stringify(documents)}
                    </>
                )

                )
            }
        </div>
    );
});

export default Test;