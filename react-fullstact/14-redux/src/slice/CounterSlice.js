import {createSlice} from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:"counter",
    initialState:{
        number:0
    },
    reducers:{
        plus:(state,action)=>{
            const numberValue = state.number + action.payload;
            return {number : numberValue}
        
        },
        minus:(state,action)=>{
            const numberValue = state.number - action.payload;
            return {number : numberValue}
        
        }
    },
    extraReducers:{

    }
})


export const {plus,minus} = counterSlice.actions;
export default counterSlice.reducer;