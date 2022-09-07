import { combineReducers } from "@reduxjs/toolkit";

import valueSlice from './transfer-value'
// import profile from "./profile";
// import auth from './auth'
import transfer from "./transfer";

const reducer = combineReducers({
    editInput: valueSlice,
    transfer: transfer
})
export default reducer
