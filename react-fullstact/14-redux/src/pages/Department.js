import React from 'react';
import Spinner from "../component/Spinner";
import Table from "../component/Table";

//상태값을 로드하기 위한 hook과 dispatch할 kook 참조
import { useSelector,useDispatch } from 'react-redux';

import {getList} from "../slice/DepartmentSlice";
 
const Department = () => {
    React.useEffect(()=>console.clear(),[]);

    const {data,loading,error} = useSelector((state)=> state.department);

    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(getList());
    },[dispatch]);

    return (
        <div>
            <Spinner visible={loading}/>
            {error ? (
                <div>
                    <p>{error.code}</p>
                    <p>{error.message}</p>
                </div>
            ):(
                <Table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>dname</th>
                            <th>loc</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((v,i)=>{
                            return   <tr key={i}>
                                <td>{v.id}</td>        
                                <td>{v.dname}</td>        
                                <td>{v.loc}</td>        
                            </tr>
                        })}
                    </tbody>
                </Table>
            )}
            
        </div>
    );
};

export default Department;