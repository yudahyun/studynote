import React from 'react';
import {Link ,Route,Routes} from "react-router-dom";
import CardNews from "../component/CardNews";
import ListNews from "../component/ListNews";


const News = () => {
    return (
        <div>
            <h2>뉴스입니다</h2>
           
           <nav>~~
            <Link to="card_news">카드형</Link> &nbsp;| &nbsp;
            <Link to ="list_news">리스트형</Link>
           </nav>
            <Routes>
                <Route path="card_news" element={<CardNews/>}/>
                <Route path="list_news" element={<ListNews/>}/>
            </Routes>
        </div>
    );
};

export default News;