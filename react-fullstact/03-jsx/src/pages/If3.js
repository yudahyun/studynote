import React from "react";

const If3 = () => {
  const articleList = undefined;

  return (
    <div>
      <h2>
        If3
      </h2>
        {/* or 조건식으로 조건이 참인경우 표시되는 내용 없음 */}
        {articleList||<p>조회된 게시글이 없습니다.</p>}
     
    </div>
  );
};

export default If3;
