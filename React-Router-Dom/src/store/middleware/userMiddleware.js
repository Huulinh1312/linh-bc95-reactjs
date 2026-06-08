const userMiddleware = (store) => (next) => (action) =>{
    //B1: Kiểm tra action là dispatch 
    //middleware chỉ nhận action user/logion và user/logout
    switch (action.type) {
        case 'user/login':
        // lưu thông tin user vào localstore
            localStorage.setItem('user', JSON.stringify(action.payload))
            break
        case 'user/logout':
            localStorage.removeItem('user')
            break
        default:
            // các action khác không làm gì cả
            break
    }   
    //B2: gửi action đến middleware tiếp theo hoặc reducer
    next(action)
}
export default userMiddleware;