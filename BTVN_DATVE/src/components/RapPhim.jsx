import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chonGhe, selectorDanhSachGhe, selectorGheKhachChon } from '../store/booking/bookingSlice'

const RapPhim = () => {

    const dispatch = useDispatch()
    
    const danhSachGhe = useSelector(selectorDanhSachGhe)
    

    const gheKhachChon = useSelector(selectorGheKhachChon)

    // hàm render header ghế
    const renderHeaderGhe = () => {
        // danhSachGhe gồm
        // [
        //     {
        //         hang: "", // header
        //         danhSachGhe: [
        //             { soGhe: 1, daDat: false },
        //             { soGhe: 2, daDat: false },
        //             { soGhe: 3, daDat: false },
        //         ]
        //     }
        // ]
        // kiểm tra hang === "" => render header
        let headers = []
        // duyệt danhSachGhe, nếu gặp hàng có hang === "" => push vào headers
        // for (let i = 0; i < danhSachGhe.length; i++) {
        //     const hang = danhSachGhe[i].hang
        //     const listGhe = danhSachGhe[i].danhSachGhe
        //     if (hang === ""){
        //         for (let j = 0; j < listGhe.length; j++) {
        //             let soGhe = listGhe[j].soGhe
        //             headers.push(
        //                 <div 
        //                     key={soGhe}
        //                     className="w-[38px] h-[30px] flex items-center justify-center text-yellow-400 text-xs font-bold flex-shrink-0">{soGhe}
        //                 </div>
        //             )
        //         }
                
        //     }
        //     return headers
        // }

        // cách 2: dùng filter để lọc ra hàng có hang === "" => map để render header
        const headerData = danhSachGhe.filter(data => data.hang === "")[0]
        if (headerData) {
            return headerData.danhSachGhe.map((ghe, index) => (
                <div 
                    key={index}
                    className="w-[38px] h-[30px] flex items-center justify-center text-yellow-400 text-xs font-bold flex-shrink-0">{ghe.soGhe}
                </div>
            ))
        }
    }

    const handleDatGhe = (ghe) => {
        
        // dispatch action chonGhe, payload: object ghe được click
        if(ghe.daDat) return; // nếu ghế đã đặt, không push thông tin ghế vào store nữa
        dispatch(chonGhe(ghe))
    }

    const renderGhe = () => {
        // duyệt danhSachGhe, nếu gặp hàng có hang !== "" => render ghế

        // kết hợp gheKhachChon để xác định ghế nào đang được chọn => đổi màu ghế đó
        const soGheKhachChon = gheKhachChon.map(ghe => ghe.soGhe) // ["A1", "A2", "A3"]
        
        return danhSachGhe.map((data, index1) => {
            if (data.hang !== "") {
                return (
                    <div
                        key={index1}
                        className="flex justify-center items-center gap-4 mb-4">
                        <div className="w-6 flex-shrink-0 text-yellow-400 text-base font-extrabold text-center">{data.hang}</div>
                        {
                            data.danhSachGhe.map((ghe, index2) => (
                                <div
                                    key={index2}
                                    onClick={() => handleDatGhe(ghe)}
                                    className={`cursor-pointer ghe ${ghe.daDat ? 'ghe-dat' : 'ghe-trong'}  
                                    ${soGheKhachChon.includes(ghe.soGhe) ? 'bg-green-400' : ''}`}>
                                        {ghe.soGhe}
                                </div>
                            ))
                        }
                    </div>
                )
            }
        })
    }
    return (
        <section className="flex-1 flex flex-col items-center">
            {/* Màn hình chiếu */}
            <div className="relative w-4/5 mb-8 flex justify-center">
                <div
                    className="w-full flex items-end justify-center text-white font-bold text-base pb-2"
                    style={{
                        borderBottom: "50px solid rgb(255, 159, 95)", // phần màn hình màu cam
                        borderLeft: "50px solid transparent",         // cạnh trái trong suốt → tạo góc vát
                        borderRight: "50px solid transparent",        // cạnh phải trong suốt → tạo góc vát
                        filter: "drop-shadow(4px 20px 15px rgba(255,255,255,0.4))", // bóng sáng trắng
                    }}
                >
                    {/* Chữ "Màn hình" đặt tuyệt đối ở giữa dưới hình thang */}
                    <span
                        className="absolute text-white font-bold text-sm"
                        style={{ bottom: "-38px" }} // đẩy xuống trong vùng borderBottom
                    >
                        Màn hình
                    </span>
                </div>
            </div>

            {/* Sơ đồ ghế */}
            <div className="rap-wrap w-full">
                <div className="rap-inner flex flex-col gap-1">
                    {/* ── HEADER SỐ CỘT ── */}
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-6 flex-shrink-0" />
                        {renderHeaderGhe()}
                    </div>
                    {/* ── HÀNG A ── A1,A2,A3 đang chọn | A11,A12 đã đặt ── */}
                    {renderGhe()}
                </div>{/* rap-inner */}
            </div>{/* rap-wrap */}
        </section>
    )
}

export default RapPhim
