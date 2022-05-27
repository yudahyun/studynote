import React,{useState} from "react";
import styled from "styled-components";
// import {Reset} from "styled-reset";
import GradeTable from "./GradeTable";
import Weeks from "./Week";
import {Link,Routes,Route} from "react-router-dom";

const weather = { 
  "mon": ["맑음", "맑음"], 
  "tue": ["비", "맑음"], 
  "wed": ["맑음", "흐림"], 
  "thu": ["맑음", "흐림"], 
  "fri": ["흐림", "흐림"], 
  "sat": ["비", "맑음"], 
  "sun": ["맑음", "맑음"] 
 };  

const Title = styled.h3`
  padding: 10px;
    background: #000;
    color: #fff;
    font-weight: bold;
    text-align:center;
`;

const List= styled.p`

    font-size: 20px;
    line-height: 1.5;
    padding: 20px;
    border-bottom: 1px solid #ccc;
   
`;

const ButtonSt = styled.button`
      background-color: #000;
      border-radius: 5px;
      border:0;
      padding: 3px;
      color: #fff;
    
`;
function App() {

  const [맛집 , 맛집변경] = useState (["강남맛집","서초맛집","홍대맛집"]);
  const [따봉,따봉변경] = useState(0);

  function 학원바꾸기 (){

    var 학원 = [...맛집];
    학원 = ["인천학원","부평학원","수원학원"];
    맛집변경(학원);
    
  }
  function 따봉업(){
      따봉변경(따봉+1);
  }

  // console.log({weather});
  const key = Object.keys(weather);
  // console.log(key);

  return (
    <div>
      {/* <Reset/> */}
      <Title>쾈, 씨붏알</Title>
      
        {맛집.map((v,i)=><List key={i}> {v} </List>)}
        
        <ButtonSt onClick={따봉업}>👍</ButtonSt> &nbsp; {따봉}  
        <br/>
        <hr/>
        <ButtonSt onClick={학원바꾸기}>학원</ButtonSt>

        <hr/>
        <nav>
          {
            key.map((v,i)=>{
                 return <Link to={v}>{v} &nbsp;|&nbsp;</Link>
            })
          }
      
        </nav>
        <br/>
        <Routes>
          <Route path="/:weeks" element={<Weeks/>}/>
        </Routes>
        <hr/>

        <h1 >성적표</h1>

        {/* <Link to="/1">1학년</Link> &nbsp; | &nbsp;
        <Link to="/2">2학년</Link>&nbsp; | &nbsp;
        <Link to="/3">3학년</Link>&nbsp; | &nbsp;
        <Link to="/4">4학년</Link>
        <Routes>
          <Route path="/:level" element={<GradeTable/>}></Route>
        </Routes> */}
        <table>
          <GradeTable/>
        </table>
    </div>
  );
}

export default App;
