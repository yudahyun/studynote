import React from "react";

import { Link , Routes , Route } from "react-router-dom";

import MainSub1 from "./MainSub1";
import MainSub2 from "./MainSub2";

const Main = ()=>{
    return(
        <div>
            <h2>여기는 Main.js 파일입니다.</h2>
            <p>
                SubRoute의 경로 구성은 상대경로로만 .. 
            </p>

            <nav>
                <Link to="sub1">[MainSub1]</Link>
                <Link to="sub2">[MainSub2]</Link>
            </nav>

            <Routes>
                <Route path="sub1" element={<MainSub1/>}></Route>
                <Route path="sub2" element={<MainSub2/>}></Route>
            </Routes>
        </div>
    );
};

export default Main;