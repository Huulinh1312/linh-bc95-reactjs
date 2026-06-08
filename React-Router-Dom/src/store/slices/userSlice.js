// slice của user
// 1. state: lưu thông tin user (id, name, email, role,...)
// 2. reducers: là nơi nhận action từ các component hoặc page
// => cập nhật lại state của user
// 3. selectors: là nơi định nghĩa các hàm để lấy dữ liệu từ state của user

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user')) || null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // action 1: login
        // param 1: state hiện tại của user
        // param 2 : action được gửi từ component hoặc page
        login: (state, action) => {
            state.currentUser = action.payload
            //lưu thông tin của user vào localStorage
            // move qua usermiddleware.js
            // localStorage.setItem('user', JSON.stringify(action.payload))
        },
        // action 2: logout
        logout: (state, action) => {
            state.currentUser = null
            // xóa thông tin của user khỏi localStorage
            // move qua usermiddleware.js
            // localStorage.removeItem('user')
        }
    }
})

// export các action để component hoặc page có thể dispatch
export const {
    login,
    logout
} = userSlice.actions
// define selector để lấy thông tin của user từ state 
// user: tên slice sẽ được định nghĩa trong configureStore ở store/index.js
export const selectCurrentUser = (state) => state.user.currentUser

// export reducer để configureStore có thể nhận diện được
export default userSlice.reducer