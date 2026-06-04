import React from 'react'
import { Navigate } from 'react-router-dom'
// giả lập tình huống : lưu user info vào localStorage sau khi đăng nhập thành công
// có value => hiển thị admin route
// không có value => ẩn admin route , nếu user cố tình truy cập vào admin
// => redirect về trang login
const ProtectedRoute = ({ children , requiredRole }) => {
    // requiredRole là props được truyền vào từ App.jsx (user tự đefine)
    //children là tên tham số bắt buộc , không được đổi tên (chính react dom định nghĩa sẵn )
    
    // lấy thông tin user từ localStorage
    const user = JSON.parse(localStorage.getItem("user"))
    
    // nếu không có user => redirect về trang login
    if (!user) {
        return <Navigate to="/login" />
    }
    // console.log(requiredRole)
    //Kiểm trả role cửa user 
    if (requiredRole && user.role !== requiredRole){
        return <Navigate to="/login" />
    }

    return children;
}

export default ProtectedRoute