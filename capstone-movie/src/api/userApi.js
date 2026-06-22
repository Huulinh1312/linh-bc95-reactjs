import axiosInstance from "./axiosInstance"
export const userApi = {
    // lay danh sach nguoi dung
    getUserList: (maNhom = 'GP01') => {
        return axiosInstance.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`)
    },
    // lay thong tin nguoi dung
    getProfile: () => {
        return axiosInstance.post('/QuanLyNguoiDung/ThongTinTaiKhoan')
    }
}