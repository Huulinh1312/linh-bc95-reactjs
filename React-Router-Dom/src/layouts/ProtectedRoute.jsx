import React from 'react'
// giả lập tình huống : lưu user info vào localStorage sau khi đăng nhập thành công
// có value => hiển thị admin route
// không có value => ẩn admin route , nếu user cố tình truy cập vào admin
// => redirect về trang login
const ProtectedRoute = ({ children }) => {
    //children là tên tham số bắt buộc , không được đổi tên
    
    // lấy thông tin user từ localStorage
    const user = JSON.parse(localStorage.getItem("user"))

    // nếu không có user => redirect về trang login
    if (!user) {
        return <Navigate to="/login" />
    }

    return children;
}

export default ProtectedRoute