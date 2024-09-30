import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../context/userContext/userSlice"


const store = configureStore({
    reducer:{
        auth:authReducer
    }
})
export type AppDispatch = typeof store.dispatch;
export default store;