import axiosInstance from "./axiosInstance"

export const userApi = {
    // lay danh sach nguoi dung
    getUserList: (maNhom = 'GP01') => {
        return axiosInstance.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`)
    },
    // lay thong tin nguoi dung
    getProfile: () => {
        return axiosInstance.post('/QuanLyNguoiDung/ThongTinTaiKhoan')
    },
    addUser: (userData) => {
//         {
//   "taiKhoan": "string",
//   "matKhau": "string",
//   "email": "string",
//   "soDt": "string",
//   "maNhom": "string",
//   "maLoaiNguoiDung": "string",
//   "hoTen": "string"
// }
        return axiosInstance.post('/QuanLyNguoiDung/ThemNguoiDung', userData)
    },
    getUserList: (maNhom = 'GP01') => {
        return axiosInstance.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`)
    }
}