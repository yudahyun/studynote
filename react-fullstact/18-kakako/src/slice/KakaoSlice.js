import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = {
    web:"https://dapi.kakao.com/v2/search/web",
    blog:"https://dapi.kakao.com/v2/search/blog",
    cafe:"https://dapi.kakao.com/v2/search/cafe",
    book:"https://dapi.kakao.com/v3/search/book",
    image:"https://dapi.kakao.com/v2/search/image",
};
const KAKAO_REST_KEY = "76d2e46a76f3c4ffdf1b6b518a323d34";



//비동기 처리 함수 구현//
//payload는 이 함수를 호출 할 때 전달되는 파라미터
export const getKakaoSearch = createAsyncThunk("KakaoSlice/getKakaoSearch",async (payload,{rejectWithValue})=>{
    let result = null;
    try{
        result = await axios.get(API_URL[payload.api ? payload.api:"web"],{
          params:{
                query:payload.query,
                sort:payload.sort?payload.sort : null,
                page:payload.page? payload.page : 1,
                size:payload.size ?payload.size :20
          },
          headers:{ Authorization : `KakaoAK ${KAKAO_REST_KEY}`}
        });
    }
    catch(e){
        result = rejectWithValue(e.reponse);
    }
    return result;
})

const  KakaoSlice= createSlice({

    name: "kakao",
    initialState:{
        meta:null,
        documents:null,
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:{
        [getKakaoSearch.pending]:(state,{payload})=>{
            return {...state,loading:true}
        },
        [getKakaoSearch.fulfilled]:(state,{payload})=>{
            return{
                meta:payload?.data.meta,
                documents:payload?.data.documents,
                loading:false,
                error:null
            }
        },
        [getKakaoSearch.rejected]:(state,{payload})=>{
            return{
                meta:null,
                documents:null,
                loading:false,
                error:{
                    code:payload?.status? payload.status : 500,
                    message:payload?.statusText ? payload.extraReducers:"Server Error"
                }
            }
        }
    }
});

export default KakaoSlice.reducer;