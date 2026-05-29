import { use, useEffect,useState } from "react";

import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import axios from "axios";

function App() {
  const API_URL = "https://69ca679fba5984c44bf31927.mockapi.io/api/v1/phone";
    // state
  // const products = [
  //   {id: 1, name: 'iPhone 14 Pro Max', price: 1099, category: 'Smartphone', image: "https://cdn.tgdd.vn/Products/Images/42/342667/s16/iphone-17-blue-thumb-650x650.png"},
  //   {id: 2, name: 'Samsung Galaxy S23 Ultra', price: 1199, category: 'Smartphone', image: "https://cdn.tgdd.vn/Products/Images/42/342667/s16/iphone-17-blue-thumb-650x650.png"},
  //   {id: 3, name: 'Google Pixel 7 Pro', price: 899, category: 'Smartphone', image: "https://cdn.tgdd.vn/Products/Images/42/342667/s16/iphone-17-blue-thumb-650x650.png"},
  //   {id: 4, name: 'OnePlus 11', price: 699, category: 'Smartphone', image: "https://cdn.tgdd.vn/Products/Images/42/342667/s16/iphone-17-blue-thumb-650x650.png"},
  // ]
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  //state chứa keyword tìm kiếm
  const [keyword, setKeyword] = useState("");
  // state chứa cart
  // {
  //   //key : productId , value : quanlity
  //   2: 3,
  //   4: 1,
  // }
  const [cart, setCart] = useState({});
  // state 3: state chứa logic đóng/mở cart
  const [isCartOpen, setIsCartOpen] = useState(false);
  //state 4: state chứa product detail: object hoặc null
  //null => đóng product detail
  const [detailProduct, setDetailProduct] = useState(null);

  // useEffect để call API lấy products
    // param 1: callback function chứa logic call API
  // param 2: dependency array, nếu để [] thì callback chỉ chạy 1 lần sau lần render đầu tiên
   // TH1: nếu để [] thì callback chỉ chạy 1 lần sau lần render đầu tiên
   // TH2: nếu để [keyword] thì callback sẽ chạy sau lần render đầu tiên và mỗi khi keyword thay đổi

  //Case 1: để call api 
  useEffect(() => {
     // bật loading để hiển thị. spinner khi đang chờ API trả về
    setIsLoading(true)
    
    // call API
    axios.get(API_URL)
      .then((response)=>{
        //lấy dữ liệu thành công => respon.data
        console.log("response", response)
        setProducts(response.data)
      })
      .catch(()=>{})
      .finally(() => {
        // tắt loading sau khi API trả về (dù thành công hay thất bại)
        setIsLoading(false)
      })
  }, [])

  //CASE 2: để call API mỗi khi keyword thay đổi
  useEffect(() => {
    // format API_URL để có thể gửi keyword lên server
    const formatURL = `${API_URL}?search=${keyword}`;
    // bật loading để hiển thị. spinner khi đang chờ API trả về
    setIsLoading(true)
    // call API
    axios.get(formatURL)
      .then((response)=>{
        //lấy dữ liệu thành công => respon.data
        console.log("response", response)
        setProducts(response.data)
      })
      .catch(()=>{})
      .finally(() => {
        // tắt loading sau khi API trả về (dù thành công hay thất bại)
        setIsLoading(false)
      })
  }, [keyword])

  // define event component con gửi lên component cha
  const handleOpenDetail = (product) => {
    // khi click vào product card nào thì sẽ mở product detail của đúng product đó
    console.log("Mở detail của sản phẩm: ", product);
    setDetailProduct(product);
  };

  const handleCloseProductDetail = () => {
    setDetailProduct(null);
  };

  const handleSearch = (keyword) => {
    console.log("keyword",keyword)
    setKeyword(keyword);
    // filter products theo keyword
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleAddToCart = (productId) => {
    const currentQty = cart[productId] || 0;
    const newCart = {
      ...cart,
      [productId]: currentQty + 1,
    };
    setCart(newCart);
  };

  const handleUpdateCartQuantity = (productId, delta) => {
    setCart((prevCart) => {
      const currentQty = prevCart[productId] || 0;
      const nextQty = currentQty + delta;
      if (nextQty <= 0) {
        const { [productId]: removed, ...rest } = prevCart;
        return rest;
      }
      return {
        ...prevCart,
        [productId]: nextQty,
      };
    });
  };
  //state
  // const products = [
  //   {
  //     id: 1,
  //     name: "iPhone 14 Pro Max",
  //     price: 1099,
  //     category: "Smartphone",
  //     image:
  //       "https://cdn.tgdd.vn/Products/Images/42/342667/s16/iphone-17-blue-thumb-650x650.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy S23 Ultra",
  //     price: 1199,
  //     category: "Smartphone",
  //     image:
  //       "https://cdn.tgdd.vn/Products/Images/42/342667/s16/iphone-17-blue-thumb-650x650.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Google Pixel 7 Pro",
  //     price: 899,
  //     category: "Smartphone",
  //     image:
  //       "https://cdn.tgdd.vn/Products/Images/42/342667/s16/iphone-17-blue-thumb-650x650.png",
  //   },
  //   {
  //     id: 4,
  //     name: "OnePlus 11",
  //     price: 699,
  //     category: "Smartphone",
  //     image:
  //       "https://cdn.tgdd.vn/Products/Images/42/342667/s16/iphone-17-blue-thumb-650x650.png",
  //   },
  // ];



        // tạo biến total để tính số lượng sản phẩm trong cart
        // vì cart  là object => object => array =>reduce 
        //  trong Javascript Object, class này giúp convert từ object sang array
        //{key: value }
        // 1.lấy value ==> Object.values(cart)=> [3, 1]
        // 2. lấy key ==> Object.keys(cart) => ['2', '4']
        const listQty = Object.values(cart); // [3, 1]
        const totalItems = listQty.reduce((sum, qty) => sum + qty, 0); 
        console.log(totalItems);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto">
          <Header
            cartCount={totalItems}
            onCartClick={handleOpenCart}
          />

          <SearchBar onSearch={(keyword) => handleSearch(keyword)} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetail={handleOpenDetail}
              />
            ))}
          </div>

          {/* popup */}
          <Cart
            isOpenCart={isCartOpen}
            cart={cart}
            products={products}
            onCloseCart={handleCloseCart}
            onChangeQuantity={handleUpdateCartQuantity}
          />
          <ProductDetail
            product={detailProduct}
            onCloseProductDetail={handleCloseProductDetail}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </>
  );
}

export default App;
