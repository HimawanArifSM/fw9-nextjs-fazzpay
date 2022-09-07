import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosServer from "../../helper/axiosServer";
import http from '../../helper/http';

export const getTransfer = createAsyncThunk("transfer/getTransfer", async () => {
  const result = {};
  try {
    const { data } = await http().get("/user");
    return data;
  } catch (e) {
    result.message = e.response.data?.message;
    return result;
  }
});

export const topupBalance = createAsyncThunk('transaction/topup', async(request)=>{
  const result={};
  try {
    const dataReq = {amunt: request.amount}
    const send = qs.stringify(dataReq);
    const {data} = await http().post('/transaction/top-up', send);
    return data;
  } catch (error) {
    result.errorMsg = error.response.data.msg;
    return result;
  }
})