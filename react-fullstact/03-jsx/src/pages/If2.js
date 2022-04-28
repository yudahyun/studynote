import React from "react";

const If2 = () => {
 

  const isLogin = true;
  return (
    <div>
      <h2>
        If2
      </h2>
      {/* 앤드조건 으로 둘다 거짓인 경우 표시되는 내용 없음 */}
        {isLogin === true && <p>로그인 되셨습니다.</p>}
    </div>
  );
};

export default If2;
