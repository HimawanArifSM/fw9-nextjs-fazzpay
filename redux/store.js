import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import thunk from "redux-thunk";

import reducer from "./reducers";

const store = configureStore({
    reducer,
    middleware: [ thunk, logger]
})

export default store