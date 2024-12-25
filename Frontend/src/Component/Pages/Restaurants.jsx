import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { MdDeliveryDining } from "react-icons/md";
import combo from "../../assets/img/combo.webp";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoStarHalf } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { BsFillClockFill } from "react-icons/bs";
import { CgSearchLoading } from "react-icons/cg";
import { FaCirclePlus } from "react-icons/fa6";
import girl_drink from "../../assets/img/girl_drink.jpg"
import vegetable from "../../assets/img/vegetable.jpg"
import ice_cream from "../../assets/img/ice_cream.jpg"
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";


const Restaurants = () => {
    //Get foods data 
    const [foods, setFoods] = useState([]);
    const { addToCart } = useContext(CartContext);// Lấy hàm addToCart từ context
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token")); // Kiểm tra trạng thái đăng nhập

    const fetchFoods = async () => {
        try {
            const response = await axios.get("http://localhost:3020/api/food");
            setFoods(response.data); // Lưu dữ liệu vào state
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu từ API:", error);
        }
    };

    const hamburgers = foods.filter(
        (food) => food.type === "Burger"
    );

    const chips = foods.filter(
        (food) => food.type === "Chips"
    );

    const drinks = foods.filter(
        (food) => food.type === "Drinks"
    );

    useEffect(() => {

        fetchFoods();
    }, []);

    // Hàm xử lý thêm món vào giỏ hàng
    const handleAddToCart = (food) => {
        if (!isLoggedIn) {
            navigate("/Login"); // Chuyển đến trang đăng nhập nếu chưa đăng nhập
            return;
        }
        addToCart(food); // Thêm vào giỏ hàng nếu đã đăng nhập
    };
    // end get foods data
    return (
        <div className="px-[70px]">
            <div className="h-[477px] rounded-lg bg-local bg-center " style={{ backgroundImage: "url(https://mcdonalds.vn/uploads/2018/food/Combo/xmeal_ham-min.png.pagespeed.ic.Am086xrWJh.webp)" }}>
                <div className="relative grid grid-cols-2 pl-16 gap-16 w-full rounded-lg items-center h-full bg-[#F4F4F4] bg-opacity-75">
                    <div className="flex flex-col  gap-3">
                        <span className="font-normal">Tôi yêu nó!</span>
                        <span className="text-5xl font-medium pb-3">McDonald's Việt Nam</span>
                        <div className="flex gap-3 mt-3 text-white">
                            <div className="bg-black flex items-center px-5 py-3 rounded-3xl gap-2">
                                <BsFillClipboard2CheckFill className="w-7 h-7" />
                                <span>Đơn hàng tối thiểu: 12 GBP</span>
                            </div>
                            <div className="bg-black flex items-center px-5 py-3 rounded-3xl gap-2">
                                <MdDeliveryDining className="w-7 h-7" />
                                <span>Giao hàng trong 20-25 phút</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[361px]">
                        <img src={combo} alt="" className="bg-gradient-to-r from-color-2 to-white rounded-lg  w-[581px] object-cover h-[361px]" />
                        <div className="absolute top-56 left-[-60px] flex flex-col p-3 items-center gap-2 rounded-lg w-[136px] h-[158px] bg-white">
                            <span className="text-6xl">3.4</span>
                            <span className="flex text-yellow-300">
                                <MdOutlineStarPurple500 className="w-5 h-4" />
                                <MdOutlineStarPurple500 className="w-5 h-4" />
                                <MdOutlineStarPurple500 className="w-5 h-4" />
                                <IoStarHalf className="w-5 h-4" />
                                <IoStarOutline className="w-5 h-4" />
                            </span>
                            <span className="text-gray-400">1,360 đánh giá</span>
                        </div>
                    </div>

                    <div className="absolute flex gap-2 text-white bg-color-2 py-3 px-14 rounded-r-lg items-center bottom-[-24px] left-3">
                        <BsFillClockFill />
                        <span>Mở cửa đến 3:00 sáng</span>
                    </div>
                </div>
            </div>
            <div className="py-9 px-16 flex items-center justify-between">
                <span className="text-2xl font-bold">Tất cả các ưu đãi từ McDonald's Việt Nam</span>
                <form action="" className="flex items-center gap-2 border-[#03081F] border-[1px] rounded-3xl py-3 px-5">
                    <CgSearchLoading className="text-gray-400 font-medium" />
                    <input type="search" placeholder="Tìm kiếm từ menu..." className="outline-none font-medium" />
                </form>
            </div>
            <div className="flex p-5 rounded-lg bg-[#F3F3F3] gap-8 items-center font-medium text-lg">
                <span className="text-white bg-black py-1 px-3 rounded-3xl">Cung cấp</span>
                <span>Burgers</span>
                <span>Khoai tây chiên</span>
                <span>Snacks</span>
                <span>Salads</span>
                <span>Đồ uống lạnh</span>
                <span>Bữa ăn hạnh phúc®</span>
                <span>Đồ tráng miệng</span>
                <span>Đồ uống nóng</span>
                <span>Sốt</span>
                <span>Orbit®</span>
            </div>
            <div className="grid grid-cols-3 gap-5 py-[70px]">
                <div className="relative  h-[325px]">
                    <img
                        src={girl_drink}
                        alt="Pizza Image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-transparent p-4 rounded-lg">
                        <div className="text-white mt-[230px] ml-5">
                            <p className="text-color-2 text-sm font-semibold">McDonald's Việt Nam</p>
                            <h2 className="text-lg font-bold">Giảm giá đơn hàng đầu tiên</h2>
                        </div>
                        <div className="absolute flex justify-center items-center top-0 right-4 w-[88px] h-[60px] bg-black text-white text-xl font-bold  rounded-b-lg">
                            <span>-20%</span>
                        </div>
                        <div className="absolute flex justify-center items-center bottom-0 bg-opacity-60 right-0 w-[97px] h-[89px] bg-white  text-xl  rounded-tl-[40px] ">
                            <button>
                                <FaCirclePlus className="w-10 h-10" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative  h-[325px]">
                    <img
                        src={vegetable}
                        alt="Pizza Image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-transparent p-4 rounded-lg">
                        <div className="text-white mt-[230px] ml-5">
                            <p className="text-color-2 text-sm font-semibold">McDonald's Việt Nam</p>
                            <h2 className="text-lg font-bold">Giảm giá thuần chay</h2>
                        </div>
                        <div className="absolute flex justify-center items-center top-0 right-4 w-[88px] h-[60px] bg-black text-white text-xl font-bold  rounded-b-lg">
                            <span>-20%</span>
                        </div>
                        <div className="absolute flex justify-center items-center bottom-0 bg-opacity-60 right-0 w-[97px] h-[89px] bg-white  text-xl  rounded-tl-[40px] ">
                            <button>
                                <FaCirclePlus className="w-10 h-10" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative  h-[325px]">
                    <img
                        src={ice_cream}
                        alt="Pizza Image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-transparent p-4 rounded-lg">
                        <div className="text-white mt-[230px] ml-5">
                            <p className="text-color-2 text-sm font-semibold">McDonald's Việt Nam</p>
                            <h2 className="text-lg font-bold">Ưu đãi kem miễn phí</h2>
                        </div>
                        <div className="absolute flex justify-center items-center top-0 right-4 w-[88px] h-[60px] bg-black text-white text-xl font-bold  rounded-b-lg">
                            <span>-100%</span>
                        </div>
                        <div className="absolute flex justify-center items-center bottom-0 bg-opacity-60 right-0 w-[97px] h-[89px] bg-white  text-xl  rounded-tl-[40px] ">
                            <button>
                                <FaCirclePlus className="w-10 h-10" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className="text-4xl font-bold pb-10">Burgers</div>
                <div className="grid grid-cols-3 mt-10 gap-5">
                    {hamburgers.map((food) => (
                        <div key={food.id} className="flex p-5 w-full gap-20 bg-[#FDFDFD] items-center border-solid border-[1px] border-gray-200 shadow-xl rounded-lg h-[245px]">
                            <div className="flex flex-col w-6/12  gap-5">
                                <span className="text-2xl font-medium">{food.name}</span>
                                <span className="text-lg">{food.description}</span>
                                <span className="text-xl font-bold">{food.price} VNĐ</span>
                            </div>
                            <div className="relative w-6/12 h-[200px]">
                                <img
                                    src={food.image}
                                    alt={food.name}
                                    className="w-full h-full bg-gradient-to-br from-color-2 to-white object-cover rounded-lg"
                                />
                                <div className="absolute flex justify-center items-center bottom-0 bg-opacity-60 right-0 w-[88px] h-[81px] bg-white text-xl rounded-tl-[40px]">
                                    <button onClick={() => handleAddToCart(food)} >
                                        <FaCirclePlus className="w-10 h-10" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-4xl font-bold pb-10  pt-[70px]">Khoai tây chiên</div>
                <div className="grid grid-cols-3 gap-5">
                    {chips.map((food) => (
                        <div key={food.id} className="flex p-5 w-full gap-20 bg-[#FDFDFD] items-center border-solid border-[1px] border-gray-200 shadow-xl rounded-lg h-[245px]">
                            <div className="flex flex-col w-6/12  gap-5">
                                <span className="text-2xl font-medium">{food.name}</span>
                                <span className="text-lg">{food.description} (size {food.size})</span>
                                <span className="text-xl font-bold">{food.price} VNĐ</span>
                            </div>
                            <div className="relative w-6/12 h-[200px]">
                                <img
                                    src={food.image} // URL ảnh từ API
                                    alt={food.name}
                                    className="w-full h-full bg-gradient-to-br from-color-2 to-white object-cover rounded-lg"
                                />
                                <div className="absolute flex justify-center items-center bottom-0 bg-opacity-60 right-0 w-[88px] h-[81px] bg-white text-xl rounded-tl-[40px]">
                                    <button onClick={() => handleAddToCart(food)}>
                                        <FaCirclePlus className="w-10 h-10" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div className="flex p-5 gap-2 bg-[#FDFDFD] items-center border-solid border-[1px] border-gray-200 shadow-xl rounded-lg h-[245px]">
                        <div className="flex flex-col gap-5">
                            <span className="text-2xl font-medium">Đồ ăn nhẹ</span>
                            <span className="text-lg">Khoai tây chiên (size vừa)</span>
                            <span className="text-xl font-bold">29,000 VNĐ</span>
                        </div>
                        <div className="relative w-[203px] h-[200px] ">
                            <img src={chip_lon} alt="" className="w-full h-full bg-gradient-to-br from-color-2 to-white object-cover rounded-lg" />
                            <div className="absolute flex justify-center items-center bottom-0 bg-opacity-60 right-0 w-[88px] h-[81px] bg-white  text-xl  rounded-tl-[40px] ">
                                <button>
                                    <FaCirclePlus className="w-10 h-10" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex p-5 gap-2 bg-[#FDFDFD] items-center border-solid border-[1px] border-gray-200 shadow-xl rounded-lg h-[245px]">
                        <div className="flex flex-col gap-5">
                            <span className="text-2xl font-medium">Đồ ăn nhẹ</span>
                            <span className="text-lg">Khoai tây chiên (size lớn)</span>
                            <span className="text-xl font-bold">39,000 VNĐ</span>
                        </div>
                        <div className="relative w-[203px] h-[200px] ">
                            <img src={chip_to} alt="" className="w-full h-full bg-gradient-to-br from-color-2 to-white object-cover rounded-lg" />
                            <div className="absolute flex justify-center items-center bottom-0 bg-opacity-60 right-0 w-[88px] h-[81px] bg-white  text-xl  rounded-tl-[40px] ">
                                <button>
                                    <FaCirclePlus className="w-10 h-10" />
                                </button>
                            </div>
                        </div>
                    </div> */}

                </div>
                <div className="text-4xl font-bold pb-10  pt-[70px]">Đồ uống lạnh</div>
                <div className="grid grid-cols-3 gap-5">
                    {drinks.map((food) => (
                        <div key={food.id} className="flex p-5 w-full gap-20 bg-[#FDFDFD] items-center border-solid border-[1px] border-gray-200 shadow-xl rounded-lg h-[245px]">
                            <div className="flex flex-col w-6/12  gap-5">
                                <span className="text-2xl font-medium">{food.name}</span>
                                <span className="text-lg">{food.description}</span>
                                <span className="text-xl font-bold">{food.price} VNĐ</span>
                            </div>
                            <div className="relative w-6/12 h-[200px]">
                                <img
                                    src={food.image} // URL ảnh từ API
                                    alt={food.name}
                                    className="w-full h-full bg-gradient-to-br from-color-2 to-white object-cover rounded-lg"
                                />
                                <div className="absolute flex justify-center items-center bottom-0 bg-opacity-60 right-0 w-[88px] h-[81px] bg-white text-xl rounded-tl-[40px]">
                                    <button onClick={() => handleAddToCart(food)}>
                                        <FaCirclePlus className="w-10 h-10" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="py-10">

                </div>
            </div>
        </div>
    );
}

export default Restaurants;