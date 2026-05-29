import React, { useEffect } from 'react'

const SearchBar = ({ onSearch}) => {
    //state change keyword : lưu giá trị input 
    const [inputValue, setInputValue] = React.useState("");
    //Kiếm tra xem có đnag gõ hay không 
    //nếu mà dùng gõ khoẳng 2s => filter data
    //Nếu thay đổi => setup lại 2s
    useEffect(() => {
      //Mỗi lần inputValue thay đổi => setup lại timeout mới
      const timeoutId = setTimeout(() => {
        // gửi event fillter data lên component cha (App) để filter data
        // onsearch là event (function) component con gửi lên component cha
        onSearch(inputValue.trim())
      }, 2000);

      // nếu user gõ tiếp trước khi timeout kết thúc => clear timeout trước cũ đi
      // return () => ... có nghĩa là hàm này sẽ gọi khi useEffect 
      return ()=> clearTimeout(timeoutId);
    }, [inputValue])

    
    const handleChange = (event) => {
      const value = event.target.value;
      setInputValue(value);

      // Xóa timeout trước đó (nếu có)
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Thiết lập timeout mới
      timeoutId = setTimeout(() => {
        // gửi event fillter data lên component cha (App) để filter data
        // onsearch là event (function) component con gửi lên component cha
        onSearch(value.trim())
      }, 2000);
    };

  return (
<div className="mb-6">
      <div className="relative">
        {/* Icon kính lúp */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <i className="fa-solid fa-magnifying-glass" />
        </div>

        {/* Input — onChange gọi handleChange mỗi khi user gõ */}
        <input
          type="text"
            value={inputValue}
            onChange={handleChange}
          placeholder="Tìm kiếm sản phẩm..."
          className="w-full pl-12 pr-12 py-3 rounded-2xl border-2 border-gray-200 bg-white
            text-gray-800 placeholder-gray-400 text-sm
            focus:outline-none focus:border-blue-400 transition-colors"
        />

        {/* Bên phải: spinner khi đang chờ, nút X khi có text */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          
        </div>
      </div>

      {/* Dòng trạng thái */}
      <div className="mt-2 h-4 px-1">
          <p className="text-xs text-blue-400">Đang tìm kiếm sau 2 giây...</p>
      </div>
    </div>
  )
}

export default SearchBar