import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from 'qs'
import http from '../../helper/axios'

export const register = createAsyncThunk("auth/register", async (request) => {
    const result = {}
    try {
      const send = qs.stringify(request);
      const { data } = await http().post("/auth/register", send, {
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        }
      });
      result.successMsg = data.message
      return result
    } catch (e) {
      result.errorMsg = e.response.data.message
      return result
    }
  })

  