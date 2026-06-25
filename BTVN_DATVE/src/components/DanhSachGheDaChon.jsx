import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectorGheKhachChon, huyGhe, datVe } from '../store/booking/bookingSlice'

const DanhsachGheDaChon = () => {
  const dispatch = useDispatch()
  const gheKhachChon = useSelector(selectorGheKhachChon)
  const tongTien = gheKhachChon.reduce((sum, ghe) => sum + ghe.gia, 0)

  const handleHuyGhe = (soGhe) => {
    dispatch(huyGhe(soGhe))
  }

  const handleDatVe = () => {
    if (gheKhachChon.length === 0) return
    dispatch(datVe())
  }

  return (
    <aside className="summary-card p-6 sticky top-6">
      <div className="summary-header">
        <p className="text-orange-300 uppercase tracking-[0.35em] text-xs font-semibold">Danh sách ghế bạn chọn</p>
        <h2 className="summary-title mt-4">Thanh toán</h2>
        <p className="summary-subtitle mt-3">Xem lại thông tin ghế, sau đó xác nhận đặt vé để hoàn tất đơn hàng.</p>
      </div>
      <div className="summary-body">
        <div className="summary-list">
          <table className="summary-table">
            <thead>
              <tr>
                <th>Số ghế</th>
                <th className="text-right">Giá</th>
                <th className="text-center">Hủy</th>
              </tr>
            </thead>
            <tbody>
              {gheKhachChon.length === 0 ? (
                <tr>
                  <td colSpan="3" className="py-8 text-center text-slate-500">Chưa có ghế nào được chọn.</td>
                </tr>
              ) : (
                gheKhachChon.map((ghe) => (
                  <tr key={ghe.soGhe} className="border-t border-slate-800">
                    <td>{ghe.soGhe}</td>
                    <td className="text-right">{ghe.gia.toLocaleString()}</td>
                    <td className="text-center">
                      <button
                        type="button"
                        onClick={() => handleHuyGhe(ghe.soGhe)}
                        className="text-red-400 hover:text-red-300"
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="summary-total">
          <span className="text-slate-300 uppercase tracking-[0.18em] text-xs">Tổng tiền</span>
          <span className="summary-price">{tongTien.toLocaleString()} đ</span>
        </div>

        <button
          type="button"
          disabled={gheKhachChon.length === 0}
          onClick={handleDatVe}
          className="btn-confirm"
        >
          Xác nhận đặt vé
        </button>
      </div>
    </aside>
  )
}

export default DanhsachGheDaChon
