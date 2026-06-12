import { createSlice } from "@reduxjs/toolkit";
import danhSachGhe from "../../data/danhSachGhe";

const initialState = {
    danhSachGhe: danhSachGhe,

    gheKhachChon: []
}

// tạo slice booking
const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        // action chonGhe
        // payload: object ghế được click { soGhe, gia,... }
        chonGhe: (state, action) => {
            console.log("action chon ghe: ", action)
            const gheDuocChon = action.payload;

            // kiem tra gheDuocChon da co trong gheKhachChon chua
            const index = state.gheKhachChon.findIndex(g => g.soGhe === gheDuocChon.soGhe);

            // nếu chưa có → thêm vào
            if (index === -1) {
                state.gheKhachChon.push(gheDuocChon);
            }

            // nếu đã có → xóa khỏi
            else {
                state.gheKhachChon.splice(index, 1);
            }
        }

        // action huyGhe
        // payload : soGhe của ghế cần hủy

        // action datVe
        // B1: cập nhật danh sách ghế (filter ra những ghế đã được đặt => cập nhật lại danhSachGhe)
        // B2: xóa sạch gheKhachChon (reset về mảng rỗng)
        // payload : mảng các ghế đã chọn
    }
})

export const {
    chonGhe
} = bookingSlice.actions

// define các selector để lấy dữ liệu từ state
// state: tập hợp tất cả các state trong store
export const selectorDanhSachGhe = (state) => state.booking.danhSachGhe
export const selectorGheKhachChon = (state) => state.booking.gheKhachChon

export default bookingSlice.reducer;