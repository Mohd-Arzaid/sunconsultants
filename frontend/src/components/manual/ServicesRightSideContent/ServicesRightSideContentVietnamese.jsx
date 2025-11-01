import {
  AlignLeft,
  ArrowRightIcon,
  Languages,
  Phone,
  User,
  Mail,
  PhoneCall,
  SendHorizontal,
  MessageCircle,
  Shield,
  Clock,
  Award,
  HeartHandshake,
  Lightbulb,
  BarChart,
} from "lucide-react";
import { Button } from "../../ui/button";
import { useState } from "react";
import axios from "axios";
// import { toast } from "sonner";
import { ClockLoader } from "react-spinners";
import { toast } from "@/hooks/use-toast";
import { Link, useLocation } from "react-router-dom";
import { Marquee } from "@/components/magicui/marquee";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const ServicesRightSideContentVietnamese = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const showComponentsPaths = [
    "/what-is-crs-bis-or-crs-registration",
    "/chung-nhan-bis-tai-viet-nam",
    "/vi/crs-bis-la-gi-hoac-dang-ky-crs",
    "/vi/chung-nhan-bis-isi-mark",

    // BIS CERTIFICATION PATH
    "/vi/chung-chi-bis-la-gi-bis-an-do",

  ];

  // Check if current path should show these components
  const shouldShowComponents = showComponentsPaths.includes(currentPath);

  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px]">
      {/* BIS QCO UPDATES - Services Right Side Content*/}
      {shouldShowComponents && (
        <BISQCOUpdatesServicesRightSideContentVietnamese />
      )}
      {/* Client Testimonial - Services Right Side Content*/}
      <ClientTestimonialServicesRightSideContentVietnamese />
      {/* Why Choose Us - Services Right Side Content*/}
      <WhyChooseUsServicesRightSideContentVietnamese />
      {/* Contact Form - Services Right Side Content*/}
      <ContactFormServicesRightSideContentVietnamese />
    </div>
  );
};

export default ServicesRightSideContentVietnamese;

const BISQCOUpdatesServicesRightSideContentVietnamese = () => {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Chứng nhận BIS cho ghế làm việc",
      url: "/bis-qco-updates/bis-certificate-for-work-chairs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Chứng nhận BIS cho ghế và ghế đẩu",
      url: "/bis-qco-updates/bis-certificate-for-chairs-and-stools",
    },
    {
      image:
        "https://globalomega.com/wp-content/uploads/WhatsApp-Image-2023-11-22-at-16.08.01-1-300x300.jpeg",
      title: "Thông báo BIS cho bàn và bàn làm việc",
      url: "/bis-qco-updates/bis-certificate-for-tables-and-desks",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-storage-units.png",
      title: "Thông báo BIS cho tủ lưu trữ",
      url: "/bis-qco-updates/bis-certificate-for-storage-units",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-bunk-beds.png",
      title: "Thông báo BIS cho giường tầng",
      url: "/bis-qco-updates/bis-certificate-for-bunk-beds",
    },
    {
      image:
        "https://jharkhandstatenews.com/assets/admin/uploads/topstory_img/199879_1693229978.jpg",
      title: "Thông báo BIS cho cáp DC năng lượng mặt trời và cáp chống cháy",
      url: "/bis-qco-updates/bis-certificate-for-solar-dc-cable-and-fire-survival-cable",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420886415/LD/HF/LZ/65909740/bis-certification-for-aluminium-alloy-forging-stock-and-forgings-alloy-24345.jpg",
      title:
        "Thông báo BIS cho nhôm rèn và hợp kim nhôm, phôi rèn và sản phẩm rèn",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloys-forging-stock-and-forgings",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Thông báo BIS cho axit H",
      url: "/bis-qco-updates/bis-certificate-for-h-acid",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Thông báo BIS cho axit K",
      url: "/bis-qco-updates/bis-certificate-for-k-acid",
    },
    {
      image:
        "https://media.istockphoto.com/id/940248330/photo/potassium-permanganate-sodium-sulfate-mixture.jpg?s=612x612&w=0&k=20&c=lhxvzbD2cVVOJKQyLIOqSaq9dlJTtDH07kHoBT5q7_4=",
      title: "Thông báo BIS cho vinyl sulfon",
      url: "/bis-qco-updates/bis-certificate-for-vinyl-sulphone",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71qI8OoNdtL._AC_UF1000,1000_QL80_.jpg",
      title: "Thông báo BIS cho bộ kích điện hàng rào",
      url: "/bis-qco-updates/bis-certificate-for-electric-fence-energizers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Thông báo BIS cho máy giặt",
      url: "/bis-qco-updates/bis-certificate-for-clothes-washing-machines",
    },
    {
      image: "https://m.media-amazon.com/images/I/31waXELONZL.jpg",
      title: "Thông báo BIS cho tấm thạch cao",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61pOnpX8BpL._AC_UF1000,1000_QL80_.jpg",
      title:
        "Thông báo BIS cho ống hợp kim nhôm cho mục đích tưới tiêu - ống hàn",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tubes-for-irrigation-purposes-welded-tubes",
    },
    {
      image: "https://www.sunnysteel.com/img/extruded-finned-tube.jpg",
      title:
        "Thông báo BIS cho ống hợp kim nhôm cho mục đích tưới tiêu – ống ép",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tube-for-irrigation-purposes-extruded-tube",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVrUUdi1q8ZFnBqvx3vW5Ac03cUtUwR7N_A&s",
      title:
        "Thông báo BIS cho thanh nhôm cấp EC được sản xuất bằng đúc liên tục và cán",
      url: "/bis-qco-updates/bis-certificate-for-ec-grade-aluminium-rod-produced-by-continuous-casting-and-rolling",
    },
    {
      image:
        "https://vincular.in/wp-content/uploads/2024/11/304.-Quality-Control-Order-on-Wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections-For-General-Engineering-Purposes.png",
      title: "Thông báo BIS cho thanh, cần và phần nhôm rèn và hợp kim nhôm",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/EC/HR/GU/184505254/regular-gypsum-plasterboard.jpg",
      title: "Thông báo BIS cho tấm thạch cao",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
  ];

  return (
    <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="flex gap-2 items-center">
        <AlignLeft className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          Cập nhật BIS QCO
        </div>
      </div>
      <div className="relative h-[400px] overflow-hidden mt-5">
        <Marquee vertical pauseOnHover={true} className="[--duration:20s]">
          {blogPosts.map((post, index) => (
            <div key={index} className="mb-5">
              <div className="group flex gap-4 transition-all duration-300 h-20">
                {/* Image Container - Fixed width and height */}
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg";
                    }}
                  />
                </div>

                {/* Content Container - Flexible with consistent structure */}
                <div className="flex-1 flex flex-col justify-between h-20 py-1">
                  {/* Title - Takes available space but with consistent line clamping */}
                  <div className="flex-1">
                    <p className="line-clamp-2 font-geist text-sm font-normal text-zinc-900 leading-tight">
                      {post.title}
                    </p>
                  </div>

                  {/* Read More Button - Always at bottom */}
                  <div className="flex-shrink-0">
                    <Link to={post.url}>
                      <Button
                        variant="link"
                        className="text-blue-900 font-geist hover:text-blue-950 p-0 h-auto font-normal text-sm"
                      >
                        Đọc thêm
                        <ArrowRightIcon className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Separator - consistent spacing */}
              {index < blogPosts.length - 1 && (
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </div>
          ))}
        </Marquee>
      </div>

      {/* View More Button */}
      <div className="mt-5 w-full flex justify-center">
        <Link to="/bis-qco-updates" className="w-full">
          <Button
            variant="outline"
            className="font-geist w-full bg-[#212126] hover:bg-[#212126]/90 text-white border-gray-300 hover:bg-gray-100"
          >
            Xem tất cả cập nhật
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const ClientTestimonialServicesRightSideContentVietnamese = () => {
  const testimonials = [
    {
      name: "Cô Eliyawati",
      role: "PT Quty Karunia, Người giữ giấy phép BIS tại Việt Nam",
      content:
        "Sun Certifications India cung cấp dịch vụ chứng nhận BIS xuất sắc. Dịch vụ không thể so sánh và sự chân thành của họ đã giành được lòng tin của chúng tôi. Một trong những tư vấn viên BIS tốt nhất tại Ấn Độ!",
    },
    {
      name: "Cô Belle",
      role: "Thantawan Industries Ltd, Người giữ giấy phép BIS tại Thái Lan",
      content:
        "Sun Certifications India đã hỗ trợ chúng tôi trong suốt quá trình chứng nhận BIS. Dịch vụ khách hàng phản hồi nhanh và tính đúng giờ của họ là đặc biệt. Được khuyến nghị cao cho chứng nhận BIS không rắc rối.",
    },
    {
      name: "Cô Jun Min Sim",
      role: "Leaderart Industries, Người giữ giấy phép BIS tại Malaysia",
      content:
        "Sun Certifications India đã giúp chúng tôi có được Chứng nhận BIS, tăng gấp đôi sự tham gia của chúng tôi tại Ấn Độ. Dịch vụ của họ nhanh chóng, chính thống và cập nhật với các tiêu chuẩn BIS mới nhất.",
    },
    {
      name: "Cô Fatima",
      role: "Aluminium Bahrain (ALBA), Người giữ giấy phép BIS tại Bahrain",
      content:
        "Hỗ trợ chứng nhận BIS xuất sắc, các tư vấn viên rất đáng tin cậy.",
    },
    {
      name: "Anh Yousef",
      role: "Bahrain Aluminium Manufacturing Company, Người giữ giấy phép BIS tại Bahrain",
      content: "Quá trình đăng ký BIS suôn sẻ với các tư vấn viên chuyên gia.",
    },
    {
      name: "Anh Satoshi",
      role: "Daiki Aluminium Japan, Người giữ giấy phép BIS tại Nhật Bản",
      content: "Hỗ trợ giấy phép BIS hiệu quả, các tư vấn viên tuyệt vời.",
    },
    {
      name: "Cô Amanda",
      role: "Honeywell, Người giữ giấy phép BIS tại Hoa Kỳ",
      content: "Hướng dẫn chứng chỉ BIS chuyên nghiệp, rất hài lòng.",
    },
    {
      name: "Cô Amanda",
      role: "Trimble Navigation, Người giữ giấy phép BIS tại Hoa Kỳ",
      content: "Hỗ trợ chứng nhận và đăng ký BIS suôn sẻ.",
    },
    {
      name: "Cô Martina",
      role: "Remsa Italia, Người giữ giấy phép BIS tại Ý",
      content:
        "Các tư vấn viên BIS hữu ích, quá trình cấp phép được đơn giản hóa.",
    },
    {
      name: "Cô Nikola",
      role: "Aquazzura, Người giữ giấy phép BIS tại Ý",
      content:
        "Chúng tôi đã có được chứng chỉ BIS đúng thời hạn và với giá cả phải chăng, công việc tuyệt vời đội ngũ Sun!",
    },
    {
      name: "Cô Ayu",
      role: "PT Quty, Người giữ giấy phép BIS tại Indonesia",
      content: "Dịch vụ đăng ký BIS xuất sắc, được khuyến nghị cao.",
    },
    {
      name: "Anh Huy",
      role: "Danu Vina, Người giữ giấy phép BIS tại Việt Nam",
      content:
        "Các tư vấn viên giấy phép BIS đáng tin cậy, quá trình nhanh chóng.",
    },
    {
      name: "Anh Minh",
      role: "Hanh My Production Company, Người giữ giấy phép BIS tại Việt Nam",
      content: "Các tư vấn viên BIS chuyên gia, chứng nhận trở nên dễ dàng.",
    },
    {
      name: "Cô Hoa",
      role: "Sedo Vina, Người giữ giấy phép BIS tại Việt Nam",
      content: "Đăng ký chứng chỉ BIS suôn sẻ, hỗ trợ tuyệt vời.",
    },
    {
      name: "Cô Hana",
      role: "Misumi Japan, Người giữ giấy phép BIS tại Nhật Bản",
      content:
        "Các tư vấn viên BIS đáng tin cậy, quá trình chứng nhận nhanh chóng.",
    },
    {
      name: "Cô Nok",
      role: "Thantawan Public Industry Company, Người giữ giấy phép BIS tại Thái Lan",
      content: "Dịch vụ chứng nhận BIS chuyên nghiệp, rất hiệu quả.",
    },
    {
      name: "Anh Luis",
      role: "Cortizo Aluminios, Người giữ giấy phép BIS tại Tây Ban Nha",
      content: "Hướng dẫn đăng ký và giấy phép BIS xuất sắc.",
    },
    {
      name: "Cô Aisha",
      role: "Midal Cables, Người giữ giấy phép BIS tại Bahrain",
      content: "Các tư vấn viên BIS chuyên gia, quá trình chứng nhận suôn sẻ.",
    },
    {
      name: "Cô Aisha",
      role: "Nobilia Kitchens, Người giữ giấy phép BIS tại Bahrain",
      content: "Hỗ trợ đăng ký chứng chỉ BIS đáng tin cậy.",
    },
  ];

  return (
    <div className="w-full md:w-[360px] rounded-lg overflow-hidden bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="pt-6 px-6 pb-4">
        <div className="flex gap-2 items-center">
          <Languages className="text-[#232327]" />
          <div className="text-xl font-geist font-semibold text-[#232327]">
            Lời chứng thực của khách hàng
          </div>
        </div>
        <div className="mt-8 mb-5 rounded-lg h-[450px] overflow-hidden">
          <Marquee
            vertical
            repeat={2}
            pauseOnHover={true}
            className="[--duration:60s]"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="mb-3">
                    <div className="font-geist font-bold text-neutral-800 text-base">
                      {testimonial.name}
                    </div>
                    <p className="text-sm text-neutral-600 font-geist mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                  <p className="italic text-neutral-700 font-geist text-sm leading-relaxed font-medium">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUsServicesRightSideContentVietnamese = () => {
  const stats = {
    experience: { value: "12+", label: "Năm kinh nghiệm" },
    clients: { value: "1500+", label: "Khách hàng của chúng tôi" },
    successRate: { value: "100%", label: "Tỷ lệ thành công" },
    countries: { value: "20+", label: "Quốc gia phục vụ" },
  };

  const reasons = [
    {
      title: "Hướng dẫn chuyên gia",
      description:
        "Đội ngũ của chúng tôi mang đến hơn 12 năm kinh nghiệm trong tuân thủ CDSCO và BIS.",
    },
    {
      title: "Hiệu quả thời gian",
      description:
        "Chúng tôi giảm thời gian phê duyệt lên đến 40% với các quy trình được tối ưu hóa.",
    },
    {
      title: "Thành công đã được chứng minh",
      description: "100% tỷ lệ thành công với hơn 1500 đăng ký thành công.",
    },
    {
      title: "Tập trung vào khách hàng",
      description:
        "Quản lý tài khoản chuyên dụng đảm bảo dịch vụ được cá nhân hóa.",
    },
  ];

  const performance = {
    title: "Hiệu suất của chúng tôi",
    metrics: {
      speed: { label: "Tốc độ", value: "95" },
      success: { label: "Thành công", value: "99" },
      satisfaction: { label: "Hài lòng", value: "98" },
    },
  };

  const reasonIcons = {
    0: <Shield className="h-8 w-8 text-blue-600" />,
    1: <Clock className="h-8 w-8 text-emerald-600" />,
    2: <Award className="h-8 w-8 text-amber-600" />,
    3: <HeartHandshake className="h-8 w-8 text-purple-600" />,
  };

  return (
    <div className="w-full md:w-[360px] p-5 rounded-lg bg-gradient-to-br from-slate-50 to-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      {/* Header with Animation */}
      <div className="flex gap-2 items-center">
        <Lightbulb className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          Tại sao chọn chúng tôi
        </div>
      </div>

      {/* Highlight Stats */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-blue-200">
          <h3 className="text-2xl font-bold text-blue-600 font-geist">
            {stats.experience.value}
          </h3>
          <p className="text-xs text-gray-600 font-geist">
            {stats.experience.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-emerald-200">
          <h3 className="text-2xl font-bold text-emerald-600 font-geist">
            {stats.clients.value}
          </h3>
          <p className="text-xs text-gray-600 font-geist">
            {stats.clients.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-amber-200">
          <h3 className="text-2xl font-bold text-amber-600 font-geist">
            {stats.successRate.value}
          </h3>
          <p className="text-xs text-gray-600 font-geist">
            {stats.successRate.label}
          </p>
        </div>
        <div className="bg-white p-2 rounded-lg border border-gray-200 text-center hover:border-purple-200">
          <h3 className="text-2xl font-bold text-purple-600 font-geist">
            {stats.countries.value}
          </h3>
          <p className="text-xs text-gray-600 font-geist">
            {stats.countries.label}
          </p>
        </div>
      </div>

      {/* Reasons List */}
      <div className="mt-4 space-y-3">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg p-3 border border-gray-200 hover:border-blue-200"
          >
            <div className="flex gap-3 items-start">
              <div className="p-1.5 bg-gray-50 rounded-lg group-hover:bg-blue-50">
                {reasonIcons[index]}
              </div>
              <div>
                <h3 className="font-geist font-semibold text-gray-900 text-sm">
                  {reason.title}
                </h3>
                <p className="text-xs text-gray-600 font-geist">
                  {reason.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simple Performance */}
      <div className="mt-4 bg-blue-50 rounded-lg p-3 border border-blue-100">
        <div className="flex items-center gap-1 mb-2">
          <BarChart className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-gray-900 font-geist">
            {performance.title}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${performance.metrics.speed.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">
              {performance.metrics.speed.label}
            </span>
          </div>
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-emerald-600 rounded-full"
                style={{ width: `${performance.metrics.success.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">
              {performance.metrics.success.label}
            </span>
          </div>
          <div className="text-center">
            <div className="h-1.5 w-full bg-gray-100 rounded-full mb-1">
              <div
                className="h-full bg-amber-600 rounded-full"
                style={{ width: `${performance.metrics.satisfaction.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-geist">
              {performance.metrics.satisfaction.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactFormServicesRightSideContentVietnamese = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    if (path.includes("/what-is-crs-bis-or-crs-registration"))
      return "CRS Registration (Vietnamese)";
    if (path.includes("/chung-nhan-bis-tai-viet-nam"))
      return "Vietnam Blog (Vietnamese)";
    if (path.includes("/vi/crs-bis-la-gi-hoac-dang-ky-crs"))
      return "CRS Registration (Vietnamese)"; 
    if (path.includes("/vi/chung-nhan-bis-isi-mark"))
      return "ISI Mark (Vietnamese)";
    if (path.includes("/vi/chung-chi-bis-la-gi-bis-an-do"))
      return "BIS Certification (Vietnamese)";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    pageUrl: window.location.href,
    pageName: getPageName(),
  });

  const { fullName, email, phoneNumber, message, pageUrl, pageName } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Full name validation
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      toast({
        variant: "destructive",
        title: "Vui lòng nhập tên đầy đủ hợp lệ.",
        description: "Tên chỉ được chứa chữ cái và khoảng trắng.",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Vui lòng nhập số điện thoại hợp lệ",
        description: "Số điện thoại phải chứa (8-15 chữ số)",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Vui lòng nhập địa chỉ email hợp lệ.",
        description: "Kiểm tra xem định dạng email của bạn có đúng không",
      });
      setLoading(false);
      return;
    }

    console.log(formData);

    try {
      const response = await axios.post(
        `${BASE_URL}/contact/submit-contact`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast({
        title: "Gửi biểu mẫu liên hệ thành công!",
        description:
          "Cảm ơn bạn đã liên hệ với chúng tôi. Đội ngũ của chúng tôi sẽ liên hệ với bạn sớm.",
      });

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
        pageUrl: window.location.href,
        pageName: getPageName(),
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Không thể gửi chi tiết biểu mẫu liên hệ!";
      toast({
        variant: "destructive",
        title: errorMessage,
        description:
          "Đã xảy ra lỗi. Vui lòng kiểm tra chi tiết của bạn và thử lại.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-[360px] md:sticky md:top-[128px] md:self-start  p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      {/* Header */}
      <div className="flex gap-2 items-center">
        <PhoneCall className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          Yêu cầu cuộc gọi miễn phí
        </div>
      </div>

      {/* Intro Text */}
      <p className="mt-3 text-sm text-gray-600 font-geist">
        Để lại thông tin của bạn bên dưới và các chuyên gia của chúng tôi sẽ gọi
        lại trong vòng 24 giờ để thảo luận về nhu cầu tuân thủ quy định của bạn.
      </p>

      {/* Form */}
      <form onSubmit={handleFormSubmit} className="mt-5 space-y-4">
        {/* Name Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="Tên của bạn*"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Phone Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="Số điện thoại*"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="Địa chỉ email*"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <MessageCircle className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            name="message"
            value={message}
            onChange={handleOnChange}
            disabled={loading}
            required
            placeholder="Chứng nhận yêu cầu*"
            rows="3"
            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          ></textarea>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full mt-5 font-geist bg-[#212126] hover:bg-[#212126]/90 text-white group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            {loading ? (
              <div className="flex gap-3 items-center justify-center">
                <ClockLoader size={22} color="#fff" />
                <span>Đang gửi</span>
              </div>
            ) : (
              <>
                Yêu cầu cuộc gọi
                <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
          <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Button>
      </form>

      {/* Privacy Note */}
      <p className="mt-3 text-xs text-center text-gray-500 font-geist">
        Bằng cách gửi biểu mẫu này, bạn đồng ý với{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Chính sách Bảo mật
        </a>{" "}
        của chúng tôi và đồng ý được liên hệ.
      </p>
    </div>
  );
};
