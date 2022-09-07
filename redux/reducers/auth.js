import { createSlice } from '@reduxjs/toolkit'
import {createpin, login, register} from '../action/auth'
import Cookies from 'js-cookie'

const initialState = {
  errormsg:'',
  successmsg:'',
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (build) => {
    
    build.addCase(register.pending,(state)=>{
      state.errormsg=null
      state.successmsg=null
    })
    build.addCase(register.fulfilled,(state,action)=>{
      state.errormsg = action.payload?.errormsg
      state.successmsg = action.payload?.successmsg
    })
    
  }
})

export {login}
export const {logout} = auth.actions
export const {costumeEmail,resetEmail,deleteErrorAuth,deleteSuccessAuth} = auth.actions
export default auth.reducer