import React from 'react';
import Spinner from "../component/Spinner";
import styled from "styled-components";
import NewsItem from "../component/NewsItem";

import {useSelector, useDispatch} from "react-redux";
import {getList} from "../slice/NewsSlice";

const ListContainer = styled.ul`

  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const News = () => {

    const {data,loading,error} = useSelector((state=>state.news));

    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(getList());
    },[dispatch]);

    return (
        <div>
            <Spinner visible={loading}/>
            {error ?(
                <div>
                    <p>{error.code}</p>
                    <p>{error.message}</p>
                </div>
            ):(
                  <ListContainer>
                    {data && data.map((v, i) => <NewsItem key={i} item ={v}/>)}
                 </ListContainer>
            )}
            
        </div>
    );
};

export default News;