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

            const index = state.gheKhachChon.findIndex(g => g.soGhe === gheDuocChon.soGhe);
            if (index === -1) {
                state.gheKhachChon.push(gheDuocChon);
            } else {
                state.gheKhachChon.splice(index, 1);
            }
        },

        // action huyGhe
        // payload : soGhe của ghế cần hủy
        huyGhe: (state, action) => {
            const soGhe = action.payload;
            state.gheKhachChon = state.gheKhachChon.filter(ghe => ghe.soGhe !== soGhe);
        },

        // action datVe
        // B1: cập nhật danh sách ghế để ghế đã chọn trở thành đã đặt
        // B2: xóa sạch gheKhachChon
        datVe: (state) => {
            const soGheDuocDat = state.gheKhachChon.map(ghe => ghe.soGhe);

            state.danhSachGhe = state.danhSachGhe.map((hang) => {
                if (hang.hang === "") return hang;

                return {
                    ...hang,
                    danhSachGhe: hang.danhSachGhe.map((ghe) => {
                        if (soGheDuocDat.includes(ghe.soGhe)) {
                            return { ...ghe, daDat: true };
                        }
                        return ghe;
                    })
                };
            });

            state.gheKhachChon = [];
        }
    }
})

export const {
    chonGhe,
    huyGhe,
    datVe
} = bookingSlice.actions

// define các selector để lấy dữ liệu từ state
// state: tập hợp tất cả các state trong store
export const selectorDanhSachGhe = (state) => state.booking.danhSachGhe
export const selectorGheKhachChon = (state) => state.booking.gheKhachChon

export default bookingSlice.reducer;