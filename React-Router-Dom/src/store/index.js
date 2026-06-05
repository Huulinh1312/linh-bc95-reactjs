import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
const store = configureStore({
    reducer: {
        // define các reducer của các slice ở đây
        user: userReducer
    }
})

export default store