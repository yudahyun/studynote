import React from "react";
import MyPropTypesSub from "../component/MyPropTypesSub";
import Meta from "../component/Meta";

const MyProps = () => {
 return(
     <div>
          <Meta
        title="MyPropsTypes.js"
        description="여기는 MyPropsTypes.js 파일입니다."
        url={window.location.href}
      ></Meta>

<h2>MyChildren</h2>
      <MyPropTypesSub name="민호" age={20} hobby="사진찍기"></MyPropTypesSub>;
      <MyPropTypesSub name="민호" age={20}  hobby="영화보기"><b>안녕 리액트</b></MyPropTypesSub>;
      <MyPropTypesSub name="민호" age={20}></MyPropTypesSub>;


     </div>
 )
    
};

export default MyProps;