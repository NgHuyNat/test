import logo from "../../assets/img/logo1.png"
import girl from "../../assets/img/girl4.png"
import hero from "../../assets/img/hero.png"
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiCheckboxFill } from "react-icons/ri";
import { BiSolidHappyHeartEyes } from "react-icons/bi";
import pizza from "../../assets/img/pizza.jpg"
import burger from "../../assets/img/burger.jpg"
import sushi from "../../assets/img/sushi.jpg"
import do_chay from "../../assets/img/do_chay.jpg"
import KFC from "../../assets/img/KFC.png"
import chef from "../../assets/img/chef.jpg"
import shipper from "../../assets/img/shipper.jpg"
import order from "../../assets/img/order-food.png"
import fast_food from "../../assets/img/fast-food.png"
import check_mark from "../../assets/img/checkmark.png"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

const Home = () => {
    const [activeButton, setActiveButton] = useState(""); // Lưu trạng thái nút được chọn

    // Xử lý khi click vào một nút
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName); // Cập nhật nút được chọn
    };

    const [activeButtonn, setActiveButtonn] = useState("Câu hỏi thường gặp"); // Nút mặc định được chọn

    const [activeTab, setActiveTab] = useState("Câu hỏi thường gặp"); // Tab đang được chọn
    const [selectedQuestion, setSelectedQuestion] = useState("Order.YT hoạt động như thế nào ?");
    const [isTransitioning, setIsTransitioning] = useState(false); // Trạng thái hiệu ứng chuyển đổi nội dung

    // Nội dung tương ứng với các câu hỏi trong tab "Câu hỏi thường gặp"
    const questionContentMapping = {
        "Order.YT hoạt động như thế nào ?": (
            <div>
                <div className="grid grid-cols-3 gap-6 p-3">
                    <div className="flex flex-col gap-3 items-center p-6 h-[285px] bg-[#D9D9D9] rounded-lg">
                        <h4 className="text-sm font-bold">Đặt hàng!</h4>
                        <img src={order} alt="" className="h-[128px]" />
                        <span className="text-sm text-center font-semibold">
                            Đặt hàng thông qua trang web hoặc ứng dụng di động của chúng tôi
                        </span>
                    </div>
                    <div className="flex flex-col gap-3 items-center p-6 h-[285px] bg-[#D9D9D9] rounded-lg">
                        <h4 className="text-sm font-bold">Theo dõi tiến độ</h4>
                        <img src={fast_food} alt="" className="h-[128px]" />
                        <span className="text-sm text-center font-semibold">
                            Bạn có thể theo dõi trạng thái đơn hàng của mình với thời gian giao hàng
                        </span>
                    </div>
                    <div className="flex flex-col gap-3 items-center p-6 h-[285px] bg-[#D9D9D9] rounded-lg">
                        <h4 className="text-sm font-bold">Nhận đơn đặt hàng của bạn!</h4>
                        <img src={check_mark} alt="" className="h-[128px]" />
                        <span className="text-sm text-center font-semibold">
                            Nhận đơn đặt hàng của bạn với tốc độ nhanh chóng!
                        </span>
                    </div>
                </div>
                <div>
                    <span className="flex text-center">
                        Order.YT đơn giản hóa quy trình đặt đồ ăn. Duyệt qua thực đơn đa dạng của chúng tôi, chọn các món
                        ăn yêu thích của bạn và tiến hành thanh toán. Bữa ăn ngon miệng của bạn
                        sẽ đến trước cửa nhà bạn ngay lập tức!
                    </span>
                </div>
            </div>
        ),
        "Những phương thức thanh toán nào được chấp nhận?": (
            <div>
                <h2 className="text-lg font-bold">Những phương thức thanh toán nào được chấp nhận?</h2>
                <p>
                    Chúng tôi chấp nhận nhiều phương thức thanh toán, bao gồm tiền mặt, thẻ tín dụng/thẻ ghi nợ và các ví
                    điện tử như Momo, ZaloPay, và ViettelPay.
                </p>
            </div>
        ),
        "Tôi có thể theo dõi đơn đặt hàng của mình trong thời gian thực không?": (
            <div>
                <h2 className="text-lg font-bold">Tôi có thể theo dõi đơn đặt hàng của mình trong thời gian thực không?</h2>
                <p>
                    Có, bạn có thể theo dõi đơn đặt hàng của mình trong thời gian thực thông qua ứng dụng hoặc trang web
                    của chúng tôi. Thông tin chi tiết về trạng thái đơn hàng sẽ được hiển thị trong tài khoản của bạn.
                </p>
            </div>
        ),
        "Có bất kỳ chương trình giảm giá hoặc khuyến mãi đặc biệt nào không?": (
            <div>
                <h2 className="text-lg font-bold">Có bất kỳ chương trình giảm giá hoặc khuyến mãi đặc biệt nào không?</h2>
                <p>
                    Chúng tôi thường xuyên có các chương trình giảm giá và khuyến mãi đặc biệt. Hãy theo dõi trang web và
                    ứng dụng của chúng tôi để không bỏ lỡ cơ hội tiết kiệm!
                </p>
            </div>
        ),
        "Order.YT có sẵn trong khu vực của tôi không?": (
            <div>
                <h2 className="text-lg font-bold">Order.YT có sẵn trong khu vực của tôi không?</h2>
                <p>
                    Để kiểm tra dịch vụ có sẵn trong khu vực của bạn, vui lòng nhập địa chỉ của bạn vào công cụ kiểm tra
                    trên trang web hoặc ứng dụng của chúng tôi.
                </p>
            </div>
        ),
    };


    // Nội dung tương ứng với từng tab
    const tabContentMapping = {
        "Câu hỏi thường gặp": (
            <div className="flex w-full gap-10">
                <div className="flex w-3/12 flex-col gap-5 pl-6">
                    {Object.keys(questionContentMapping).map((question) => (
                        <button
                            key={question}
                            className={`text-sm font-bold p-3 rounded-3xl transition-all duration-300 ease-in-out ${selectedQuestion === question
                                ? "bg-color-2 border-color-2 text-black shadow-lg transform scale-105"
                                : "bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                            onClick={() => handleQuestionClick(question)}
                        >
                            {question}
                        </button>
                    ))}
                </div>

                {/* Main Content */}
                <div
                    className={`flex flex-col w-9/12 gap-8 p-3 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"
                        }`}
                >
                    {questionContentMapping[selectedQuestion]}
                </div>
            </div>
        ),
        "Chúng tôi là ai ?": (
            <div className="flex flex-col items-center justify-center text-center gap-4 p-6">
                <h2 className="text-2xl font-bold">Chúng tôi là ai?</h2>
                <p className="text-sm text-gray-600">
                    Chúng tôi là một đội ngũ chuyên cung cấp dịch vụ đặt đồ ăn trực tuyến với cam kết mang đến sự tiện
                    lợi, nhanh chóng và chất lượng cho khách hàng.
                </p>
            </div>
        ),
        "Chương trình đối tác": (
            <div className="flex flex-col items-center justify-center text-center gap-4 p-6">
                <h2 className="text-2xl font-bold">Chương trình đối tác</h2>
                <p className="text-sm text-gray-600">
                    Tham gia chương trình đối tác của chúng tôi để mở rộng hoạt động kinh doanh của bạn. Chúng tôi cung
                    cấp các công cụ và hỗ trợ cần thiết để đảm bảo sự phát triển lâu dài.
                </p>
            </div>
        ),
        "Trợ giúp & Hỗ Trợ": (
            <div className="flex flex-col items-center justify-center text-center gap-4 p-6">
                <h2 className="text-2xl font-bold">Trợ giúp & Hỗ Trợ</h2>
                <p className="text-sm text-gray-600">
                    Nếu bạn cần trợ giúp hoặc hỗ trợ, vui lòng liên hệ với chúng tôi qua email hoặc đường dây nóng. Chúng
                    tôi luôn sẵn sàng giúp bạn.
                </p>
            </div>
        ),
    };

    const handleQuestionClick = (question) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setSelectedQuestion(question);
            setIsTransitioning(false);
        }, 300);
    };
    // Xử lý khi click vào các tab chính
    const handleButtonClickk = (tabName) => {
        setActiveTab(tabName);
    };

    const [selectedCategory, setSelectedCategory] = useState("Pizza & Đồ ăn nhanh");

    // Nội dung hiển thị cho từng danh mục
    const categoryContentMapping = {
        "Đồ chay": (
            <div className="grid grid-cols-3 gap-5">
                {Array(3)
                    .fill(null)
                    .map((_, idx) => (
                        <div key={idx} className="relative h-[325px]">
                            <img
                                src={do_chay}
                                alt="Do Chay Image"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-transparent p-4 rounded-lg">
                                <div className="text-white mt-[230px] ml-5">
                                    <p className="text-color-2 text-sm font-semibold">Nhà hàng</p>
                                    <h2 className="text-lg font-bold">Đồ chay</h2>
                                </div>
                                <div className="absolute flex justify-center items-center top-0 right-4 w-[88px] h-[60px] bg-black text-white text-xl font-bold rounded-b-lg">
                                    <span>-40%</span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        ),
        Sushi: (
            <div className="grid grid-cols-3 gap-5">
                {Array(3)
                    .fill(null)
                    .map((_, idx) => (
                        <div key={idx} className="relative h-[325px]">
                            <img
                                src={sushi}
                                alt="Sushi Image"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-transparent p-4 rounded-lg">
                                <div className="text-white mt-[230px] ml-5">
                                    <p className="text-color-2 text-sm font-semibold">Nhà hàng</p>
                                    <h2 className="text-lg font-bold">Sushi</h2>
                                </div>
                                <div className="absolute flex justify-center items-center top-0 right-4 w-[88px] h-[60px] bg-black text-white text-xl font-bold rounded-b-lg">
                                    <span>-40%</span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        ),
        "Pizza & Đồ ăn nhanh": (
            <div className="grid grid-cols-3 gap-5">
                {Array(3)
                    .fill(null)
                    .map((_, idx) => (
                        <div key={idx} className="relative h-[325px]">
                            <img
                                src={pizza}
                                alt="Pizza Image"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-transparent p-4 rounded-lg">
                                <div className="text-white mt-[230px] ml-5">
                                    <p className="text-color-2 text-sm font-semibold">Nhà hàng</p>
                                    <h2 className="text-lg font-bold">Pizza Hut</h2>
                                </div>
                                <div className="absolute flex justify-center items-center top-0 right-4 w-[88px] h-[60px] bg-black text-white text-xl font-bold rounded-b-lg">
                                    <span>-40%</span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        ),
        Khác: (
            <div className="flex justify-center items-center h-[325px]">
                <p className="text-lg font-bold">Nội dung chưa được cập nhật</p>
            </div>
        ),
    };

    return (
        <div className="px-[70px]">
            <Swiper navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
            }}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{
                    delay: 3000, // Tự động chuyển sau 3 giây
                    disableOnInteraction: false,
                }}
                className="mySwiper" >
                <SwiperSlide>
                    <div className="grid grid-cols-2 bg-[#FBFBFB] h-[610px] border-solid border-2  shadow-sm rounded-md">
                        <div className="flex flex-col gap-1 mt-[153px] px-16">
                            <h2 className="underline">Đặt món ăn tại nhà hàng, đồ ăn mang đi và đồ tạp hóa</h2>
                            <h2 className="text-5xl leading-[55px] font-medium">Thưởng thức các giác quan của bạn,nhanh
                                <h2 className="text-color-2">chóng và tươi mới</h2></h2>
                            <form action="" className="flex relative justify-between mt-10 p-[7px] w-[300px] items-center border-gray-400 border-2 border-solid rounded-3xl">
                                <input type="text" placeholder="Tìm kiếm" className="bg-[#FBFBFB] ml-4 outline-none" />
                                <button className="text-nowrap absolute left-40 h-[42px] bg-color-2 p-[7px] rounded-3xl w-[150px] text-md font-medium text-white">
                                    Tìm kiếm
                                </button>
                            </form>
                        </div>

                        <div className="relative z-10  rounded-r-lg rounded-tl-[300px] h-[550px]  mt-14 bg-color-2">
                            <img src={girl} alt="" className="absolute max-w-[900px] h-[537px] z-10 right-[21rem] top-[14px]" />
                            <div className="mt-[97px]">
                                <img src={hero} alt="" className="relative object-cover h-[455px] w-[377px]" />
                                <div className="absolute z-0 p-2 rounded-xl space-y-1 w-[450px] h-[100px] bg-white top-[42px] left-[10rem]">
                                    <div className="flex justify-between">
                                        <img src={logo} alt="" className="h-6" />
                                        <span className="text-gray-400">bây giờ</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <h3>Chúng tôi đã nhận được đơn đặt hàng của bạn</h3>
                                            <FaMapMarkerAlt className="text-red-600" />
                                        </div>
                                        <span className="text-gray-700">Đang chờ nhà hàng chấp nhận</span>
                                    </div>
                                </div>

                                <div className="absolute z-0 p-2 rounded-xl space-y-1 w-[380px] h-[100px] bg-white top-[214px] left-[18rem]">
                                    <div className="flex justify-between">
                                        <img src={logo} alt="" className="h-6" />
                                        <span className="text-gray-400">bây giờ</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <h3>Đơn hàng được chấp nhận!</h3>
                                            <RiCheckboxFill className="text-green-600" />
                                        </div>
                                        <span className="text-gray-700">
                                            Đơn hàng của bạn sẽ sớm được giao</span>
                                    </div>
                                </div>

                                <div className="absolute z-0 p-2 rounded-xl space-y-1 w-[350px] h-[100px] bg-white top-[384px] left-[14rem]">
                                    <div className="flex justify-between">
                                        <img src={logo} alt="" className="h-6" />
                                        <span className="text-gray-400">bây giờ</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <h3>Tài xế của bạn đang ở gần đây</h3>
                                            <BiSolidHappyHeartEyes className="text-pink-500" />
                                        </div>
                                        <span className="text-gray-700">Họ gần đến rồi - hãy sẵn sàng</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-2 bg-[#FBFBFB] h-[610px] border-solid border-2  shadow-sm rounded-md">
                        <div className="flex flex-col gap-1 mt-[153px] px-16">
                            <h2 className="underline">Đặt món ăn tại nhà hàng, đồ ăn mang đi và đồ tạp hóa</h2>
                            <h2 className="text-5xl leading-[55px] font-medium">Thưởng thức các giác quan của bạn,nhanh
                                <h2 className="text-color-2">chóng và tươi mới</h2></h2>
                            <form action="" className="flex relative justify-between mt-10 p-[7px] w-[300px] items-center border-gray-400 border-2 border-solid rounded-3xl">
                                <input type="text" placeholder="Tìm kiếm" className="bg-[#FBFBFB] ml-4 outline-none" />
                                <button className="text-nowrap absolute left-40 h-[42px] bg-color-2 p-[7px] rounded-3xl w-[150px] text-md font-medium text-white">
                                    Tìm kiếm
                                </button>
                            </form>
                        </div>

                        <div className="relative z-10  rounded-r-lg rounded-tl-[300px] h-[550px]  mt-14 bg-color-2">
                            <img src={girl} alt="" className="absolute max-w-[900px] h-[537px] z-10 right-[21rem] top-[14px]" />
                            <div className="mt-[97px]">
                                <img src={hero} alt="" className="relative object-cover h-[455px] w-[377px]" />
                                <div className="absolute z-0 p-2 rounded-xl space-y-1 w-[450px] h-[100px] bg-white top-[42px] left-[10rem]">
                                    <div className="flex justify-between">
                                        <img src={logo} alt="" className="h-6" />
                                        <span className="text-gray-400">bây giờ</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <h3>Chúng tôi đã nhận được đơn đặt hàng của bạn</h3>
                                            <FaMapMarkerAlt className="text-red-600" />
                                        </div>
                                        <span className="text-gray-700">Đang chờ nhà hàng chấp nhận</span>
                                    </div>
                                </div>

                                <div className="absolute z-0 p-2 rounded-xl space-y-1 w-[380px] h-[100px] bg-white top-[214px] left-[18rem]">
                                    <div className="flex justify-between">
                                        <img src={logo} alt="" className="h-6" />
                                        <span className="text-gray-400">bây giờ</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <h3>Đơn hàng được chấp nhận!</h3>
                                            <RiCheckboxFill className="text-green-600" />
                                        </div>
                                        <span className="text-gray-700">
                                            Đơn hàng của bạn sẽ sớm được giao</span>
                                    </div>
                                </div>

                                <div className="absolute z-0 p-2 rounded-xl space-y-1 w-[350px] h-[100px] bg-white top-[384px] left-[14rem]">
                                    <div className="flex justify-between">
                                        <img src={logo} alt="" className="h-6" />
                                        <span className="text-gray-400">bây giờ</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <h3>Tài xế của bạn đang ở gần đây</h3>
                                            <BiSolidHappyHeartEyes className="text-pink-500" />
                                        </div>
                                        <span className="text-gray-700">Họ gần đến rồi - hãy sẵn sàng</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-2 bg-[#FBFBFB] h-[610px] border-solid border-2  shadow-sm rounded-md">
                        <div className="flex flex-col gap-1 mt-[153px] px-16">
                            <h2 className="underline">Đặt món ăn tại nhà hàng, đồ ăn mang đi và đồ tạp hóa</h2>
                            <h2 className="text-5xl leading-[55px] font-medium">Thưởng thức các giác quan của bạn,nhanh
                                <h2 className="text-color-2">chóng và tươi mới</h2></h2>
                            <form action="" className="flex relative justify-between mt-10 p-[7px] w-[300px] items-center border-gray-400 border-2 border-solid rounded-3xl">
                                <input type="text" placeholder="Tìm kiếm" className="bg-[#FBFBFB] ml-4 outline-none" />
                                <button className="text-nowrap absolute left-40 h-[42px] bg-color-2 p-[7px] rounded-3xl w-[150px] text-md font-medium text-white">
                                    Tìm kiếm
                                </button>
                            </form>
                        </div>

                        <div className="relative z-10  rounded-r-lg rounded-tl-[300px] h-[550px]  mt-14 bg-color-2">
                            <img src={girl} alt="" className="absolute max-w-[900px] h-[537px] z-10 right-[21rem] top-[14px]" />
                            <div className="mt-[97px]">
                                <img src={hero} alt="" className="relative object-cover h-[455px] w-[377px]" />
                                <div className="absolute z-0 p-2 rounded-xl space-y-1 w-[450px] h-[100px] bg-white top-[42px] left-[10rem]">
                                    <div className="flex justify-between">
                                        <img src={logo} alt="" className="h-6" />
                                        <span className="text-gray-400">bây giờ</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <h3>Chúng tôi đã nhận được đơn đặt hàng của bạn</h3>
                                            <FaMapMarkerAlt className="text-red-600" />
                                        </div>
                                        <span className="text-gray-700">Đang chờ nhà hàng chấp nhận</span>
                                    </div>
                                </div>

                                <div className="absolute z-0 p-2 rounded-xl space-y-1 w-[380px] h-[100px] bg-white top-[214px] left-[18rem]">
                                    <div className="flex justify-between">
                                        <img src={logo} alt="" className="h-6" />
                                        <span className="text-gray-400">bây giờ</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <h3>Đơn hàng được chấp nhận!</h3>
                                            <RiCheckboxFill className="text-green-600" />
                                        </div>
                                        <span className="text-gray-700">
                                            Đơn hàng của bạn sẽ sớm được giao</span>
                                    </div>
                                </div>

                                <div className="absolute z-0 p-2 rounded-xl space-y-1 w-[350px] h-[100px] bg-white top-[384px] left-[14rem]">
                                    <div className="flex justify-between">
                                        <img src={logo} alt="" className="h-6" />
                                        <span className="text-gray-400">bây giờ</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <h3>Tài xế của bạn đang ở gần đây</h3>
                                            <BiSolidHappyHeartEyes className="text-pink-500" />
                                        </div>
                                        <span className="text-gray-700">Họ gần đến rồi - hãy sẵn sàng</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div>
                <div className="flex justify-between items-center p-9">
                    <span className="text-2xl font-bold">Lên tới -40% 🎊 Ưu đãi độc quyền của Order YT</span>
                    <div>
                        <div className="flex justify-between items-center gap-[60px]">
                            {Object.keys(categoryContentMapping).map((category) => (
                                <button
                                    key={category}
                                    className={`p-3 rounded-3xl transition-all duration-300 ease-in-out ${selectedCategory === category
                                        ? "border-color-2 border-solid border-[1px] text-color-2"
                                        : "hover:bg-gray-100 hover:text-gray-700"
                                        }`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    <span>{category}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <div className="grid grid-cols-3 gap-5">
                    <div className="relative  h-[325px]">
                        <img
                            src={pizza}
                            alt="Pizza Image"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-transparent p-4 rounded-lg">
                            <div className="text-white mt-[230px] ml-5">
                                <p className="text-color-2 text-sm font-semibold">Nhà hàng</p>
                                <h2 className="text-lg font-bold">Pizza Hut</h2>
                            </div>
                            <div className="absolute flex justify-center items-center top-0 right-4 w-[88px] h-[60px] bg-black text-white text-xl font-bold  rounded-b-lg">
                                <span>-40%</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative  h-[325px]">
                        <img
                            src={pizza}
                            alt="Pizza Image"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-transparent p-4 rounded-lg">
                            <div className="text-white mt-[230px] ml-5">
                                <p className="text-color-2 text-sm font-semibold">Nhà hàng</p>
                                <h2 className="text-lg font-bold">Pizza Hut</h2>
                            </div>
                            <div className="absolute flex justify-center items-center top-0 right-4 w-[88px] h-[60px] bg-black text-white text-xl font-bold  rounded-b-lg">
                                <span>-40%</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative  h-[325px]">
                        <img
                            src={pizza}
                            alt="Pizza Image"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-transparent p-4 rounded-lg">
                            <div className="text-white mt-[230px] ml-5">
                                <p className="text-color-2 text-sm font-semibold">Nhà hàng</p>
                                <h2 className="text-lg font-bold">Pizza Hut</h2>
                            </div>
                            <div className="absolute flex justify-center items-center top-0 right-4 w-[88px] h-[60px] bg-black text-white text-xl font-bold  rounded-b-lg">
                                <span>-40%</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative  h-[325px]">
                        <img
                            src={sushi}
                            alt="sushi Image"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-transparent p-4 rounded-lg">
                            <div className="text-white mt-[230px] ml-5">
                                <p className="text-color-2 text-sm font-semibold">Nhà hàng</p>
                                <h2 className="text-lg font-bold">Sushi</h2>
                            </div>
                            <div className="absolute flex justify-center items-center top-0 right-4 w-[88px] h-[60px] bg-black text-white text-xl font-bold  rounded-b-lg">
                                <span>-40%</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative  h-[325px]">
                        <img
                            src={sushi}
                            alt="sushi Image"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-transparent p-4 rounded-lg">
                            <div className="text-white mt-[230px] ml-5">
                                <p className="text-color-2 text-sm font-semibold">Nhà hàng</p>
                                <h2 className="text-lg font-bold">Sushi</h2>
                            </div>
                            <div className="absolute flex justify-center items-center top-0 right-4 w-[88px] h-[60px] bg-black text-white text-xl font-bold  rounded-b-lg">
                                <span>-40%</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative  h-[325px]">
                        <img
                            src={sushi}
                            alt="sushi Image"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-transparent p-4 rounded-lg">
                            <div className="text-white mt-[230px] ml-5">
                                <p className="text-color-2 text-sm font-semibold">Nhà hàng</p>
                                <h2 className="text-lg font-bold">Sushi</h2>
                            </div>
                            <div className="absolute flex justify-center items-center top-0 right-4 w-[88px] h-[60px] bg-black text-white text-xl font-bold  rounded-b-lg">
                                <span>-40%</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative  h-[325px]">
                        <img
                            src={do_chay}
                            alt="do_chay Image"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-transparent p-4 rounded-lg">
                            <div className="text-white mt-[230px] ml-5">
                                <p className="text-color-2 text-sm font-semibold">Nhà hàng</p>
                                <h2 className="text-lg font-bold">Đồ chay</h2>
                            </div>
                            <div className="absolute flex justify-center items-center top-0 right-4 w-[88px] h-[60px] bg-black text-white text-xl font-bold  rounded-b-lg">
                                <span>-40%</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative  h-[325px]">
                        <img
                            src={do_chay}
                            alt="do_chay Image"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-transparent p-4 rounded-lg">
                            <div className="text-white mt-[230px] ml-5">
                                <p className="text-color-2 text-sm font-semibold">Nhà hàng</p>
                                <h2 className="text-lg font-bold">Đồ chay</h2>
                            </div>
                            <div className="absolute flex justify-center items-center top-0 right-4 w-[88px] h-[60px] bg-black text-white text-xl font-bold  rounded-b-lg">
                                <span>-40%</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative  h-[325px]">
                        <img
                            src={do_chay}
                            alt="do_chay Image"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-transparent p-4 rounded-lg">
                            <div className="text-white mt-[230px] ml-5">
                                <p className="text-color-2 text-sm font-semibold">Nhà hàng</p>
                                <h2 className="text-lg font-bold">Đồ chay</h2>
                            </div>
                            <div className="absolute flex justify-center items-center top-0 right-4 w-[88px] h-[60px] bg-black text-white text-xl font-bold  rounded-b-lg">
                                <span>-40%</span>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* Category Content */}
                <div>{categoryContentMapping[selectedCategory]}</div>
            </div>

            <div>
                <div className="flex justify-between items-center p-9">
                    <span className="text-2xl font-bold">Order YT Danh mục phổ biến 🤩</span>
                </div>
                <div className="grid grid-cols-6 gap-5">
                    <div className="h-[266px] border-solid border-gray-200 border-2 rounded-xl shadow-sm">
                        <img
                            src={burger}
                            alt="burger Image"
                            className="w-full  h-[203px] object-cover  rounded-t-lg"
                        />
                        <div className=" ">
                            <div className="bg-[#FBFBFB]  rounded-b-lg mt-1 ml-3">
                                <p className="text-black text-md font-semibold">Burgers & Đồ ăn nhanh</p>
                                <h2 className="text-color-2 text-sm font-bold">21 Nhà hàng</h2>
                            </div>
                        </div>
                    </div>
                    <div className="h-[266px] border-solid border-gray-200 border-2 rounded-xl shadow-sm">
                        <img
                            src={burger}
                            alt="burger Image"
                            className="w-full  h-[203px] object-cover  rounded-t-lg"
                        />
                        <div className=" ">
                            <div className="bg-[#FBFBFB]  rounded-b-lg mt-1 ml-3">
                                <p className="text-black text-md font-semibold">Burgers & Đồ ăn nhanh</p>
                                <h2 className="text-color-2 text-sm font-bold">21 Nhà hàng</h2>
                            </div>
                        </div>
                    </div>
                    <div className="h-[266px] border-solid border-gray-200 border-2 rounded-xl shadow-sm">
                        <img
                            src={burger}
                            alt="burger Image"
                            className="w-full  h-[203px] object-cover  rounded-t-lg"
                        />
                        <div className=" ">
                            <div className="bg-[#FBFBFB]  rounded-b-lg mt-1 ml-3">
                                <p className="text-black text-md font-semibold">Burgers & Đồ ăn nhanh</p>
                                <h2 className="text-color-2 text-sm font-bold">21 Nhà hàng</h2>
                            </div>
                        </div>
                    </div>
                    <div className="h-[266px] border-solid border-gray-200 border-2 rounded-xl shadow-sm">
                        <img
                            src={burger}
                            alt="burger Image"
                            className="w-full  h-[203px] object-cover  rounded-t-lg"
                        />
                        <div className=" ">
                            <div className="bg-[#FBFBFB]  rounded-b-lg mt-1 ml-3">
                                <p className="text-black text-md font-semibold">Burgers & Đồ ăn nhanh</p>
                                <h2 className="text-color-2 text-sm font-bold">21 Nhà hàng</h2>
                            </div>
                        </div>
                    </div>
                    <div className="h-[266px] border-solid border-gray-200 border-2 rounded-xl shadow-sm">
                        <img
                            src={burger}
                            alt="burger Image"
                            className="w-full  h-[203px] object-cover  rounded-t-lg"
                        />
                        <div className=" ">
                            <div className="bg-[#FBFBFB]  rounded-b-lg mt-1 ml-3">
                                <p className="text-black text-md font-semibold">Burgers & Đồ ăn nhanh</p>
                                <h2 className="text-color-2 text-sm font-bold">21 Nhà hàng</h2>
                            </div>
                        </div>
                    </div>
                    <div className="h-[266px] border-solid border-gray-200 border-2 rounded-xl shadow-sm">
                        <img
                            src={burger}
                            alt="burger Image"
                            className="w-full  h-[203px] object-cover  rounded-t-lg"
                        />
                        <div className=" ">
                            <div className="bg-[#FBFBFB]  rounded-b-lg mt-1 ml-3">
                                <p className="text-black text-md font-semibold">Burgers & Đồ ăn nhanh</p>
                                <h2 className="text-color-2 text-sm font-bold">21 Nhà hàng</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className="flex justify-between items-center p-9">
                    <span className="text-2xl font-bold">
                        Nhà hàng nổi tiếng</span>
                </div>
                <div className="grid grid-cols-6 gap-5">
                    <div className="h-[266px] bg-color-2 border-solid border-gray-200 border-2 rounded-xl shadow-sm">
                        <img
                            src={KFC}
                            alt="burger Image"
                            className="w-full p-4 bg-color-3 h-[203px] rounded-t-lg"
                        />
                        <div className="h-full">
                            <div className="rounded-b-lg mt-4">
                                <p className="text-white text-center text-md font-semibold">KFC Việt Nam</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[266px] border-solid border-gray-200 border-2 rounded-xl shadow-sm">
                        <img
                            src={KFC}
                            alt="burger Image"
                            className="w-full p-4 bg-rgb(228 4 44) h-[203px] object-cover  rounded-t-lg"
                        />
                        <div className=" ">
                            <div className="bg-[#FBFBFB]  rounded-b-lg mt-1 ml-3">
                                <p className="text-black text-md font-semibold">Burgers & Đồ ăn nhanh</p>
                                <h2 className="text-color-2 text-sm font-bold">21 Nhà hàng</h2>
                            </div>
                        </div>
                    </div>
                    <div className="h-[266px] border-solid border-gray-200 border-2 rounded-xl shadow-sm">
                        <img
                            src={KFC}
                            alt="burger Image"
                            className="w-full p-4 bg-rgb(228 4 44) h-[203px] object-cover  rounded-t-lg"
                        />
                        <div className=" ">
                            <div className="bg-[#FBFBFB]  rounded-b-lg mt-1 ml-3">
                                <p className="text-black text-md font-semibold">Burgers & Đồ ăn nhanh</p>
                                <h2 className="text-color-2 text-sm font-bold">21 Nhà hàng</h2>
                            </div>
                        </div>
                    </div>
                    <div className="h-[266px] border-solid border-gray-200 border-2 rounded-xl shadow-sm">
                        <img
                            src={KFC}
                            alt="burger Image"
                            className="w-full p-4 bg-rgb(228 4 44) h-[203px] object-cover  rounded-t-lg"
                        />
                        <div className=" ">
                            <div className="bg-[#FBFBFB]  rounded-b-lg mt-1 ml-3">
                                <p className="text-black text-md font-semibold">Burgers & Đồ ăn nhanh</p>
                                <h2 className="text-color-2 text-sm font-bold">21 Nhà hàng</h2>
                            </div>
                        </div>
                    </div>
                    <div className="h-[266px] border-solid border-gray-200 border-2 rounded-xl shadow-sm">
                        <img
                            src={KFC}
                            alt="burger Image"
                            className="w-full p-4 bg-rgb(228 4 44) h-[203px] object-cover  rounded-t-lg"
                        />
                        <div className=" ">
                            <div className="bg-[#FBFBFB]  rounded-b-lg mt-1 ml-3">
                                <p className="text-black text-md font-semibold">Burgers & Đồ ăn nhanh</p>
                                <h2 className="text-color-2 text-sm font-bold">21 Nhà hàng</h2>
                            </div>
                        </div>
                    </div>
                    <div className="h-[266px] border-solid border-gray-200 border-2 rounded-xl shadow-sm">
                        <img
                            src={KFC}
                            alt="burger Image"
                            className="w-full p-4 bg-rgb(228 4 44) h-[203px] object-cover  rounded-t-lg"
                        />
                        <div className=" ">
                            <div className="bg-[#FBFBFB]  rounded-b-lg mt-1 ml-3">
                                <p className="text-black text-md font-semibold">Burgers & Đồ ăn nhanh</p>
                                <h2 className="text-color-2 text-sm font-bold">21 Nhà hàng</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 py-10">
                <div className="relative  h-[425px]">
                    <img
                        src={chef}
                        alt="chef Image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-0 left-2 w-full h-full bg-gradient-to-tr from-transparent to-transparent p-3 rounded-lg">
                        <div className="text-white mt-[255px] ">
                            <p className="text-color-2 text-md font-bold">Đăng ký với tư cách là doanh nghiệp</p>
                            <h2 className="text-3xl font-extrabold">Hợp tác với chúng tôi</h2>
                            <button className="mt-6 h-[42px] bg-color-2 p-[7px] rounded-3xl w-[150px] text-lg font-medium text-white">Bắt đầu</button>
                        </div>
                        <div className="absolute flex justify-center items-center top-0 left-2 w-[270px] p-3 h-[60px] bg-white text-black text-xl font-bold  rounded-b-lg">
                            <span>
                                Kiếm được nhiều tiền hơn với mức phí thấp hơn</span>
                        </div>
                    </div>
                </div>
                <div className="relative  h-[425px]">
                    <img
                        src={shipper}
                        alt="shipper Image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-transparent p-3 rounded-lg">
                        <div className="text-white mt-[255px] ml-2">
                            <p className="text-color-2 text-md font-bold">Đăng ký làm người lái</p>
                            <h2 className="text-3xl font-extrabold">Đi cùng chúng tôi</h2>
                            <button className="mt-6 h-[42px] bg-color-2 p-[7px] rounded-3xl w-[150px] text-lg font-medium text-white">Bắt đầu</button>
                        </div>
                        <div className="absolute flex ml-2 justify-center items-center top-0 left-2 w-[270px] p-3 h-[60px] bg-white text-black text-xl font-bold  rounded-b-lg">
                            <span>
                                Tận dụng các đặc quyền độc quyền</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#EFEEEE] pt-10 pb-[150px] px-24 rounded-lg">
                <div className="flex justify-between py-8">
                    <h2 className="text-2xl font-extrabold">
                        Biết thêm về chúng tôi!
                    </h2>

                    {/* Tabs */}
                    <div className="flex justify-between items-center gap-6">
                        {Object.keys(tabContentMapping).map((tabName) => (
                            <button
                                key={tabName}
                                className={`rounded-3xl px-7 py-3 transition-all duration-500 ease-in-out transform ${activeTab === tabName
                                    ? "border-color-2 border-2 text-black shadow-lg scale-105"
                                    : "hover:bg-gray-100 hover:text-gray-700"
                                    }`}
                                onClick={() => handleButtonClickk(tabName)}
                            >
                                <span className="text-sm font-bold">{tabName}</span>
                            </button>
                        ))}
                    </div>
                </div>
                {/* Main Content */}
                <div className="bg-white  py-16 rounded-lg">
                    {tabContentMapping[activeTab]}
                </div>
            </div>
            <div className="flex justify-around bg-color-2 rounded-lg mt-3 mb-8 p-3">
                <div className="flex flex-col px-28 items-center text-6xl border-r-[1px] text-white ">
                    <span>546+</span>
                    <span className="text-xl">Người lái xe đã đăng ký</span>
                </div>
                <div className="flex flex-col px-28 items-center text-6xl border-r-[1px] text-white ">
                    <span>789,900+</span>
                    <span className="text-xl">Đơn hàng được giao</span>
                </div>
                <div className="flex flex-col px-28 items-center text-6xl border-r-[1px] border-transparent text-white ">
                    <span>690+</span>
                    <span className="text-xl">Nhà hàng hợp tác</span>
                </div>
            </div>
        </div>
    );
}

export default Home;