import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import loggerMiddleware from "./middleware/loggerMiddleware";
import userMiddleware from "./middleware/userMiddleware";
const store = configureStore({
    reducer: {
        // define các reducer của các slice ở đây
        user: userReducer
    },
    middleware: ( getDefaultMiddleware) => getDefaultMiddleware().concat(
        // thêm các middleware tùy chỉnh vào đây
        loggerMiddleware,
        userMiddleware
    ) 
})

export default store