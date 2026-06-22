import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
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

export const useUsers = () => {
    return useQuery ({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await userApi.getUserList()
            return response.data.content
        }
    })
}

export const useAddUser = () => {
    // dùng queryClient để tương tác với cache của tanstask query
    const queryClient = useQueryClient()
    return useMutation ({
        mutationFn: (userData) => userApi.addUser(userData),
        onSuccess: () => {
            // sau khi thêm user thành công , thông báo tanstack query biết là list data trong cache đã cũ và cần gọi lại APi để lấy dữ liệu mới
            queryClient.invalidateQueries({queryKey: ['users']})
        }
    })
}