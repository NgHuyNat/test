import backgroundImage from "../..//assets/img/backgroundImage.jpg"
import logo from "../../assets/img/logo3.png"
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLockSquareRoundedFilled } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isVisible, setIsVisible] = useState(false); // Trạng thái điều khiển hiệu ứng lỗi
    const navigate = useNavigate();

    // Hàm kiểm tra các trường đầu vào
    const validateInputs = () => {
        if (!email && !password) {
            return "Vui lòng điền đầy đủ thông tin.";
        }
        if (!email) {
            return "Email không được để trống.";
        }
        if (!password) {
            return "Mật khẩu không được để trống.";
        }
        return ""; // Không có lỗi
    };

    useEffect(() => {
        if (error) {
            setIsVisible(false); // Đặt lại trạng thái để kích hoạt hiệu ứng
            const resetTimer = setTimeout(() => {
                setIsVisible(true); // Kích hoạt hiệu ứng trượt
            }, 1);

            const hideTimer = setTimeout(() => {
                setIsVisible(false); // Ẩn thông báo sau 4 giây
            }, 4000);

            return () => {
                clearTimeout(resetTimer);
                clearTimeout(hideTimer);
            }; // Dọn dẹp timers
        }
    }, [error]);

    const handleLogin = async (e) => {
        e.preventDefault();

        // Kiểm tra lỗi
        const validationError = validateInputs();
        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            const response = await axios.post("http://localhost:3020/api/login", {
                email,
                password,
            });
            const { token } = response.data;

            localStorage.setItem("token", token); // Lưu token vào localStorage
            setIsLoggedIn(true); // Cập nhật trạng thái đăng nhập
            navigate("/"); // Chuyển về trang Home
        } catch (err) {
            setError(err.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại!");
        }
    };

    return (
        <div className="relative">
            <div
                className="h-full z-10 w-full top-0 left-0 bg-black fixed bg-local"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100vh",
                }}
            >
                <Link to="/">
                    <img
                        src={logo}
                        alt=""
                        className="bg-white object-cover h-20 bg-opacity-70 rounded-3xl ml-10 mt-10 py-2"
                    />
                </Link>

                {/* Thông báo lỗi */}
                <div
                    className={`fixed top-10 right-0 border-l-4 rounded-sm z-10 border-red-600 transition-transform duration-500 ease-in-out ${
                        isVisible ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    {error && (
                        <p className="bg-[#F2F2F2] text-red-600 py-4 text-lg font-bold px-7 shadow-lg transition-opacity duration-1000">
                            {error}
                        </p>
                    )}
                </div>
                <div className="w-[650px] h-[370px] bg-white bg-opacity-50  rounded-3xl absolute right-[100px] top-[200px]">
                    <form class="flex flex-col   gap-8 p-10 text-black items-center" onSubmit={handleLogin}>
                        <h2 className="text-2xl font-bold">Chào mừng bạn trở lại với <span className="text-3xl text-color-2"> Order YT</span></h2>
                        <div className="flex items-center bg-[#F2F2F2] rounded-2xl gap-3 py-3 px-7"> 
                            <IoPersonSharp className="w-6 h-6"/>
                            <input  
                            type="email" 
                            placeholder="Email" 
                            class="w-[300px] bg-[#f2f2f2] outline-none text-sm font-semibold"
                            onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="flex items-center bg-[#F2F2F2] rounded-2xl gap-3 py-3 px-7"> 
                            <TbLockSquareRoundedFilled className="w-6 h-6"/>
                            <input 
                                type="password" 
                                placeholder="Mật khẩu" 
                                class="w-[300px] bg-[#f2f2f2] outline-none text-sm font-semibold"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div class="flex justify-between w-[392px] items-center">
                            <p class="text-black font-medium">Bạn chưa có tài khoản? 
                                <Link to="/Signup" class="ml-2 border-b-2 border-color-2 font-medium text-color-2">Đăng ký</Link>
                            </p>
                            <button type="submit" class=" px-5 py-3  bg-[#f2f2f2] text-lg font-medium text-color-2 rounded-3xl">Đăng nhập</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;