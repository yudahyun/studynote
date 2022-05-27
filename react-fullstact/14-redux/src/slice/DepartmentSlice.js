import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getList = createAsyncThunk("department/getList",async (payload,{rejectWithValue})=>{
    let result = null;
    try{
        result = await axios.get("http://localhost:3001/department");

    }catch(e){
        result = rejectWithValue(e.response);
        console.log("에러임");
        
    }finally{
        console.log(result);
    }
    return result;
});

const departmentSlice = createSlice({
    name : "department",
    initialState:{
        data:null,
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:{
        [getList.pending]:(state,{payload})=>{
            return {...state,lodaing:true}
        },
        [getList.fulfilled]:(state,{payload})=>{
            return {
                data: payload?.data,
                loading:false,
                error:null
            }
        },
        [getList.rejected]:(state,{payload})=>{
            return{
                data:payload?.data,
                loading:false,
                error:{
                    code:payload?.status ? payload.status : 500,
                    message:payload?.statusText ? payload.extraReducers : "Sever Error"
                }
            }
        }
    }
});

export default departmentSlice.reducer;