import backgroundImage from "../..//assets/img/backgroundImage.jpg"
import logo from "../../assets/img/logo3.png"
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLockSquareRoundedFilled } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState(''); // Lưu lỗi tổng hợp
    const [isVisible, setIsVisible] = useState(false); // Trạng thái điều khiển hiệu ứng trượt

    // Hàm kiểm tra đầu vào và xác định lỗi
    const validateInputs = () => {
        const emptyFields = [];
        if (!formData.email) emptyFields.push("Email không được để trống.");
        if (!formData.phone) emptyFields.push("Số điện thoại không được để trống.");
        if (!formData.username) emptyFields.push("Tên người dùng không được để trống.");
        if (!formData.password) emptyFields.push("Mật khẩu không được để trống.");
        if (!formData.confirmPassword) emptyFields.push("Vui lòng xác nhận mật khẩu.");
        else if (formData.password !== formData.confirmPassword) {
            return "Mật khẩu xác nhận không khớp.";
        }

        if (emptyFields.length === 1) {
            return emptyFields[0]; // Lỗi cụ thể nếu chỉ một trường trống
        } else if (emptyFields.length > 1) {
            return "Không được để trống thông tin."; // Lỗi tổng quát nếu nhiều trường trống
        }

        return ""; // Không có lỗi
    };

    useEffect(() => {
        if (error) {
            setIsVisible(false); // Đặt lại trạng thái để kích hoạt hiệu ứng
            const resetTimer = setTimeout(() => {
                setIsVisible(true); // Kích hoạt hiệu ứng trượt lại
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

    const handleSignup = async (e) => {
        e.preventDefault();

        // Kiểm tra lỗi
        const validationError = validateInputs();
        if (validationError) {
            setError(validationError); // Cập nhật lỗi
            return;
        }

        try {
            await axios.post('http://localhost:3020/api/signup', {
                email: formData.email,
                username: formData.username,
                phone: formData.phone,
                password: formData.password,
            });
            alert('Đăng ký thành công! Hãy đăng nhập.');
        } catch (err) {
            setError(err.response?.data?.message || 'Có lỗi xảy ra');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="relative">
            <div className="h-full z-10 w-full top-0 left-0 bg-black fixed bg-local  " style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100vh"
            }}>
                <Link to="/">
                    <img src={logo} alt="" className=" bg-white object-cover h-20 bg-opacity-70 rounded-3xl ml-10 mt-10 py-2" />
                </Link>
                {/* Lỗi khi đăng kí sai */}
                <div
                     className={`fixed top-10 right-0 border-l-4 rounded-sm z-10 border-red-600 transition-transform duration-500 ease-in-out ${
                        isVisible ? "translate-x-0" : "translate-x-full" }`}
                >
                    {error && (
                        <p className="bg-[#F2F2F2] text-red-600 py-4 text-lg font-bold px-7 shadow-lg transition-opacity duration-1000">
                            {error}
                        </p>
                    )}
                </div>
                <div className="w-[650px] h-[600px] bg-white bg-opacity-50  rounded-3xl absolute right-[100px] top-[70px]">
                    <form
                        onSubmit={handleSignup}
                        class="flex flex-col   gap-8 p-10 text-black items-center"
                    >
                        <h2 className="text-2xl font-bold">Chào mừng bạn đến với <span className="text-3xl text-color-2"> Order YT</span></h2>
                        <div className="flex items-center bg-[#F2F2F2] rounded-2xl gap-3 py-3 px-7">
                            <MdOutlineMailOutline className="w-6 h-6" />
                            <input
                                name="email"
                                onChange={handleChange}
                                type="email"
                                placeholder="Email"
                                class="w-[300px] bg-[#f2f2f2] outline-none text-sm font-semibold" />
                        </div>
                        <div className="flex items-center bg-[#F2F2F2] rounded-2xl gap-3 py-3 px-7">
                            <MdOutlineMailOutline className="w-6 h-6" />
                            <input
                                name="phone"
                                onChange={handleChange}
                                type="text"
                                placeholder="phone"
                                class="w-[300px] bg-[#f2f2f2] outline-none text-sm font-semibold" />
                        </div>
                        <div className="flex items-center bg-[#F2F2F2] rounded-2xl gap-3 py-3 px-7">
                            <MdOutlineMailOutline className="w-6 h-6" />
                            <input
                                name="username"
                                onChange={handleChange}
                                type="text"
                                placeholder="Username"
                                class="w-[300px] bg-[#f2f2f2] outline-none text-sm font-semibold" />
                        </div>
                        <div className="flex items-center bg-[#F2F2F2] rounded-2xl gap-3 py-3 px-7">
                            <TbLockSquareRoundedFilled className="w-6 h-6" />
                            <input
                                name="password"
                                onChange={handleChange}
                                type="password"
                                placeholder="Mật khẩu"
                                class="w-[300px] bg-[#f2f2f2] outline-none text-sm font-semibold" />
                        </div>
                        <div className="flex items-center bg-[#F2F2F2] rounded-2xl gap-3 py-3 px-7">
                            <TbLockSquareRoundedFilled className="w-6 h-6" />
                            <input
                                name="confirmPassword"
                                onChange={handleChange}
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                                class="w-[300px] bg-[#f2f2f2] outline-none text-sm font-semibold" />
                        </div>
                        <div class="flex justify-between w-[392px] items-center">
                            <p class="text-black font-medium">Bạn đã có tài khoản?
                                <Link to="/Login" class="ml-2 border-b-2 border-color-2 font-medium text-color-2">Đăng nhập</Link>
                            </p>
                            <button type="submit" class=" px-5 py-3  bg-[#f2f2f2] text-lg font-medium text-color-2 rounded-3xl">Đăng ký</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};


export default Signup;