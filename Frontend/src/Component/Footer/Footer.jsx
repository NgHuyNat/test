import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { FaSnapchatGhost } from "react-icons/fa";
import logo from "../../assets/img/logo2.png"
import app from "../../assets/img/app.png"
import { FaApple } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="grid grid-cols-3 bg-[#D9D9D9] p-12">
                <div className="p-4">
                    <img src={logo} alt="" className="h-28 bg-[#D9D9D9]" />
                    <div className="flex pt-0 p-4 gap-2">
                        <div className="flex rounded-lg p-1 pr-2 gap-2 items-center bg-black">
                            <FaApple className="text-white w-10 h-10" />
                            <div className="flex flex-col text-white">
                                <span className="text-xs">Download on the</span>
                                <span className="text-xl font-medium">App Store</span>
                            </div>
                        </div>  
                        <div className="flex rounded-lg p-1 pr-2 gap-1 items-center bg-black">
                            <img src={app} alt="" className="w-8 h-8" />
                            <div className="flex flex-col text-white">
                                <span className="text-xs">GET IT ON</span>
                                <span className="text-xl font-medium">Google Play</span>
                            </div>
                        </div>
                    </div>
                    <span className="text-sm p-4">
                        Company # 490039-445, Registered with House of companies.
                    </span>
                </div>
                <div className="flex flex-col gap-6 p-4">
                    <span className="font-bold">
                        Nhận ưu đãi độc quyền trong hộp thư đến của bạn
                    </span>
                    <form action="" className="bg-gray-200 p-3 relative  rounded-3xl  w-[381px]">
                        <input type="email" placeholder="Email" className="bg-gray-200 ml-3 outline-none w-7/12" />
                        <button className="bg-color-2 absolute py-3 px-4 text-white font-semibold  rounded-3xl top-0 w-5/12">
                            Đăng ký
                        </button>
                    </form>
                    <span className="text-xs">
                        Chúng tôi sẽ không spam, hãy đọc chính sách email của chúng tôi
                    </span>
                    <span className="flex gap-3">
                        <FaFacebook className="w-10 h-10" />
                        <RiInstagramFill className="w-10 h-10" />
                        <AiFillTikTok className="w-10 h-10" />
                        <FaSnapchatGhost className="w-10 h-10" />
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-6 p-4">
                    <div className="flex flex-col gap-3">
                        <span className="font-bold">Trang pháp lý</span>
                        <a href="" className="underline">
                            Điều khoản và điều kiện
                        </a>
                        <a href="" className="underline">
                            Sự riêng tư
                        </a>
                        <a href="" className="underline">
                            Cookies
                        </a>
                        <a href="" className="underline">
                            Tuyên bố về chế độ nô lệ hiện đại
                        </a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-bold">Liên kết quan trọng</span>
                        <a href="" className="underline">
                            Nhận trợ giúp
                        </a>
                        <a href="" className="underline">
                            Thêm nhà hàng của bạn
                        </a>
                        <a href="" className="underline">
                            Đăng ký để giao hàng
                        </a>
                        <a href="" className="underline">
                            Tạo tài khoản doanh nghiệp
                        </a>
                    </div>
                </div>
            </div>
            <div className="px-[70px] bg-[#03081F] text-white flex justify-between py-5">
                <span>Order.YT Bản quyền 2024, Đã đăng ký Bản quyền.</span>
                <div className="flex gap-8">
                    <span>Chính sách bảo mật</span>
                    <span>Điều kiện</span>
                    <span>Giá</span>
                    <span>Không bán hoặc chia sẻ thông tin cá nhân của tôi</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;