import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chonGhe, selectorDanhSachGhe, selectorGheKhachChon } from '../store/booking/bookingSlice'

const RapPhim = () => {
  const dispatch = useDispatch()
  const danhSachGhe = useSelector(selectorDanhSachGhe)
  const gheKhachChon = useSelector(selectorGheKhachChon)

  const renderHeaderGhe = () => {
    const headerData = danhSachGhe.find((data) => data.hang === "")
    if (!headerData) return null

    return headerData.danhSachGhe.map((ghe) => (
      <div key={ghe.soGhe} className="seat-number">
        {ghe.soGhe}
      </div>
    ))
  }

  const handleDatGhe = (ghe) => {
    if (ghe.daDat) return
    dispatch(chonGhe(ghe))
  }

  const renderGhe = () => {
    const selectedSeats = gheKhachChon.map((ghe) => ghe.soGhe)

    return danhSachGhe
      .filter((data) => data.hang !== "")
      .map((data) => (
        <div key={data.hang} className="seat-row">
          <div className="seat-label">{data.hang}</div>
          {data.danhSachGhe.map((ghe) => {
            const isSelected = selectedSeats.includes(ghe.soGhe)
            const seatClass = [
              'seat-button',
              ghe.daDat ? 'seat-dat' : 'seat-trong',
              isSelected ? 'seat-chon' : ''
            ].join(' ')

            return (
              <button
                key={ghe.soGhe}
                type="button"
                className={seatClass}
                onClick={() => handleDatGhe(ghe)}
              >
                {ghe.soGhe.replace(/\D+/g, '')}
              </button>
            )
          })}
        </div>
      ))
  }

  return (
    <section className="booking-panel p-6 xl:p-8">
      <div className="screen-shape mb-8">
        <span className="screen-label">Màn hình</span>
      </div>
      <div className="seat-table space-y-3">
        <div className="seat-row">
          <div className="seat-label opacity-0">&nbsp;</div>
          {renderHeaderGhe()}
        </div>
        {renderGhe()}
      </div>
      <div className="mt-8 legend-row">
        <div className="legend-item">
          <span className="legend-square trong" />
          Ghế chưa đặt
        </div>
        <div className="legend-item">
          <span className="legend-square chon" />
          Ghế đang chọn
        </div>
        <div className="legend-item">
          <span className="legend-square dat" />
          Ghế đã đặt
        </div>
      </div>
    </section>
  )
}

export default RapPhim
