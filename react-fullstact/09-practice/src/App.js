import React from "react";
import axios from "axios";

function App() {
  //화면에 표시할 상태값을 처음에 빈 배열로 정의
  const [department, setdepartment] = React.useState([]);

  //검색 키워드 가져오기
  const [keyword,setKeyword] = React.useState("");

  //처음 렌더링 될 때 시작됨 
  React.useEffect(()=>{
    /*
    * (asyns ()=>{await axios.get},[바뀔거])
    */
    (async ()=>{
      try{
        const response = await axios.get("http://localhost:3000/department",{
          params:keyword ? {dname:keyword}:null
        });
        //함수형 업데이트
        setdepartment(department => response.data);
        
      }
      catch (e){
        console.log(e);
        console.error("오류임");
      }
    })();
  },[keyword]);
  
  //검색어 입력요소에 연결한 참조 변수
  const keywordInput = React.useRef();
  
  //검색 버튼을 누르면 실행되는 함수 , 성능 최적화를 위해 콜백함수 적용
  const onSearch = React.useCallback((e)=>{
    setKeyword(keywordInput.current.value);
  },[]);



  const addList= React.useCallback((e)=>{
    e.preventDefault();  
    const dname = e.currentTarget.dname.value;
    const loc = e.currentTarget.loc.value;
    console.log(dname,loc);


    (async () => {
      let json = null;
      try{
        const response = await axios.post("http://localhost:3000/department",{
          'dname':dname,
          "loc":loc
        });
          console.log(response);
          json = response.data;
      }
      catch(e){
        console.error(e);
      }
      if(json != null){
        //기존의 상태값과 배열간의 병합을 처리하기 위해 배열로묶음
        const addArr = [json];
        setdepartment(department=>department.concat(addArr));
      }
    })();
  },[]);

  return (
    <>
      <h2>목록조회,수정,삭제,저장</h2>
      <form onSubmit={addList}>
         학과 :<input type="text" name="dname" id="dname"/> <br/>
        위치: <input type="text" name="loc" id="loc" /><br/>
        <p>
          <button type="submit">목록추가</button>
        </p>
      </form>
      <hr/>
      <input name="keyword" ref={keywordInput}></input>
      <button onClick={onSearch}>검색</button>
      <table border="1">
        <thead>
          <tr>
            <th>아이디</th>
            <th>학과이름</th>
            <th>학과위치</th>
            <th>삭제</th>
            <th>수정</th>
          </tr>
        </thead>
        <tbody>
          {
           department.length > 0 ? ( department.map((v,i)=>{
              return(
                <tr key ={v.id}>
                  <td >{v.id}</td>
                  <td >{v.dname}</td>
                  <td >{v.loc}</td>
                  <td ><button type="button">삭제</button></td>
                  <td ><button>수정</button></td>
                </tr>
              )
            })):(
              <tr>
                <td colSpan="3">게시글이 없습니다.</td>
              </tr>
            )
          }
          </tbody>
      </table>
    </>
  );
}

export default App;
