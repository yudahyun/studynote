import React from "react";
import "./assets/css/style.css";

function App() {
  return (
    <div class="con">
        <h1>
            <span>
                NAVER
            </span>
            <img src="https://ssl.pstatic.net/static/nid/join/m_logo_naver.png" alt="이미지"/>
        </h1>
            <form action="" id="myform">
            <div class="row">
                <label class="title" for="user_id">아이디</label>
                <span class="id-email">
                    <input type="text" id="user_id" maxlength="20"/><span>@naver.com</span>
                </span>              
                <label class="title" for="user_psw">비밀번호</label>
                <input type="password" id="user_psw" maxlength="16"/>
                <label class="title" for="user_psw-re">비밀번호 재확인</label>
                <input type="password" id="user_psw_re" maxlength="16"/> 
            </div>
            <div class="row">
                <label class="title" for="user_name" maxlength="40">이름</label>
                <input type="text" id="user_name"/>
                <label class="title" for="user_year">생년월일</label>
                <div class="b-day-field">
                    <input type="text" placeholder="년(4자)" id="user_year" maxlength="4"/>
                    <select name="user_month" id="user_month">
                        <option value="0"   name="user_month" selected> 월</option>
                        <option value="1"  name="user_month"> 1</option>
                        <option value="2"  name="user_month"> 2</option>
                        <option value="3"  name="user_month"> 3</option>
                        <option value="4"  name="user_month"> 4</option>
                        <option value="5"  name="user_month"> 5</option>
                        <option value="6"  name="user_month"> 6</option>
                        <option value="7"  name="user_month"> 7</option>
                        <option value="8"  name="user_month"> 8</option>
                        <option value="9"  name="user_month"> 9</option>
                        <option value="10" name="user_month">10</option>
                        <option value="11" name="user_month">11</option>
                        <option value="12" name="user_month">12</option>
                    </select>
                    <input type="text" placeholder="일" id="user_day" maxlength="2"/>
                </div>
                <label class="title" for="user_gender">성별</label>
                <select name="" id="user_gender">
                    <option value="">성별</option>
                    <option value="M">남성</option>
                    <option value="F">여성</option>
                    <option value="U">선택안함</option>
                </select>
            </div>
            <div class="row">
                <label class="title" for="user_mail">본인 확인 이메일<span>(선택)</span></label>
                <input type="text" placeholder="선택입력" id="user_mail"/>
                <label class="title" for="user_num">휴대전화</label>
                <select name="user_num" id="user_country">
                    <option value="82" name="user_country" selected>대한민국 +82</option>
                    <option value="81"  name="user_country">일본 +81</option>
                    <option value="86"  name="user_country">중국 +86</option>
                </select>
                <div class="num-field">
                    <input type="text" id="user_num" placeholder="전화번호 입력"/>
                    <input type="submit" id="autoNumBtn" class="btn-style" value="인증번호 받기"/>
                </div>
                <input type="text" id="autoNum" placeholder="인증번호 입력하세요"/>
            </div>

            <button type="submit"  class="btn-style" id="btn1">
                가입하기
            </button>
          </form>
    </div>
  );
}

export default App;
