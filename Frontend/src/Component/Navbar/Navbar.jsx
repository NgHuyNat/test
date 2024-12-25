import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/img/logo1.png";
import { IoPersonCircle } from "react-icons/io5";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import React, { useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../Context/CartContext";
import { jwtDecode } from "jwt-decode";


const Narbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const { getTotalItems, getTotalPrice } = useContext(CartContext);
    const shippingFee = 10000; // Phí giao hàng cố định

    const totalPrice = getTotalPrice();

    const totalWithShipping = totalPrice + shippingFee;

    const [activeLink, setActiveLink] = useState("/");

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };
    const { cartItems, removeFromCart, updateQuantity, setCartItems } = useContext(CartContext);

    const [isFixed, setIsFixed] = useState(true); // Mặc định là fixed
    const location = useLocation(); // Lấy thông tin đường dẫn hiện tại

    // Danh sách các trang được cố định
    const fixedPaths = ["/", "/Restaurants"]; // Trang cần fixed



    // Theo dõi thay đổi đường dẫn
    useEffect(() => {
        if (fixedPaths.includes(location.pathname)) {
            setIsFixed(true); // Các trang trong danh sách => fixed
        } else {
            setIsFixed(false); // Các trang còn lại => static
        }
    }, [location.pathname]); // Theo dõi thay đổi đường dẫn

    const handleLogout = () => {
        localStorage.removeItem("token"); // Xóa token khỏi localStorage
        setIsLoggedIn(false); // Cập nhật trạng thái đăng xuất
        window.location.href = "/login"; // Chuyển hướng về trang đăng nhập
    };

    //Cart api 
    const [cart, setCart] = useState({
        user_id: "",
        food_id: "",
        quantity: "",
        total_price: "",
        status: "",
    });

    useEffect(() => {
        const getCart = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3020/api/cart', {
                    headers: { Authorization: `Bearer ${token}` },
                });
    
                const userId = getUserIdFromToken();
                const filteredCart = response.data.filter(item => item.user_id === userId);
    
                const cartData = await Promise.all(
                    filteredCart.map(async (item) => {
                        try {
                            const foodResponse = await axios.get(`http://localhost:3020/api/food/${item.food_id}`);
                            const food = foodResponse.data[0]; // Lấy phần tử đầu tiên từ mảng
    
                            return {
                                id: item.id,
                                user_id: item.user_id,
                                food_id: item.food_id,
                                quantity: item.quantity,
                                total_price: item.total_price,
                                status: item.status,
                                name: food.name,
                                description: food.description,
                                price: food.price.replace(/,/g, ''), // Loại bỏ dấu phẩy trong giá
                                size: food.size,
                                image: food.image, // Lấy ảnh từ API
                            };
                        } catch (err) {
                            console.error(`Lỗi khi lấy dữ liệu món ăn với id ${item.food_id}:`, err);
                            return { ...item, name: null, description: null, price: null, size: null, image: null };
                        }
                    })
                );
    
                console.log('Dữ liệu giỏ hàng sau khi lấy chi tiết món ăn:', cartData);
                setCartItems(cartData);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu giỏ hàng:', error);
            }
        };
    
        getCart();
    }, []);
    



    const getUserIdFromToken = () => {
        const token = localStorage.getItem("token"); // Lấy token từ localStorage

        if (!token) {
            console.error("Token không tồn tại");
            return null; // Trả về null nếu không có token
        }

        try {
            const decodedToken = jwtDecode(token); // Giải mã token
            console.log("Decoded Token:", decodedToken); // Debug thông tin token
            return decodedToken.id || null; // Lấy trường `id` từ token
        } catch (error) {
            console.error("Lỗi khi giải mã token:", error);
            return null; // Trả về null nếu có lỗi
        }
    };


    const checkout = async () => {
        const userId = getUserIdFromToken(); // Lấy user_id từ token

        if (!userId) {
            alert("Không thể lấy user_id. Vui lòng đăng nhập lại!");
            return;
        }

        try {
            await Promise.all(
                cartItems.map(async (item) => {
                    const data = {
                        user_id: userId,
                        food_id: item.id,
                        quantity: item.quantity,
                        total_price: item.price * item.quantity,
                        status: "pending",
                    };

                    console.log("Dữ liệu gửi lên API:", data); // Debug

                    const response = await axios.post("http://localhost:3020/api/createcart", data);

                    console.log("Phản hồi từ server:", response.data); // Debug phản hồi từ server

                    if (response.status !== 201) {
                        throw new Error("Lỗi khi tạo đơn hàng.");
                    }
                })
            );

            alert("Đơn hàng đã được gửi thành công!");
            setCartItems([]); // Làm trống giỏ hàng
        } catch (error) {
            console.error("Lỗi khi gửi đơn hàng:", error.message);
            alert("Không thể gửi đơn hàng. Vui lòng thử lại.");
        }
    };


    return (
        <nav className="px-[70px] bg-white">
            <div className="bg-white">
                <div className={`flex justify-between ${isFixed ? "fixed" : "static"
                    } z-50 top-0 bg-[#FAFAFA] w-[1381px] h-[50px] rounded-b-lg border-solid border-x-2 border-b-2 shadow-sm`}>
                    <div className="flex gap-8 items-center">
                        <h3 className="ml-6">🌟Chào mừng đến với Order YT</h3>
                        <div className="flex items-center gap-2">
                            <span className="p-[3px] w-6 h-6 rounded-full">
                                <FaPhone className="text-color-2" />
                            </span>
                            <span className="transition duration-200 cursor-pointer  hover:text-color-2">0988227985</span>
                        </div>
                    </div>
                    <div className="flex gap-8 ">
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-color-2" />
                            <span>Phong Khê, Bắc Ninh, TP.Bắc Ninh</span>
                        </div>
                        {/* Thẻ mở giỏ hàng */}
                        <div className="flex items-center gap-2 text-white rounded-b-lg cursor-pointer border-solid border-x-2 border-b-2 border-[#028643] bg-[#028643]"
                            onClick={toggleCart} >
                            <div className="border-r-[1px] border-solid p-2">
                                <BsFillCartCheckFill className="w-6 h-6" />
                            </div>
                            <div className="border-r-[1px] border-solid p-2">
                                <span>{getTotalItems()} Món ăn</span>
                            </div>
                            <div className="border-r-[1px] border-solid p-2">
                                <span>{getTotalPrice() > 0 ? `${getTotalPrice().toLocaleString("vi-VN")}` + " VNĐ" : "0 VNĐ"}</span>
                            </div>
                            <div className="p-2 border-r-[1px] border-solid border-transparent">
                                <FaCircleArrowDown className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-[50px] py-6">
                    <div>
                        <img src={logo} className="h-16 object-cover" alt="" />
                    </div>
                    <div className="flex gap-16 text-md font-semibold">
                        <div>
                            <Link
                                className={`w-[100px] px-5 py-2 rounded-3xl text-center transition-all duration-500 ease-in-out transform ${activeLink === "/"
                                    ? "bg-color-2 text-white shadow-lg scale-110 opacity-100"
                                    : "text-gray-600 hover:bg-gray-100 hover:opacity-80"
                                    }`}
                                to="/"
                                onClick={() => handleLinkClick("/")}
                            >
                                Trang chủ
                            </Link>
                        </div>
                        <div>
                            <Link
                                className={`w-[100px] px-5 py-2 rounded-3xl text-center transition-all duration-500 ease-in-out transform ${activeLink === "/Restaurants"
                                    ? "bg-color-2 text-white shadow-lg scale-110 opacity-100"
                                    : "text-gray-600 hover:bg-gray-100 hover:opacity-80"
                                    }`}
                                to="/Restaurants"
                                onClick={() => handleLinkClick("/Restaurants")}
                            >
                                Nhà hàng
                            </Link>
                        </div>
                        <div>
                            <span
                                className={`cursor-pointer w-[100px] px-5 py-2 rounded-3xl text-center transition-all duration-500 ease-in-out transform ${activeLink === "/OrderCheck"
                                    ? "bg-color-2 text-white shadow-lg scale-110 opacity-100"
                                    : "text-gray-600 hover:bg-gray-100 hover:opacity-80"
                                    }`}
                                onClick={() => handleLinkClick("/OrderCheck")}
                            >
                                Kiểm tra đặt hàng
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        {isLoggedIn && (
                            <IoPersonCircle className="w-14 h-14 text-color-2" />
                        )}
                        {isLoggedIn ? (
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 bg-color-2 text-white px-6 py-3 rounded-3xl hover:bg-color-1 hover:text-color-2 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-200"
                            >
                                <span className="text-lg font-medium" onClick={checkout} >Đăng xuất</span>
                            </button>
                        ) : (
                            <Link to="/Login">
                                <button onClick={() => setIsFixed(false)} className="flex items-center gap-2 bg-color-2 text-white px-6 py-3 rounded-3xl  hover:bg-color-1 hover:text-color-2 hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-200">
                                    <span className="text-lg font-medium ">Đăng nhập/Đăng ký</span>
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            {/* Giỏ hàng của tôi */}
            <div className={`w-[380px] px-4 h-full bg-[#f4f4f4] shadow-lg fixed top-0 z-50 transition-transform duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ right: 0 }}>
                <IoClose className="text-[#028643] text-end w-[680px] h-6 cursor-pointer"
                    onClick={toggleCart} />
                {/* <div className=" w-[350px] flex flex-col rounded-xl ">
                    <div className="flex bg-[#028643] justify-center text-white py-3 items-center gap-3">
                        <BsFillCartCheckFill className="w-12 h-12" />
                        <span className="text-2xl">Giỏ hàng của tôi</span>
                    </div>
                    <div className="bg-[#f2f2f2]">
                        <div className="overflow-y-auto h-[390px]">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center snap-start gap-3 w-full  px-3 py-4 border-b-2">
                                    <div className="flex justify-center w-2/12">
                                        <h5 className="bg-[#FC8A06] rounded-full w-9 h-9 px-[8px] pt-[5px] text-white font-semibold">{item.quantity}x</h5>
                                    </div>
                                    <div className="w-8/12 flex flex-col gap-1">
                                        <span className="text-[#028643] font-semibold ">{item.price} VNĐ</span>
                                        <span className="font-bold">{item.name}</span>
                                        <span className="text-sm font-semibold">{item.description}</span>
                                        size: {item.size}
                                    </div>
                                    <div className=" flex items-center  gap-2 w-2/12">
                                        <FaMinus onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-6 text-gray-400" />
                                        <FaPlus onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-6 text-gray-400" />
                                    </div>
                                </div>
                            ))}
                        </div>
       
                        <div className="flex flex-col gap-3 border-b-2 items-center font-semibold p-3">
                            <div className="flex justify-between w-full">
                                <span className="text-gray-400">Tổng phụ:</span>
                                <span>{cart.total_price}</span>
                                <span>{getTotalPrice() > 0 ? `${getTotalPrice().toLocaleString("vi-VN")}` + " VNĐ" : "0 VNĐ"}</span>

                            </div>
                            <div className="flex justify-between w-full">
                                <span className="text-gray-400">Phí Giao Hàng:</span>
                                <span>{`${shippingFee.toLocaleString("vi-VN")}`} VNĐ</span>
                            </div>
                        </div>
                        <div className="p-3 border-b-2 ">
                            <div className="flex justify-between text-lg font-semibold bg-[#FC8A06] text-white p-3 rounded-xl">
                                <span>Tổng số tiền phải trả:</span>
                                <span>{(getTotalPrice() + shippingFee).toLocaleString("vi-VN") + " VNĐ"}</span>
                            </div>
                        </div>
                        <div className="px-3 py-4">
                            <div className="flex items-center font-semibold gap-5 text-xl bg-[#028643] text-white p-3 rounded-xl"
                                onClick={checkout}
                            >
                                <FaArrowCircleRight className="w-6 h-6 " />
                                Thanh Toán!
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="w-[350px] flex flex-col rounded-xl">
    <div className="flex bg-[#028643] justify-center text-white py-3 items-center gap-3">
        <BsFillCartCheckFill className="w-12 h-12" />
        <span className="text-2xl">Giỏ hàng của tôi</span>
    </div>
    <div className="bg-[#f2f2f2]">
    <div className="overflow-y-auto h-[390px]">
    {cartItems && cartItems.length > 0 ? (
        cartItems.map((item) => (
            <div
                key={item.food_id}
                className="flex items-center snap-start gap-3 w-full px-3 py-4 border-b-2"
            >
                {/* Hiển thị ảnh món ăn */}
                <div className="flex justify-center w-2/12">
                    <img
                        src={item.image || "placeholder.jpg"} // Hiển thị ảnh hoặc placeholder nếu không có
                        alt={item.name || "Tên món ăn"}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                </div>

                {/* Hiển thị thông tin món ăn */}
                <div className="w-8/12 flex flex-col gap-1">
                    <span className="text-[#028643] font-semibold">
                        {(parseInt(item.price) * parseInt(item.quantity)).toLocaleString("vi-VN")} VNĐ
                    </span>
                    <span className="font-bold">{item.name || "Tên món ăn"}</span>
                    <span className="text-sm font-semibold">{item.description || "Không có mô tả"}</span>
                    {item.size && <span className="text-sm">Kích thước: {item.size}</span>}
                </div>

                {/* Nút tăng giảm số lượng */}
                <div className="flex items-center gap-2 w-2/12">
                    <FaMinus
                        onClick={() => updateQuantity(item.food_id, parseInt(item.quantity) - 1)}
                        className="w-7 h-6 text-gray-400 cursor-pointer"
                    />
                    <FaPlus
                        onClick={() => updateQuantity(item.food_id, parseInt(item.quantity) + 1)}
                        className="w-7 h-6 text-gray-400 cursor-pointer"
                    />
                </div>
            </div>
        ))
    ) : (
        <p className="text-center py-4">Giỏ hàng trống</p>
    )}
</div>


        {/* Tổng phụ và phí giao hàng */}
        <div className="flex flex-col gap-3 border-b-2 items-center font-semibold p-3">
            <div className="flex justify-between w-full">
                <span className="text-gray-400">Tổng phụ:</span>
                <span>{getTotalPrice().toLocaleString("vi-VN")} VNĐ</span>
            </div>
            <div className="flex justify-between w-full">
                <span className="text-gray-400">Phí Giao Hàng:</span>
                <span>{`${shippingFee.toLocaleString("vi-VN")}`} VNĐ</span>
            </div>
        </div>

        {/* Tổng số tiền phải trả */}
        <div className="p-3 border-b-2">
            <div className="flex justify-between text-lg font-semibold bg-[#FC8A06] text-white p-3 rounded-xl">
                <span>Tổng số tiền phải trả:</span>
                <span>
                    {(getTotalPrice() + shippingFee).toLocaleString("vi-VN")} VNĐ
                </span>
            </div>
        </div>

        {/* Nút Thanh Toán */}
        <div className="px-3 py-4">
            <div
                className="flex items-center font-semibold gap-5 text-xl bg-[#028643] text-white p-3 rounded-xl cursor-pointer"
            >
                <FaArrowCircleRight className="w-6 h-6" />
                Thanh Toán!
            </div>
        </div>
    </div>
</div>

            </div>
        </nav>
    );
};

export default Narbar;