import React from "react";
import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {addUser,deleteUser,editUser} from "./features/Users";

function App() {

  const dispatch =useDispatch();
  const userList = useSelector((state)=>state.users.value);

  const [name,setName] = useState("");
  const [username,setUserName] = useState("");
  const [newUsername,setNewUserName] = useState("");

  return (
    <div>
      <div className="addUser">
        <input type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
        <input type="text" placeholder="UserName" onChange={(e)=> setUserName(e.target.value)}/>
        <button onClick={()=>{dispatch(addUser({id:userList[userList.length -1].id +1,name,username}))}}>Add User</button>
      </div>
      <div className="displayUsers">
        {userList.map((user,i)=>{
            return <div  key={i} style={{border:"1px solid #ddd"}}>
                    <h1>{user.name}</h1>
                    <h1>{user.username}</h1>
                    <input type="text" placeholder="username"
                    onChange={(e)=>setNewUserName(e.target.value)}/>
                    <button onClick={()=>(dispatch(editUser({id:user.id,username:newUsername})))}>업데이트</button>
                    <button onClick={()=>{dispatch(deleteUser({id:user.id}))}}>삭제</button>
                  </div> 
        })}
      </div>
    </div>
  );
}

export default App;
