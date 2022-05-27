import React from 'react';
import styled from "styled-components";
import Spinner from "../component/Spinner";
import Table from '../component/Table';
import useAxios from "axios-hooks";

import useMountedRef from '../hooks/useMountedRef';

const ColorText = styled.span`
    &:before{
        color:${({sex})=> sex === "male" ? "#06f" :"#c0c"};
        content:"${({sex})=>sex ==="male"? "남자":"여자"}";
        font-weight: 600;
    }
`

const EmbarkedBox = styled.span`
        &:before{
            color:${({embarked})=>embarked === "C" ?"#f60" :(embarked === "Q"? "00f":"#990")};
            content:"${({embarked})=>embarked === "C"? "세르부르":(embarked === "Q" ?"퀸즈타운":"샤우샘프턴")}";    
            font-weight: 600;
        }
`


const Survived = styled.span`
        &:before{
            background-color:${({survived})=>survived ?"#090":"#e00"};
            color:#fff;
            content:'${({survived})=>survived ?"생존":"#사망"}';
            font-weight: 600;
        }
`

const SelectContainer =styled.div`
    position: sticky;
    top:0;
    background: #fff;
    border-top:1px solid #eee;
    border-bottom:1px solid #eee;
    padding: 10px 0;
    margin:0;
    select{
        margin-right: 15px;
        font-size: 16px;
        padding: 5px 10px;
    }
`
const URL = "http://localhost:3001/titanic";
const Titanic = () => {
    const [{data,loading,error},refetch] =useAxios(URL);

    const [state,setState] = React.useState({
        sex: "",
        embarked :"",
        survived:""
    });

    const mountedRef = useMountedRef();

    const onSelectChange = React.useCallback(e=>{
        e.preventDefault();

        const current = e.target;
        const key = current.name;
        const value = current[current.selectedIndex].value;

        const newState = { ...state,[key]:value};
        setState(newState);

        console.log(newState);
    },[state]);

    

    React.useEffect(()=>{
        if(mountedRef.current){
            const params = {};
            for(const key in state){
                if(state[key]){
                    params[key] = state[key];
                    console.log("바까");

                }
            }
            refetch({
                params:params
            });
        }
    },[mountedRef,refetch,state]);

    if(error){
        console.log(error);
        return(
            <div>
                <h1>oops {error.code} Error.</h1>
                <hr/>
                <p>{error.message}</p>
            </div>
        )
    }
    
    return (
        <div>
            <Spinner visible={loading} />
            <SelectContainer>
                <select name ="sex" onChange={onSelectChange}>
                    <option value ="">--성별 선택--</option>
                    <option value="male">남자</option>       
                    <option value="female">여자</option>
                </select>
                <select name ="embarked" onChange={onSelectChange}>
                    <option value ="">--탑승지 선택--</option>
                    <option value="C">세르부츠</option>       
                    <option value="Q">퀸즈타운</option>
                    <option value="S">사우샘프턴</option>
                </select>
                <select name ="survived" onChange={onSelectChange}>
                    <option value ="">--생존여부 선택--</option>
                    <option value="true">생존</option>       
                    <option value="false">사망</option>
                </select>
            </SelectContainer>
            <Table>
                <thead>
                    <tr>
                        <th>승객번호</th>
                        <th>승객이름</th>
                        <th>성별</th>
                        <th>나이</th>
                        <th>동급자 수</th>
                        <th>객실등급</th>
                        <th>방 호수</th>
                        <th>티켓번호</th>
                        <th>요금</th>
                        <th>탑승자</th>
                        <th>생존여부</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data && data.map (({
                            id,name,survived,pclass,sex,age,sibsp,parch,ticket,fare,cabin,embarked
                        },i)=>{

                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td><ColorText sex={sex}/></td>
                                    <td>{age}</td>
                                    <td>{sibsp + parch}</td>
                                    <td>{pclass}</td>
                                    <td>{cabin}</td>
                                    <td>{ticket}</td>
                                    <td>{fare}</td>
                                    <td><EmbarkedBox embarked={embarked}/></td>
                                    <td><Survived survived={survived}/></td>
                                </tr>
                            );
                            })}
                    </tbody>
               
            </Table>
          
           
        </div>
    );
};

export default React.memo(Titanic);