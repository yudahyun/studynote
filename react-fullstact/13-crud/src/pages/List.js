import React from 'react';
import useAxios from "axios-hooks";
import styled from "styled-components";
import {Link} from "react-router-dom";

import Spinner from "../component/Spinner";
import Table from "../component/Table";
import dayjs from "dayjs";
const LinkContainer = styled.div`
    position:sticky;
    top:0;
    background-color  : #fff;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
    padding:10px 0;
`;

const TopLink  = styled(Link)`
    margin-right:15px;
    display:inline-block;
    font-size:16px;
    padding:7px 10px 5px 10px;
    border:1px solid #ccc;
    background-color: #fff;
    color:#000;
    text-decoration: none;
    &:hover{
        background-color: #06f2;
    }
`

const List = () => {

      /* 화면에 표시할 성적표 데이터를 저장하기 위한 상태 변수 */ 
      const [professor , setProfessor] = React.useState([]);

      /*백엔드로부터 데이터 불러오기 - 자체캐시기능 방지*/
      const [{data,loading1,error}]= useAxios("http://localhost:3001/professor",{
          useCache:false
      });

      React.useEffect(() =>{
        //ajax의 결과를 화면에 표시하기 위한 상태값에 복사한다.
        setProfessor(data);
    },[data]);


    const [{loading2},sendDelete] = useAxios({
        method :"DELETE"
    },{
        useCache: false,
        manual :true
    });
  // 삭제버튼 클릭 시 호출될 이벤트 핸들러
  const onDeleteClick =(e)=>{
    e.preventDefault();
    //이벤트 발생한 대상 가져옴 (삭제하기 링크)
    const current = e.target;

    //클릭된 링크에 숨겨져 있는 일련번호와 학생이름 가져오기
    const id = parseInt(current.dataset.id);
    const name = current.dataset.name;
    

    if(window.confirm(`정말 ${name}교수의 정보를 삭제하시겠습니까?`)){
        
        //백엔드에 삭제 요청하기 - > 입력,수정,삭제는 async~await 문법으로 처리해야 함
        ( async ()=>{
                let json = null;
                try{
                    const response = await sendDelete({
                        method:"DELETE",
                        url:`http://localhost:3001/professor/${id}`
                    });
                    json = response.data;
                }catch(e){
                    console.error(e);
                    window.alert(`[${e.response.status}]${e.response.statusText}${e.message}}`);
                    
                }
                //삭제 잘될 경우
            if (json != null) {
                setProfessor(professorr => professor.filter((v, i) =>v.id !== id));
            }
        })();
    }

}

return (
    <>
    <Spinner visible={loading1 || loading2}/>

    <LinkContainer>
        <TopLink to="add">
            교수 등록하기
        </TopLink>
    </LinkContainer>

    {
        error ? (
            <div>
                <h1>{error.code} Error.</h1>
                <p>{error.message}</p>
            </div>
        ) : (
            <Table>
                <thead>
                    <tr>
                        <td>No.</td>
                        <td>이름</td>
                        <td>아이디</td>
                        <td>직급</td>
                        <td>급여</td>
                        <td>입사일</td>
                        <td>보직수당</td>
                        <td>소속학과번호</td>
                        <td>수정</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        professor && professor.map(({id,name,userid,position,sal,hiredate,comm,deptno},i)=>{
                            return(
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{userid}</td>
                                    <td>{position}</td>
                                    <td>{sal}만원</td>
                                    <td>{dayjs(hiredate).format('YY/MM/DD')}</td>
                                    <td>{comm && `${comm}만원`}</td>
                                    <td>{deptno}</td>
                                    <td> 
                                        <Link to={`edit/${id}`}>수정하기</Link>
                                    </td>
                                    <td>
                                        <a href="#!" data-id={id} data-name={name} onClick={onDeleteClick}>삭제하기</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        ) 
    }
    
  
    </>
);
};

export default List;