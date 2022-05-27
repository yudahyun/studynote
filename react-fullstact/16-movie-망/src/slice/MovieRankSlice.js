import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
const API_KEY  = "64377d18107f4de17e14136be76b61d9";
//비동기 처리 함수 구현//
//payload는 이 함수를 호출 할 때 전달되는 파라미터
export const getMovieRank = createAsyncThunk("MovieRankSlice/getMovieRank",async (payload,{rejectWithValue})=>{
    let result = null;
    try{
        result = await axios.get(API_URL,{
            params:{
                key:API_KEY,
                targetDt:payload.targetDt
            }
        });
        if(result.data.faultInfo !== undefined){
            const err = new Error();
            err.response = {status:500,statusText:result.data.faultInfo.message};
            throw err;         
        }
        console.log(result);
    }
    catch(err){
        result = rejectWithValue(err.response);
    }
    return result;
    
})

const MovieRankSlice = createSlice({

    name: "movieRank",
    initialState:{
        data:null,
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:{
        [getMovieRank.pending]:(state,{payload})=>{
            return {...state,loading:true}
        },
        [getMovieRank.fulfilled]:(state,{payload})=>{
            return{
                data:payload?.data,
                loading:false,
                error:null
            }
        },
        [getMovieRank.rejected]:(state,{payload})=>{
            return{
                data:payload?.data,
                loading:false,
                error:{
                    code:payload?.status? payload.status : 500,
                    message:payload?.statusText ? payload.statusText:"Server Error"
                }
            }
        }
    }
});

export default MovieRankSlice.reducer;