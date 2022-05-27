import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

//비동기 처리 함수 구현//
//payload는 이 함수를 호출 할 때 전달되는 파라미터
export const getTraffic = createAsyncThunk("CarSlice/getTraffic",async (payload,{rejectWithValue})=>{
    let result = null;
    try{
        result = await axios.get("http://localhost:3001/traffic_acc",payload);
    }
    catch(e){
        result = rejectWithValue(e.reponse);
    }
    return result;
})

const  CarSlice= createSlice({

    name: "car",
    initialState:{
        data:null,
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:{
        [getTraffic.pending]:(state,{payload})=>{
            return {...state,loading:true}
        },
        [getTraffic.fulfilled]:(state,{payload})=>{
            return{
                data:payload?.data,
                loading:false,
                error:null
            }
        },
        [getTraffic.rejected]:(state,{payload})=>{
            return{
                data:payload?.data,
                loading:false,
                error:{
                    code:payload?.status? payload.status : 500,
                    message:payload?.statusText ? payload.extraReducers:"Server Error"
                }
            }
        }
    }
});

export default CarSlice.reducer;