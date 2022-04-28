import React from "react";
import MyChildrenSub from "../component/MyChildrenSub";
import Meta from "../component/Meta";

const MyChildren = () => {
  return (
    <div>
      <Meta
        title="MyChildren.js"
        description="여기는 MyChilren.js 파일입니다."
        url={window.location.href}
      ></Meta>
      <h2>MyChildren</h2>
      <MyChildrenSub width={400} height={100}><b>hello world</b></MyChildrenSub>;
      <MyChildrenSub width={400} height={100}><b>안녕 리액트</b></MyChildrenSub>;
      <MyChildrenSub width={400} height={100}></MyChildrenSub>;
    </div>
  );
};

export default MyChildren;
