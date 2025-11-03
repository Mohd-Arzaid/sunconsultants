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

const ServicesRightSideContentKorean = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const showComponentsPaths = [
    
    "/hangug-ui-bis-injeung",
    "/ko/crs-bis-i-mueos-inga-crs-deunglog",
    // ISI Mark Korean Page Url
    "/ko/bis-isi-mark-injeung",
    // BIS CERTIFICATION PATH
    "/ko/bis-jeungmyeongseo-ga-mueos-indo-bis",
    //scheme x product url
    "/bis-seukim-x-injeung-wonsimbunligi-mich-yeorgwa-ttoneun-jeongje-gigye",
  ];

  // Check if current path should show these components
  const shouldShowComponents = showComponentsPaths.includes(currentPath);

  return (
    <div className="flex flex-col gap-6 w-full md:w-[360px]">
      {/* BIS QCO UPDATES - Services Right Side Content*/}
      {shouldShowComponents && <BISQCOUpdatesServicesRightSideContentKorean />}
      {/* Client Testimonial - Services Right Side Content*/}
      <ClientTestimonialServicesRightSideContentKorean />
      {/* Why Choose Us - Services Right Side Content*/}
      <WhyChooseUsServicesRightSideContentKorean />
      {/* Contact Form - Services Right Side Content*/}
      <ContactFormServicesRightSideContentKorean />
    </div>
  );
};

export default ServicesRightSideContentKorean;

const BISQCOUpdatesServicesRightSideContentKorean = () => {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "업무용 의자 BIS 인증",
      url: "/bis-qco-updates/bis-certificate-for-work-chairs",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "의자 및 스툴 BIS 인증",
      url: "/bis-qco-updates/bis-certificate-for-chairs-and-stools",
    },
    {
      image:
        "https://globalomega.com/wp-content/uploads/WhatsApp-Image-2023-11-22-at-16.08.01-1-300x300.jpeg",
      title: "테이블 및 책상 BIS 고시",
      url: "/bis-qco-updates/bis-certificate-for-tables-and-desks",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-storage-units.png",
      title: "수납장 BIS 고시",
      url: "/bis-qco-updates/bis-certificate-for-storage-units",
    },
    {
      image: "https://alephindia.in/images/isi/furniture-bunk-beds.png",
      title: "2층 침대 BIS 고시",
      url: "/bis-qco-updates/bis-certificate-for-bunk-beds",
    },
    {
      image:
        "https://jharkhandstatenews.com/assets/admin/uploads/topstory_img/199879_1693229978.jpg",
      title: "태양광 DC 케이블 및 내화 케이블 BIS 고시",
      url: "/bis-qco-updates/bis-certificate-for-solar-dc-cable-and-fire-survival-cable",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420886415/LD/HF/LZ/65909740/bis-certification-for-aluminium-alloy-forging-stock-and-forgings-alloy-24345.jpg",
      title: "단조 알루미늄 및 알루미늄 합금, 단조 재료 및 단조품 BIS 고시",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloys-forging-stock-and-forgings",
    },
    {
      image:
        "https://images.unsplash.com/photo-1651197122040-3ea0656161ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "H 산 BIS 고시",
      url: "/bis-qco-updates/bis-certificate-for-h-acid",
    },
    {
      image:
        "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "K 산 BIS 고시",
      url: "/bis-qco-updates/bis-certificate-for-k-acid",
    },
    {
      image:
        "https://media.istockphoto.com/id/940248330/photo/potassium-permanganate-sodium-sulfate-mixture.jpg?s=612x612&w=0&k=20&c=lhxvzbD2cVVOJKQyLIOqSaq9dlJTtDH07kHoBT5q7_4=",
      title: "비닐 술폰 BIS 고시",
      url: "/bis-qco-updates/bis-certificate-for-vinyl-sulphone",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71qI8OoNdtL._AC_UF1000,1000_QL80_.jpg",
      title: "전기 울타리 에너자이저 BIS 고시",
      url: "/bis-qco-updates/bis-certificate-for-electric-fence-energizers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "세탁기 BIS 고시",
      url: "/bis-qco-updates/bis-certificate-for-clothes-washing-machines",
    },
    {
      image: "https://m.media-amazon.com/images/I/31waXELONZL.jpg",
      title: "석고 보드 BIS 고시",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61pOnpX8BpL._AC_UF1000,1000_QL80_.jpg",
      title: "관개용 알루미늄 합금 튜브 BIS 고시 - 용접 튜브",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tubes-for-irrigation-purposes-welded-tubes",
    },
    {
      image: "https://www.sunnysteel.com/img/extruded-finned-tube.jpg",
      title: "관개용 알루미늄 합금 튜브 BIS 고시 – 압출 튜브",
      url: "/bis-qco-updates/bis-certificate-for-aluminium-alloy-tube-for-irrigation-purposes-extruded-tube",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVrUUdi1q8ZFnBqvx3vW5Ac03cUtUwR7N_A&s",
      title: "연속 주조 및 압연으로 생산된 EC급 알루미늄 로드 BIS 고시",
      url: "/bis-qco-updates/bis-certificate-for-ec-grade-aluminium-rod-produced-by-continuous-casting-and-rolling",
    },
    {
      image:
        "https://vincular.in/wp-content/uploads/2024/11/304.-Quality-Control-Order-on-Wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections-For-General-Engineering-Purposes.png",
      title: "단조 알루미늄 및 알루미늄 합금 바, 로드 및 섹션 BIS 고시",
      url: "/bis-qco-updates/bis-certificate-for-wrought-aluminium-and-aluminium-alloy-bars-rods-and-sections",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/EC/HR/GU/184505254/regular-gypsum-plasterboard.jpg",
      title: "석고 보드 BIS 고시",
      url: "/bis-qco-updates/bis-certificate-for-gypsum-plaster-boards",
    },
  ];

  return (
    <div className="w-full md:w-[360px] p-6 rounded-lg bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="flex gap-2 items-center">
        <AlignLeft className="text-[#232327]" />
        <div className="text-xl font-geist font-semibold text-[#232327]">
          BIS QCO 업데이트
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
                        더 읽기
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
            모든 업데이트 보기
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const ClientTestimonialServicesRightSideContentKorean = () => {
  const testimonials = [
    {
      name: "Eliyawati님",
      role: "PT Quty Karunia, 베트남 BIS 라이센스 보유자",
      content:
        "Sun Certifications India는 훌륭한 BIS 인증 서비스를 제공했습니다. 그들의 비교할 수 없는 서비스와 진정성이 우리의 신뢰를 얻었습니다. 인도 최고의 BIS 컨설턴트 중 하나입니다!",
    },
    {
      name: "Belle님",
      role: "Thantawan Industries Ltd, 태국 BIS 라이센스 보유자",
      content:
        "Sun Certifications India는 BIS 인증 과정 전반에 걸쳐 우리를 지원했습니다. 그들의 반응적인 고객 서비스와 정시성은 탁월합니다. 문제 없는 BIS 인증을 위해 강력히 추천합니다.",
    },
    {
      name: "Jun Min Sim님",
      role: "Leaderart Industries, 말레이시아 BIS 라이센스 보유자",
      content:
        "Sun Certifications India는 우리가 BIS 인증을 획득하는 데 도움을 주었고, 인도에서의 우리의 참여를 두 배로 늘렸습니다. 그들의 서비스는 빠르고 진정하며 최신 BIS 규범과 함께 업데이트됩니다.",
    },
    {
      name: "Fatima님",
      role: "Aluminium Bahrain (ALBA), 바레인 BIS 라이센스 보유자",
      content: "훌륭한 BIS 인증 지원, 매우 신뢰할 수 있는 컨설턴트입니다.",
    },
    {
      name: "Yousef님",
      role: "Bahrain Aluminium Manufacturing Company, 바레인 BIS 라이센스 보유자",
      content: "전문 컨설턴트와 함께 원활한 BIS 등록 과정입니다.",
    },
    {
      name: "Satoshi님",
      role: "Daiki Aluminium Japan, 일본 BIS 라이센스 보유자",
      content: "효율적인 BIS 라이센스 지원, 훌륭한 컨설턴트입니다.",
    },
    {
      name: "Amanda님",
      role: "Honeywell, 미국 BIS 라이센스 보유자",
      content: "전문적인 BIS 인증서 가이드, 매우 만족합니다.",
    },
    {
      name: "Amanda님",
      role: "Trimble Navigation, 미국 BIS 라이센스 보유자",
      content: "원활한 BIS 인증 및 등록 지원입니다.",
    },
    {
      name: "Martina님",
      role: "Remsa Italia, 이탈리아 BIS 라이센스 보유자",
      content: "유용한 BIS 컨설턴트, 간소화된 라이센스 과정입니다.",
    },
    {
      name: "Nikola님",
      role: "Aquazzura, 이탈리아 BIS 라이센스 보유자",
      content:
        "우리는 정해진 시간 내에 합리적인 가격으로 BIS 인증서를 받았습니다. 훌륭한 작업입니다 Sun 팀!",
    },
    {
      name: "Ayu님",
      role: "PT Quty, 인도네시아 BIS 라이센스 보유자",
      content: "훌륭한 BIS 등록 서비스, 강력히 추천합니다.",
    },
    {
      name: "Huy님",
      role: "Danu Vina, 베트남 BIS 라이센스 보유자",
      content: "신뢰할 수 있는 BIS 라이센스 컨설턴트, 빠른 과정입니다.",
    },
    {
      name: "Minh님",
      role: "Hanh My Production Company, 베트남 BIS 라이센스 보유자",
      content: "전문 BIS 컨설턴트, 인증이 쉬워졌습니다.",
    },
    {
      name: "Hoa님",
      role: "Sedo Vina, 베트남 BIS 라이센스 보유자",
      content: "원활한 BIS 인증서 등록, 훌륭한 지원입니다.",
    },
    {
      name: "Hana님",
      role: "Misumi Japan, 일본 BIS 라이센스 보유자",
      content: "신뢰할 수 있는 BIS 컨설턴트, 빠른 인증 과정입니다.",
    },
    {
      name: "Nok님",
      role: "Thantawan Public Industry Company, 태국 BIS 라이센스 보유자",
      content: "전문적인 BIS 인증 서비스, 매우 효율적입니다.",
    },
    {
      name: "Luis님",
      role: "Cortizo Aluminios, 스페인 BIS 라이센스 보유자",
      content: "훌륭한 BIS 등록 및 라이센스 가이드입니다.",
    },
    {
      name: "Aisha님",
      role: "Midal Cables, 바레인 BIS 라이센스 보유자",
      content: "전문 BIS 컨설턴트, 원활한 인증 과정입니다.",
    },
    {
      name: "Aisha님",
      role: "Nobilia Kitchens, 바레인 BIS 라이센스 보유자",
      content: "신뢰할 수 있는 BIS 인증서 등록 지원입니다.",
    },
  ];

  return (
    <div className="w-full md:w-[360px] rounded-lg overflow-hidden bg-gray-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
      <div className="pt-6 px-6 pb-4">
        <div className="flex gap-2 items-center">
          <Languages className="text-[#232327]" />
          <div className="text-xl font-geist font-semibold text-[#232327]">
            고객 추천사
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

const WhyChooseUsServicesRightSideContentKorean = () => {
  const stats = {
    experience: { value: "12+", label: "년 경험" },
    clients: { value: "1500+", label: "우리 고객" },
    successRate: { value: "100%", label: "성공률" },
    countries: { value: "20+", label: "서비스 국가" },
  };

  const reasons = [
    {
      title: "전문가 가이드",
      description:
        "우리 팀은 CDSCO 및 BIS 규정 준수에서 12년 이상의 경험을 제공합니다.",
    },
    {
      title: "시간 효율성",
      description: "최적화된 프로세스로 승인 시간을 최대 40% 단축합니다.",
    },
    {
      title: "입증된 성공",
      description:
        "1500개 이상의 성공적인 등록으로 100% 성공률을 달성했습니다.",
    },
    {
      title: "고객 중심",
      description: "개인화된 서비스를 보장하는 전담 계정 관리자입니다.",
    },
  ];

  const performance = {
    title: "우리의 성과",
    metrics: {
      speed: { label: "속도", value: "95" },
      success: { label: "성공", value: "99" },
      satisfaction: { label: "만족도", value: "98" },
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
          우리를 선택하는 이유
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

const ContactFormServicesRightSideContentKorean = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    
    if (path.includes("/hangug-ui-bis-injeung")) return "Korea Blog (Korean)";
    if (path.includes("/ko/crs-bis-i-mueos-inga-crs-deunglog"))
      return "CRS Registration (Korean)";
    if (path.includes("/ko/bis-isi-mark-injeung"))
      return "ISI Mark - Korean Page";
    if (path.includes("/ko/bis-jeungmyeongseo-ga-mueos-indo-bis"))
      return "BIS common (Korean)";
    if (path.includes("/bis-seukim-x-injeung-wonsimbunligi-mich-yeorgwa-ttoneun-jeongje-gigye"))
      return "Scheme X - Centrifuges (Korean)";
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
        title: "유효한 전체 이름을 입력해주세요.",
        description: "이름은 문자와 공백만 포함해야 합니다.",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "유효한 전화번호를 입력해주세요",
        description: "전화번호는 (8-15자리)여야 합니다",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "유효한 이메일 주소를 입력해주세요.",
        description: "이메일 형식이 올바른지 확인해주세요",
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
        title: "연락처 양식이 성공적으로 제출되었습니다!",
        description: "문의해주셔서 감사합니다. 저희 팀이 곧 연락드리겠습니다.",
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
        "연락처 양식 세부사항을 제출할 수 없습니다!";
      toast({
        variant: "destructive",
        title: errorMessage,
        description:
          "문제가 발생했습니다. 세부사항을 확인하고 다시 시도해주세요.",
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
          무료 콜백 요청
        </div>
      </div>

      {/* Intro Text */}
      <p className="mt-3 text-sm text-gray-600 font-geist">
        아래에 세부사항을 남겨주시면 저희 전문가가 24시간 내에 연락드려 규제
        준수 요구사항에 대해 논의하겠습니다.
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
            placeholder="이름*"
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
            placeholder="전화번호*"
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
            placeholder="이메일 주소*"
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
            placeholder="필요한 인증*"
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
                <span>전송 중</span>
              </div>
            ) : (
              <>
                콜백 요청
                <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </span>
          <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </Button>
      </form>

      {/* Privacy Note */}
      <p className="mt-3 text-xs text-center text-gray-500 font-geist">
        이 양식을 제출함으로써 귀하는 저희의{" "}
        <a href="#" className="text-blue-600 hover:underline">
          개인정보 보호정책
        </a>{" "}
        에 동의하고 연락을 받는 것에 동의합니다.
      </p>
    </div>
  );
};
