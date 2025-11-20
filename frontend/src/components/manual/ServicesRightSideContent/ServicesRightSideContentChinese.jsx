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
  
  const ServicesRightSideContentChinese = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  
    const showComponentsPaths = [
      "/zh/crs-bis-shi-shen-me-huo-crs-deng-ji",
      "/zh/yin-du-bis-fang-an-x-ren-zheng",
    ];
  
    // Check if current path should show these components
    const shouldShowComponents = showComponentsPaths.includes(currentPath);
  
    return (
      <div className="flex flex-col gap-6 w-full md:w-[360px]">
        {/* BIS QCO UPDATES - Services Right Side Content*/}
        {shouldShowComponents && <BISQCOUpdatesServicesRightSideContentChinese />}
        {/* Client Testimonial - Services Right Side Content*/}
        <ClientTestimonialServicesRightSideContentChinese />
        {/* Why Choose Us - Services Right Side Content*/}
        <WhyChooseUsServicesRightSideContentChinese />
        {/* Contact Form - Services Right Side Content*/}
        <ContactFormServicesRightSideContentChinese />
      </div>
    );
  };
  
  export default ServicesRightSideContentChinese;
  
  const BISQCOUpdatesServicesRightSideContentChinese = () => {
    const blogPosts = [
      {
        image:
          "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "BIS certification for Work chairs",
        url: "/bis-qco-updates/bis-certificate-for-work-chairs",
      },
      {
        image:
          "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "BIS certification for Chairs and stools",
        url: "/bis-qco-updates/bis-certificate-for-chairs-and-stools",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MCIfpfHsgrogddkI6G12hT4i6LwIPATLHg&s",
        title: "BIS Notification for Tables and desks",
        url: "/bis-qco-updates/bis-certificate-for-tables-and-desks",
      },
      {
        image: "https://alephindia.in/images/isi/furniture-storage-units.png",
        title: "BIS Notification for Storage units",
        url: "/bis-qco-updates/bis-certificate-for-storage-units",
      },
      {
        image: "https://alephindia.in/images/isi/furniture-bunk-beds.png",
        title: "BIS Notification for Bunk beds",
        url: "/bis-qco-updates/bis-certificate-for-bunk-beds",
      },
      {
        image:
          "https://jharkhandstatenews.com/assets/admin/uploads/topstory_img/199879_1693229978.jpg",
        title: "BIS Notification for Solar DC Cable and Fire Survival Cable",
        url: "/bis-qco-updates/bis-certificate-for-solar-dc-cable-and-fire-survival-cable",
      },
      {
        image:
          "https://5.imimg.com/data5/SELLER/Default/2024/5/420886415/LD/HF/LZ/65909740/bis-certification-for-aluminium-alloy-forging-stock-and-forgings-alloy-24345.jpg",
        title:
          "BIS Notification for Wrought Aluminium and Aluminium Alloys, Forging Stock and Forgings",
        url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloys-forging-stock-and-forgings",
      },
      {
        image:
          "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "BIS Notification for H Acid",
        url: "/bis-qco-updates/bis-certificate-for-h-acid",
      },
      {
        image:
          "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "BIS Notification for K Acid",
        url: "/bis-qco-updates/bis-certificate-for-k-acid",
      },
      {
        image:
          "https://media.istockphoto.com/id/940248330/photo/potassium-permanganate-sodium-sulfate-mixture.jpg?s=612x612&w=0&k=20&c=lhxvzbD2cVVOJKQyLIOqSaq9dlJTtDH07kHoBT5q7_4=",
        title: "BIS Notification for Vinyl Sulphone",
        url: "/bis-qco-updates/bis-certificate-for-vinyl-sulphone",
      },
      {
        image:
          "https://m.media-amazon.com/images/I/71qI8OoNdtL._AC_UF1000,1000_QL80_.jpg",
        title: "BIS Notification for Electric Fence Energizers",
        url: "/bis-qco-updates/bis-certificate-for-electric-fence-energizers",
      },
      {
        image:
          "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "BIS Notification for Clothes Washing Machines",
        url: "/bis-qco-updates/bis-certificate-for-clothes-washing-machines",
      },
      {
        image: "https://m.media-amazon.com/images/I/31waXELONZL.jpg",
        title: "BIS Notification for Gypsum Plaster Boards",
        url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
      },
      {
        image:
          "https://m.media-amazon.com/images/I/61pOnpX8BpL._AC_UF1000,1000_QL80_.jpg",
        title:
          "BIS Notification for Aluminium alloy tubes for irrigation purposes -welded tubes",
        url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tubes-for-irrigation-purposes-welded-tubes",
      },
      {
        image: "https://www.sunnysteel.com/img/extruded-finned-tube.jpg",
        title:
          "BIS Notification for Aluminium alloy tube for irrigation purposes – extruded tube",
        url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tube-for-irrigation-purposes-extruded-tube",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVrUUdi1q8ZFnBqvx3vW5Ac03cUtUwR7N_A&s",
        title:
          "BIS Notification for EC Grade Aluminium Rod produced by Continuous Casting and Rolling",
        url: "/bis-qco-updates/bis-certificate-for-ec-grade-aluminium-rod-produced-by-continuous-casting-and-rolling",
      },
      {
        image:
          "https://media.istockphoto.com/id/1322355858/photo/aluminium-round-long-products-on-black-steel-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=I3k2F2cQSo5AW1qOQ5uxi2ROi-YJQoH47XzApxCP7qY=",
        title:
          "BIS Notification for Wrought aluminium and aluminium alloy bars, rods and sections",
        url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections",
      },
      {
        image:
          "https://5.imimg.com/data5/SELLER/Default/2023/3/EC/HR/GU/184505254/regular-gypsum-plasterboard.jpg",
        title: "BIS Notification for Gypsum Plaster Boards",
        url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
      },
    ];
  
    return (
      <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <div className="flex gap-2 items-center">
          <AlignLeft className="text-[#232327]" />
          <div className="text-xl font-geist font-semibold text-[#232327]">
            BIS QCO更新
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
                          了解更多
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
              查看所有更新
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    );
  };
  
  const ClientTestimonialServicesRightSideContentChinese = () => {
    const testimonials = [
      {
        name: "Ms.Eliyawati",
        role: "PT Quty Karunia，越南BIS许可证持有者",
        content:
          "太阳认证印度提供了出色的BIS认证服务。他们无与伦比的服务和真诚赢得了我们的信任。印度最好的BIS咨询公司之一！",
      },
      {
        name: "Ms.Belle",
        role: "Thantawan Industries Ltd，泰国BIS许可证持有者",
        content:
          "太阳认证印度在整个BIS认证过程中为我们提供了支持。他们响应迅速的客户服务和守时性非常出色。强烈推荐，让BIS认证变得无忧无虑。",
      },
      {
        name: "Ms.Jun Min Sim",
        role: "Leaderart Industries，马来西亚BIS许可证持有者",
        content:
          "太阳认证印度帮助我们获得了BIS认证，使我们在印度的业务翻倍。他们的服务快速、真实，并且与最新的BIS规范保持同步。",
      },
      {
        name: "Ms. Fatima",
        role: "Aluminium Bahrain (ALBA)，巴林BIS许可证持有者",
        content:
          "出色的BIS认证支持，非常可靠的咨询公司。",
      },
      {
        name: "Mr. Yousef",
        role: "Bahrain Aluminium Manufacturing Company，巴林BIS许可证持有者",
        content: "与专业咨询公司合作的BIS注册流程顺利。",
      },
      {
        name: "Mr. Satoshi",
        role: "Daiki Aluminium Japan，日本BIS许可证持有者",
        content: "高效的BIS许可证协助，优秀的咨询公司。",
      },
      {
        name: "Ms. Amanda",
        role: "Honeywell，美国BIS许可证持有者",
        content: "专业的BIS证书指导，非常满意。",
      },
      {
        name: "Ms. Amanda",
        role: "Trimble Navigation，美国BIS许可证持有者",
        content: "无缝的BIS认证和注册支持。",
      },
      {
        name: "Ms. Martina",
        role: "Remsa Italia，意大利BIS许可证持有者",
        content: "有帮助的BIS咨询公司，简化了许可证流程。",
      },
      {
        name: "Ms. Nikola",
        role: "Aquazzura，意大利BIS许可证持有者",
        content:
          "我们在时间范围内以合理的价格获得了BIS证书，太阳团队做得很好！",
      },
      {
        name: "Ms. Ayu",
        role: "PT Quty，印度尼西亚BIS许可证持有者",
        content: "出色的BIS注册服务，强烈推荐。",
      },
      {
        name: "Mr. Huy",
        role: "Danu Vina，越南BIS许可证持有者",
        content: "可靠的BIS许可证咨询公司，流程快速。",
      },
      {
        name: "Mr. Minh",
        role: "Hanh My Production Company，越南BIS许可证持有者",
        content: "专业的BIS咨询公司，认证变得容易。",
      },
      {
        name: "Ms. Hoa",
        role: "Sedo Vina，越南BIS许可证持有者",
        content: "顺利的BIS证书注册，支持很棒。",
      },
      {
        name: "Ms. Hana",
        role: "Misumi Japan，日本BIS许可证持有者",
        content: "值得信赖的BIS咨询公司，认证流程快速。",
      },
      {
        name: "Ms. Nok",
        role: "Thantawan Public Industry Company，泰国BIS许可证持有者",
        content: "专业的BIS认证服务，非常高效。",
      },
      {
        name: "Mr. Luis",
        role: "Cortizo Aluminios，西班牙BIS许可证持有者",
        content: "出色的BIS注册和许可证指导。",
      },
      {
        name: "Ms. Aisha",
        role: "Midal Cables，巴林BIS许可证持有者",
        content: "专业的BIS咨询公司，认证流程顺利。",
      },
      {
        name: "Ms. Aisha",
        role: "Nobilia Kitchens，巴林BIS许可证持有者",
        content: "可靠的BIS证书注册支持。",
      },
    ];
  
    return (
      <div className="w-full md:w-[360px] rounded-lg overflow-hidden bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <div className="pt-6 px-6 pb-4">
          <div className="flex gap-2 items-center">
            <Languages className="text-[#232327]" />
            <div className="text-xl font-geist font-semibold text-[#232327]">
              客户评价
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
  
  const WhyChooseUsServicesRightSideContentChinese = () => {
    const stats = {
      experience: { value: "12+", label: "年经验" },
      clients: { value: "1500+", label: "我们的客户" },
      successRate: { value: "100%", label: "成功率" },
      countries: { value: "20+", label: "服务国家" },
    };
  
    const reasons = [
      {
        title: "专业指导",
        description:
          "我们的团队在CDSCO和BIS合规方面拥有12年以上的经验。",
      },
      {
        title: "高效省时",
        description:
          "我们通过简化流程将审批时间缩短多达40%。",
      },
      {
        title: "成功验证",
        description: "100%成功率，已完成1500多个成功注册。",
      },
      {
        title: "以客户为中心",
        description: "专门的客户经理确保个性化服务。",
      },
    ];
  
    const performance = {
      title: "我们的表现",
      metrics: {
        speed: { label: "速度", value: "95" },
        success: { label: "成功", value: "99" },
        satisfaction: { label: "满意度", value: "98" },
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
            为什么选择我们
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
  
  const ContactFormServicesRightSideContentChinese = () => {
    const [loading, setLoading] = useState(false);
  
    // Function to get page name based on URL
    const getPageName = () => {
      const path = window.location.pathname;
      
      if (path.includes("/zh/crs-bis-shi-shen-me-huo-crs-deng-ji"))
        return "CRS Chinese - 中文页面";
      if (path.includes("/zh/yin-du-bis-fang-an-x-ren-zheng") || path.includes("/indian-bis-certification-under-scheme-x"))
        return "Scheme X Chinese - 中文页面"; 
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
          title: "请输入有效的全名。",
          description: "姓名应仅包含字母和空格。",
        });
        setLoading(false);
        return;
      }
  
      // Phone number validation
      const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
      if (!phoneRegex.test(phoneNumber)) {
        toast({
          variant: "destructive",
          title: "请输入有效的电话号码",
          description: "电话号码应为（8-15位数字）",
        });
        setLoading(false);
        return;
      }
  
      // Email validation - allow any domain
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
      if (!emailRegex.test(email)) {
        toast({
          variant: "destructive",
          title: "请输入有效的电子邮件地址。",
          description: "请检查您的电子邮件格式是否正确",
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
          title: "联系表单提交成功！",
          description:
            "感谢您联系我们。我们的团队将很快与您联系。",
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
          "提交联系表单详细信息失败！";
        toast({
          variant: "destructive",
          title: errorMessage,
          description:
            "出了点问题。请检查您的详细信息并重试。",
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
            请求免费回电
          </div>
        </div>

        {/* Intro Text */}
        <p className="mt-3 text-sm text-gray-600 font-geist">
          请在下方留下您的详细信息，我们的专家将在24小时内回电，讨论您的合规需求。
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
              placeholder="您的姓名*"
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
              placeholder="电话号码*"
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
              placeholder="电子邮件地址*"
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
              placeholder="所需认证*"
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
                  <span>发送中</span>
                </div>
              ) : (
                <>
                  请求回电
                  <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </span>
            <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Button>
        </form>
  
        {/* Privacy Note */}
        <p className="mt-3 text-xs text-center text-gray-500 font-geist">
          提交此表单即表示您同意我们的{" "}
          <a href="#" className="text-blue-600 hover:underline">
            隐私政策
          </a>{" "}
          并同意被联系。
        </p>
      </div>
    );
  };
  