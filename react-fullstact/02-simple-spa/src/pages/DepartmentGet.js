import React from "react";

import {useLocation} from 'react-router-dom';

const DepartmentGet = ()=>{

    console.clear();

    //요청 데이터 확인하기
    const location = useLocation();
    console.group("uselocation()의 리턴값 확인");
    console.debug(location);
    console.groupEnd();

    //쿼리스트링을 객체 형태로 변환
    const {search} = location;
    const query = new URLSearchParams(search);
    console.group("쿼리스트링 확인");
    console.debug(query);
    console.groupEnd();

    //추출된 변수 값과 데이터 타입 확인 
    console.group("파라미터 처리 결과 확인");
    console.debug("요청된 학과번호 값 (%s)",query.get("id"),typeof query.get("id"));
    console.debug("요청된 메세지 내용 (%s)",query.get("msg"),typeof query.get("msg"));
    console.groupEnd();


    //한페이지에서 표현할 데이터 준비
    //이걸 백엔드로 원래 불러와야함 
    const departmentList ={
        item :[
            {id: 101,dname:"컴퓨터공학과",loc :"1호관"},
            {id: 102,dname:"멀티미디어학과",loc :"2호관"}
        ]
    }

    //전달될 파라미터 정수로 변환
    const id = parseInt(query.get("id"));

    //조회 결과가 저장될 객체
    let departmentItem = null;

    //미리준비한 JSON 에서 depno 값이 일치하는 정보를 조회
    departmentList.item.some((item ,index)=>{
        if(item.id === id){
            departmentItem = item;
            return true;
        }
        return false;
    });
    //조회결과가 없는 경우
    if(!departmentItem){
        return (<h2>존재하지 않는 데이터에 대한 요청입니다.</h2>);
    }

    //정상 화면 출력 
    return (
        <div>
            <h2>
                {departmentItem.dname}
            </h2>
            <ul>
                <li>
                    학과번호 : {departmentItem.id}
                </li>
                <li>
                    학과위치 : {departmentItem.loc}
                </li>
            </ul>
        </div>
    )
};

export default DepartmentGet;