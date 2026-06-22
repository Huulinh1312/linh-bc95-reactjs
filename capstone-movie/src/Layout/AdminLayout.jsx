import React from 'react'

const AdminLayout = () => {
    return (
        <div className="min-h-screen bg-gray-950 flex">
            <aside className="w-64 flex-shrink-0 bg-gray-900 border-r border-gray-800 flex flex-col">
                <div className="px-6 py-5 border-b border-gray-800">
                    <span className="text-xl font-bold text-yellow-400">🎬 MovieApp</span>
                    <p className="text-gray-500 text-xs mt-1">Admin Dashboard</p>
                </div>
                <nav className="flex-1 px-3 py-4 space-y-1">
                    <p className="text-gray-600 text-xs uppercase tracking-widest px-4 mb-3">Quản lý</p>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all bg-yellow-400 text-gray-900">
                        <span className="text-lg">👥</span>
                        Người dùng
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-gray-400 hover:bg-gray-800 hover:text-white">
                        <span className="text-lg">🎬</span>
                        Phim
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-gray-400 hover:bg-gray-800 hover:text-white">
                        <span className="text-lg">🕐</span>
                        Lịch chiếu
                    </a>
                </nav>
                <div className="px-3 pb-4 border-t border-gray-800 pt-4">
                    <a href="movie-list.html" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-all">
                        <span>←</span>
                        Về trang chủ
                    </a>
                </div>
            </aside>
            <div className="flex-1 flex flex-col min-w-0">
                <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between flex-shrink-0">
                    <div>
                        <h1 className="text-white font-semibold text-lg">Admin Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-white text-sm font-medium">Admin User</p>
                            <p className="text-yellow-400 text-xs">Quản trị viên</p>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900 font-bold text-sm flex-shrink-0">
                            A
                        </div>
                        <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                            Đăng xuất
                        </button>
                    </div>
                </header>
                <main className="flex-1 p-6 overflow-auto">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-white text-2xl font-bold">Danh sách người dùng</h2>
                            <p className="text-gray-400 text-sm mt-1">
                                Hiển thị <span className="text-yellow-400 font-medium">5</span> / 120 người dùng
                            </p>
                        </div>
                        <div className="relative w-72">
                            <input type="text" placeholder="Tìm theo tên, tài khoản, email..." className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-xl px-4 py-2.5 pr-10 outline-none focus:ring-2 focus:ring-yellow-400 text-sm transition-all" />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
                        </div>
                    </div>
                    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-800 bg-gray-800/50">
                                        <th className="text-left text-gray-400 font-medium px-5 py-4 whitespace-nowrap">#</th>
                                        <th className="text-left text-gray-400 font-medium px-5 py-4 whitespace-nowrap">Tài khoản</th>
                                        <th className="text-left text-gray-400 font-medium px-5 py-4 whitespace-nowrap">Họ tên</th>
                                        <th className="text-left text-gray-400 font-medium px-5 py-4 whitespace-nowrap">Email</th>
                                        <th className="text-left text-gray-400 font-medium px-5 py-4 whitespace-nowrap">Số điện thoại</th>
                                        <th className="text-left text-gray-400 font-medium px-5 py-4 whitespace-nowrap">Loại tài khoản</th>
                                        <th className="text-left text-gray-400 font-medium px-5 py-4 whitespace-nowrap">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800">
                                    <tr className="hover:bg-gray-800/50 transition-colors group">
                                        <td className="px-5 py-4 text-gray-500">1</td>
                                        <td className="px-5 py-4">
                                            <span className="text-white font-medium">admin01</span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center text-yellow-400 font-bold text-xs flex-shrink-0">
                                                    A
                                                </div>
                                                <span className="text-white">Admin Hệ Thống</span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 text-gray-300">admin01@gmail.com</td>
                                        <td className="px-5 py-4 text-gray-300">0912345678</td>
                                        <td className="px-5 py-4">
                                            <span className="bg-yellow-400/15 text-yellow-400 border border-yellow-400/30 text-xs font-medium px-2.5 py-1 rounded-full">
                                                Quản trị
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors">Sửa</button>
                                                <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors">Xóa</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-800/50 transition-colors group">
                                        <td className="px-5 py-4 text-gray-500">2</td>
                                        <td className="px-5 py-4">
                                            <span className="text-white font-medium">12312214123123</span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center text-yellow-400 font-bold text-xs flex-shrink-0">
                                                    1
                                                </div>
                                                <span className="text-white">123</span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 text-gray-300">mafi12311123243a@gmail.com</td>
                                        <td className="px-5 py-4 text-gray-300">0366465549</td>
                                        <td className="px-5 py-4">
                                            <span className="bg-blue-500/15 text-blue-400 border border-blue-500/30 text-xs font-medium px-2.5 py-1 rounded-full">
                                                Khách hàng
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors">Sửa</button>
                                                <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors">Xóa</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-800/50 transition-colors group">
                                        <td className="px-5 py-4 text-gray-500">3</td>
                                        <td className="px-5 py-4">
                                            <span className="text-white font-medium">nguyenvana</span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center text-yellow-400 font-bold text-xs flex-shrink-0">
                                                    N
                                                </div>
                                                <span className="text-white">Nguyễn Văn A</span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 text-gray-300">nguyenvana@gmail.com</td>
                                        <td className="px-5 py-4 text-gray-300">0901234567</td>
                                        <td className="px-5 py-4">
                                            <span className="bg-blue-500/15 text-blue-400 border border-blue-500/30 text-xs font-medium px-2.5 py-1 rounded-full">
                                                Khách hàng
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors">Sửa</button>
                                                <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors">Xóa</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-800/50 transition-colors group">
                                        <td className="px-5 py-4 text-gray-500">4</td>
                                        <td className="px-5 py-4">
                                            <span className="text-white font-medium">tranthib</span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center text-yellow-400 font-bold text-xs flex-shrink-0">
                                                    T
                                                </div>
                                                <span className="text-white">Trần Thị B</span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 text-gray-300">tranthib@gmail.com</td>
                                        <td className="px-5 py-4 text-gray-300">0987654321</td>
                                        <td className="px-5 py-4">
                                            <span className="bg-blue-500/15 text-blue-400 border border-blue-500/30 text-xs font-medium px-2.5 py-1 rounded-full">
                                                Khách hàng
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors">Sửa</button>
                                                <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors">Xóa</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-800/50 transition-colors group">
                                        <td className="px-5 py-4 text-gray-500">5</td>
                                        <td className="px-5 py-4">
                                            <span className="text-white font-medium">lehoanganh</span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-yellow-400/20 border border-yellow-400/30 flex items-center justify-center text-yellow-400 font-bold text-xs flex-shrink-0">
                                                    L
                                                </div>
                                                <span className="text-white">Lê Hoàng Anh</span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 text-gray-300">lehoanganh@gmail.com</td>
                                        <td className="px-5 py-4 text-gray-300">0333111222</td>
                                        <td className="px-5 py-4">
                                            <span className="bg-blue-500/15 text-blue-400 border border-blue-500/30 text-xs font-medium px-2.5 py-1 rounded-full">
                                                Khách hàng
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors">Sửa</button>
                                                <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors">Xóa</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    )
}

export default AdminLayout
