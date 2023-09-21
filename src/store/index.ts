import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import {rootReducer} from "./module";
export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})