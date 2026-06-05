import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {PRODUCT_API} from '../constants/index'

const Products = () => {
  const [products, setProducts] = useState([])

  const [searchParams, setSearchParams] = useSearchParams()

  const keyword = searchParams.get('keyword') || ""
  console.log("keyword: ", keyword)

  // useEffect để gọi API
  useEffect(() => {
    // B1: gọi API => axios
    axios.get(PRODUCT_API)
      .then((res) => {
        console.log(res.data)
        setProducts(res.data)
      })
      .catch((error) => {
        console.error("Error fetching products:", error)
      })
      .finally(() => { })
  }, [])

  const updateSearchParams = (key, value) => {
 // ....?keyword=áo&category=iphone&sort=asc
    // B1: lấy tất cả search params hiện tại => chuyển thành object
    // {keyword: "áo", category: "iphone", sort: "asc"}
    const paramsObj = Object.fromEntries([...searchParams])
    // B2: cập nhật key cần thay đổi
    paramsObj[key] = value
    // B3: chuyển object thành search params => cập nhật lại URL
    setSearchParams(paramsObj)
  }

  return (
    <main className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Danh sách sản phẩm</h1>
        {/* Thanh tìm kiếm + filter
     useSearchParams: ?keyword=áo&category=Áo&sort=price-asc */}
        <div className="flex flex-wrap gap-3 mb-6">
          {/* ?keyword= */}
          <input 
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            defaultValue="áo"
            // vì hàm updateSearchParams có tham số nên phải code kiểu () -> updateSearchParams(...)
            onChange={(e) => updateSearchParams('keyword', e.target.value)}
            className="flex-1 min-w-48 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {/* ?category= */}
          <select
            className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => updateSearchParams('category', e.target.value)}
          >
            <option value="all">Tất cả</option>
            <option value="iphone">iphone</option>
            <option value="samsung">Samsung</option>
          </select>
          {/* ?sort= */}
          <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => updateSearchParams('sort', e.target.value)}
          >
            <option value="asc">Giá tăng dần</option>
            <option value="desc">Giá giảm dần</option>
          </select>
        </div>
        {/* Kết quả tìm kiếm */}
        <p className="text-sm text-gray-500 mb-4">
          Tìm thấy <strong>2</strong> sản phẩm với từ khóa "<strong>áo</strong>"
        </p>
        {/* Grid sản phẩm — mỗi card Link đến /product/:id (useParams) */}
        {/* TH1: có sản phẩm -> length > 0 */}

        {
          products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

              {/* map để render data */}
              {products.map((product) => (
                <Link 
                  to={`/product/${product.id}`}
                  className="block p-4 bg-white rounded-lg shadow hover:shadow-md border border-gray-100 transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-800">{product.name}</p>
                      <p className="text-xs text-blue-600 mt-1">{product.type}</p>
                      <p className="text-xs text-gray-400 mt-1">{product.description}</p>
                    </div>
                    <span className="text-blue-600 font-bold text-sm whitespace-nowrap ml-2">{product.price?.toLocaleString()}đ</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Không tìm thấy sản phẩm nào.</p>
          )
        }


        {/* TH2: không có sản phẩm -> length === 0 */}
      </div>
    </main>

  )
}

export default Products
