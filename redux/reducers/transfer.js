import { createSlice } from "@reduxjs/toolkit";
// import build from "next/dist/build";
import { getTransfer, topupBalance } from "../actions/transfer";

const initialState ={
    results: {},
    successMsg:null,
    errorMsg:null,
    resultsTopup: {},
    isLoading:null,
}

const transfer = createSlice({
    name : 'transfer',
    initialState,
    reducers:{},
    extraReducers:(build)=>{
        build.addCase(getTransfer.fulfilled,(state, action)=>{
            state.results = action.payload
        }),
        build.addCase(topupBalance.pending, (state)=>{
            state.successMsg = null;
            state.errorMsg = null;
            state.isLoading = 'pending';
        }),
        build.addCase(topupBalance.fulfilled, (state, action)=>{
            state.successMsg= action.payload;
            state.errorMsg =action.payload.errorMsg;
            state.isLoading= 'success';
            state.resultsTopup =action.payload.data;
        })
    }
})

export {getTransfer, topupBalance}
export default transfer.reducer

