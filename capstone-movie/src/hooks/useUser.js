import { useQuery } from "@tanstack/react-query"
import { userApi } from "../api/userApi"

export const useProfile = (isLoggedIn) => {
    // gọi API lấy thông tin người dùng
    return useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const response = await userApi.getProfile()
            return response.data.content
        },
        enabled: isLoggedIn, // chỉ gọi API khi người dùng đã đăng nhập
        refetchOnMount: 'always', // luôn gọi lại khi component mount
    })
}