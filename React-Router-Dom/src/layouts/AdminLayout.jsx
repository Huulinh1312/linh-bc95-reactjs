import React from 'react'

// Flow:
// nếu chưa có đăng nhập => redirect đến login page
// nếu đã đăng nhập => Kiểm tra role, nếu role là admin => truy cập
// nếu role không phải admin => redirect về trang home hoặc hiển thị thông báo không có quyền truy cập
// react router dom => tạo protected route
const AdminLayout = () => {
  return (
    <div>
        <h1>Admin Layout</h1>
    </div>
  )
}

export default AdminLayout