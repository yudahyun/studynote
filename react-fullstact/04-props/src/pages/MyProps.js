import React from "react";
import MyPropsSub from "../component/MyPropsSub";
import Meta from "../component/Meta";

const MyProps = () => {
 return(
     <div>
          <Meta
        title="MyProps.js"
        description="여기는 MyProps.js 파일입니다."
        url={window.location.href}
      ></Meta>

<h2>MyChildren</h2>
      <MyPropsSub name="민호" age={20}><b>hello world</b></MyPropsSub>;
      <MyPropsSub name="민호" age={20}><b>안녕 리액트</b></MyPropsSub>;
      <MyPropsSub name="민호" age={20}></MyPropsSub>;


     </div>
 )
    
};

export default MyProps;