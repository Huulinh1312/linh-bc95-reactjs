import { useState } from "react"
import BTCar from "./BTCar/BTCar"
import DemoProps from "./DemoProps/DemoProps"
import BTShoes from "./BTShoes/BTShoes"



function App() {
  // Tham số 1: state: nơi chứa giá trị của biến
  // Tham số 2: setstate: hàm để thay đổi giá trị của state => render lại UI

  // giá trị truyền vào khi gọi hook useState đc gọi là initial state: giá trị khởi tạo của state
  // Nếu ko có initial state => state sẽ có giá trị là undefined

  // initial state có thể là bất kỳ kiểu dữ liệu nào: string, number, boolean, array, object, function
  const [number, setNumber] = useState(0)

  const [demo, setDemo] = useState(() => {
    console.log('hàm khởi tạo state demo được gọi')
      // hàm chỉ thực thi 1 lần duy nhất ở lần render đầu tiên của component
      // logic xử lý
      return 10 // giá trị trả về sẽ là giá trị khởi tạo của state demo
  })
  
  // binding data

  // C1: define function riêng để thay đổi state
  const handleIncrease = () => {
    // LƯU Ý: KHÔNG NÊN GÁN TRỰC TIẾP CHO STATE
    // VÌ KHI GÁN TRỰC TIẾP CHO STATE THÌ UI SẼ KHÔNG RENDER LẠI
    // number = number + 1
    // muốn render lại UI thì phải gọi hàm setState để thay đổi giá trị của state
    setNumber(number + 1)

    // cộng lun vào 10
    // setNumber(() => 10)

    // Cộng dồn liên tiếp 
    // setNumber((prev) => prev + 1) // 0 + 1 = 1
    // setNumber((prev) => prev + 1) // 1 + 1 = 2
    // setNumber((prev) => prev + 1) // 2 + 1 = 3
  }

  // batch state update: từ react ver 18



  return (
    <>
      {/* nơi chứa con số: state */}
      <h1 className="text-4xl font-bold mb-10">{number}</h1>

      {/* button + - */}
      <div className="flex gap-3">
        <button 
          className="bg-blue-500 hover:bg-blue-700 rounded px-3 py-2"
          onClick={
            // Lưu ý: CHỈ KHI CLICK VÀO BUTTON THÌ MỚI GỌI HÀM
            // => KHÔNG CÓ DẤU () SAU TÊN HÀM
            // CÁCH 1: define function để thay đổi state
            // handleIncrease
            
            //// CÁCH 2: define function trực tiếp bên trong onClick
            () => setNumber(number + 1)
          }
        >+</button>
        <button 
          className="bg-red-500 hover:bg-red-700 rounded px-3 py-2"
          onClick={
            () => setNumber(number-1)
          }      
        >-</button>
        <button 
          className='bg-green-400 hover:bg-green-700 rounded px-3 py-2 text-white'
          onClick={
            () => setNumber(0)
          }
          >Reset</button>
      </div>

      <BTCar/>

      <DemoProps text="Hello World" number={10} propertyName={'property value'}/>
      {/* <DemoProps color="red"/> */}
      <DemoProps text="abc" />

      <DemoProps text="xyz" />
      <DemoProps
        demoFnc={() => {
          console.log('demoFnc được gọi')
        }}     
      />

      <BTShoes/>
    </>
  )
}

export default App
