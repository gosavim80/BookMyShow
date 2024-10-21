import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./LoaderSlice";
import userReducer from "./userSlice"

const store = configureStore({
    reducer:{
        loaders:loaderReducer,
        users:userReducer
    }
})

export default store