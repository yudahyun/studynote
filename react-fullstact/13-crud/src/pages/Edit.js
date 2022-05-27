import React from 'react';
import useAxios from "axios-hooks";
import styled from "styled-components";
import { useNavigate,useParams } from 'react-router-dom';
import dayjs from "dayjs";

import Spinner from "../component/Spinner";
import Table from "../component/Table";

import regexHelper from "../libs/RegexHelper";



const TableEx =styled(Table)`
    margin-top: 50px;
    margin-bottom: 15px;
    .inputWrapper{
        padding:0;
        position: relative;
        text-align: left;
        .field{
            box-sizing:border-box;
            display:block;
            position:absolute;
            top: 0;
            left:0;
            width:100%;
            height:100%;
            border:0;
            padding:0 10px;
            outline:none;
            font-size:14px;  
        }
        label{
            margin-left:7px;
            margin-right:10px;
            input{
                margin-right: 10px;
            }
        }
    }
`;


const Edit = () => {

     /* 저장 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성*/
     const {id} = useParams();

    const navigate = useNavigate();


    const [{data:department,loading: loading1,error:error1}]=useAxios("http://localhost:3001/department");

    const [{data:professor,loading:loading2 , error:error2},refetch]=useAxios(`http://localhost:3001/professor/${id}`);

    const onSubmit = React.useCallback((e)=>{
        e.preventDefault();

        const current =e.target;
        
        try{
            regexHelper.value(current.name,"이름을 입력하세요");
            regexHelper.kor(current.name,"이름을 한글로 입력하세요");
            regexHelper.minLength(current.name,2,"이름은 최소 2글자 이상 입력해주세요.");

            regexHelper.value(current.userid,"아이디을 입력하세요");
            regexHelper.minLength(current.userid,2,"아이디은 최소 2글자 이상 입력해주세요.");
            regexHelper.maxLength(current.userid,20,"아이디은 최소 20글자 미만 입력해주세요.");

            regexHelper.check(current.position,"직급을 선택하세요");

            regexHelper.value(current.sal,"급여를 입력해주세요.");
            regexHelper.num(current.sal,"급여는 숫자만 가능합니다.");
            
            regexHelper.value(current.hiredate,"입사일을 입력하세요.");

            regexHelper.value(current.comm,"보직수당을 입력하세요.");
            regexHelper.num(current.comm,"보직 수당은 숫자만 입력가능합니다.");

            regexHelper.num(current.deptno,"소속학과를 선택합니다.");            

        }catch(e){
            window.alert(e.message);
            e.field.focus();
            return;
        }

        let json = null;

        (async ()=>{
            try{
                const response = await refetch({
                    method:"PUT",
                    data:{
                        name:current.name.value,
                        userid:current.userid.value,
                        position:current.position.value,
                        sal:parseInt(current.sal.value),
                        hiredate:dayjs(current.hiredate.value).toISOString(),
                        comm: parseInt(current.comm.value),
                        deptno: parseInt(current.deptno.value)
                    }
                });
                json = response.data;
            }catch(e){
                console.error(e);
                window.alert(e);
            }
            if(json !== null){
                window.alert("수정되었습니다.");
                navigate("/");
            }
        })();
    },[refetch, navigate]);

    return (
        <>
                <Spinner visible={loading1 || loading2} />
        {(error1 || error2) ? (
            <div>
                <h1>Oops~!!! {(error1 || error2).code} Error.</h1>
                <hr />
                <p>{(error1 || error2).message}</p>
            </div>
            ) : (
                professor && ( <form onSubmit={onSubmit}>
                 <TableEx>
                     <colgroup>
                        <col width="120"/>
                        <col/>
                     </colgroup>
                     <tbody>
                        <tr>
                            <th>이름</th>
                            <td className="inputWrapper">
                                <input type="text" className="field" defaultValue={professor.name} name="name"/>
                            </td>
                        </tr>
                        <tr>
                            <th>아이디</th>
                            <td className="inputWrapper">
                                <input type="text" className="field" defaultValue={professor.userid} name="userid"/>
                            </td>
                        </tr>
                        <tr>
                            <th>직급</th>
                            <td className="inputWrapper">
                                <lable><input type="radio"  defaultChecked={professor.position ==="교수"} name="position" value="교수"/>교수</lable>
                                <lable><input type="radio"  defaultChecked={professor.position ==="부교수"} name="position" value="부교수"/>부교수</lable>
                                <lable><input type="radio"  defaultChecked={professor.position ==="조교수"} name="position" value="조교수"/>조교수</lable>
                                <lable><input type="radio"  defaultChecked={professor.position ==="전임강사"} name="position" value="전임강사"/>전임강사</lable>
                            </td>
                        </tr>
                        <tr>
                            <th>급여(만원)</th>
                            <td className="inputWrapper">
                                <input type="number" className="field" name="sal" defaultValue={professor.sal} placeholder="숫자로 입력하세요"/>
                            </td>
                        </tr>
                        <tr>
                            <th>입사일</th>
                            <td className="inputWrapper">
                                <input type="text" className="field" defaultValue={professor.hiredate} name="hiredate"/>
                            </td>
                        </tr>
                        <tr>
                            <th>보직수당</th>
                            <td className="inputWrapper">
                                <input type="text" className="field" defaultValue={professor.comm} name="comm"/>
                            </td>
                        </tr>
                        <tr>
                            <th>소속학과</th>
                            <td className="inputWrapper">
                              <select name="deptno" defaultValue={professor.deptno}>
                                  <option value="">선택하세요</option>
                                  {department && department.map ((v,i)=><option key={i} value={v.id}>{v.dname}</option>)}
                              </select>
                            </td>
                        </tr>

                     </tbody>
                 </TableEx>
                 <div style={{ textAlign: 'center' }}>
                    <button type='submit'>저장하기</button>
                </div>
                
             </form>
             )
        )}
    </>
    );
};

export default Edit;