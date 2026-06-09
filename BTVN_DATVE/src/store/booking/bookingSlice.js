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
        // payload : mảng các ghế đã chọn
    }
})
export const {
    chonGhe
} = bookingSlice.actions

// define cacs selector để lấy dữ liệu từ state
//lưu ý:
// state: tập hợp tất cả các state trong store
export const selectorDanhSachGhe = (state) => state.booking.danhSachGhe

export default bookingSlice.reducer;