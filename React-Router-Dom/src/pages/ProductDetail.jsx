import React, { use, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PRODUCT_API } from '../constants/index'
import axios from 'axios'
const ProductDetail = () => {
    const {id, name} = useParams()
    console.log("id:", id)
    const detailProductAPI = `${PRODUCT_API}/${id}`
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        axios.get(detailProductAPI)
            .then((res) => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((error) => {
                console.error("Error fetching product detail:", error)
            })
            .finally(() => { })
    }, [])


    return (
        <main className="pt-20 pb-16">
            <div className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow p-6">
                    {/* product.category */}
                    <p className="text-xs text-blue-600 font-semibold uppercase mb-1">{product.type}</p>
                    {/* product.name — đọc từ PRODUCTS.find(p => p.id === Number(id)) */}
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
                    {/* product.desc */}
                    <p className="text-gray-500 mb-4">{product.description}</p>
                    {/* product.price */}
                    <p className="text-2xl font-bold text-blue-600 mb-6">{product.price?.toLocaleString()}đ</p>
                    {/* Nút thêm vào giỏ
       dispatch(addToCart(product)) → cartSlice reducer cập nhật state
       Text đổi khi cartItem đã tồn tại: "Thêm vào giỏ (đang có 1)" */}
                    <button className="w-full py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition-colors">
                        Thêm vào giỏ hàng
                    </button>
                    {/* Trạng thái sau khi đã thêm 1 lần:
  <button class="w-full py-2.5 bg-blue-600 text-white rounded-md font-medium">
    Thêm vào giỏ (đang có 1)
  </button>
  */}
                    {/* Điều hướng giữa các sản phẩm
       Click → URL đổi → useParams đọc id mới → component re-render */}

                </div>
                <Link to="/product" className="mt-6 inline-block text-sm text-blue-600 hover:underline">
                    ← Quay lại danh sách
                </Link>
            </div>
        </main>

    )
}

export default ProductDetail
