import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectorGheKhachChon } from '../store/booking/bookingSlice'

const DanhsachGheDaChon = () => {
    const dispatch = useDispatch()

    const gheKhachChon = useSelector(selectorGheKhachChon)

    // tính toán tổng tiền
    const tongTien = gheKhachChon.reduce((sum, ghe) => sum + ghe.gia, 0)

    return (
        <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-black/50 border border-yellow-700 rounded-2xl p-5 sticky top-4">
                {/* Tiêu đề */}
                <h2 className="text-yellow-400 text-lg font-extrabold text-center tracking-widest uppercase mb-5">
                    Danh Sách Ghế Bạn Chọn
                </h2>
                {/* Chú thích màu sắc */}
                <div className="flex flex-col gap-2 mb-5">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-5 rounded bg-orange-500 flex-shrink-0" />
                        <span className="text-yellow-200 text-sm">Ghế đã đặt</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-5 rounded bg-green-400 flex-shrink-0" />
                        <span className="text-yellow-200 text-sm">Ghế đang chọn</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-5 rounded border-2 border-orange-500 flex-shrink-0" />
                        <span className="text-yellow-200 text-sm">Ghế chưa đặt</span>
                    </div>
                </div>
                {/* Bảng ghế đã chọn (mock: A1, A2, A3) */}
                <div className={`border border-yellow-700 rounded-xl ${gheKhachChon.length > 7 ? 'max-h-80' : ''} overflow-y-auto mb-4`}>
                    {/* nếu số lượng ghế đang chọn lớn hơn 10 => thêm class scroll down bên trong table */}
                    {/* thêm overflow-y-auto */}
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-yellow-700 bg-black/30">
                                <th className="text-yellow-400 py-2 px-3 text-left font-bold">Số ghế</th>
                                <th className="text-yellow-400 py-2 px-3 text-left font-bold">Giá (đ)</th>
                                <th className="text-yellow-400 py-2 px-3 text-center font-bold">Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Ghế A1 */}
                            
                            {
                                gheKhachChon.map((ghe) => (
                                    <tr className="border-b border-yellow-900/50">
                                        <td className="text-orange-400 py-2 px-3 font-bold">{ghe.soGhe}</td>
                                        <td className="text-orange-400 py-2 px-3">{ghe.gia.toLocaleString()}</td>
                                        <td className="py-2 px-3 text-center">
                                            <span className="text-red-500 font-bold text-base leading-none cursor-pointer">✕</span>
                                        </td>
                                    </tr>
                                ))
                            }


                            {/* Tổng tiền */}
                            <tr>
                                <td className="text-yellow-300 py-2 px-3 font-bold">Tổng tiền</td>
                                <td className="text-orange-400 py-2 px-3 font-extrabold">{tongTien.toLocaleString()}</td>
                                <td />
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* Nút Đặt Vé */}
                <button className="w-full bg-orange-500 hover:bg-orange-400 text-black font-extrabold
             py-3 rounded-xl tracking-widest uppercase text-sm cursor-pointer
             transition-colors">
                    Đặt Vé
                </button>
            </div>
        </aside>
    )
}

export default DanhsachGheDaChon
