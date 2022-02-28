import logo from "./logo.svg";
import "./App.css";
import React,{useState}from "react";

function App() {

  
  
  let [글제목,글제목변경] = useState("남자코트 추천","여자 코트 추천");
  let [따봉,따봉변경] =useState(0);
  let posts = "강남 고기 맛집";
  function 함수(){
    return 100
  }
  return (
    <div className="App">
      <div className="black-nav">
        {/* <div className={posts} style={{color : "blue",fontSize : "30px"}}>개발 Blog</div> */}
        <div className={posts}>개발 Blog</div>
      </div>
      <img src={logo} alt="" />
      <h4>{함수()}</h4>
      <div className="list">
         <h3>{글제목[1]}
          <span onClick={()=>{따봉변경(따봉+1)}}>
            
            👍
          </span>
          <span>
            {따봉}
          </span>
         </h3>
         <button onClick={()=>{}}>
           버튼임
         </button>
        <p>
          2월 17일 발행
        </p>
        <hr />
      </div>
    </div>
  );
}

export default App;
